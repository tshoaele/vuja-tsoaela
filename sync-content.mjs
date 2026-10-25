import fs from 'node:fs/promises';
const root=new URL('./',import.meta.url);
const decode=s=>s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/&#(x[\da-f]+|\d+);/gi,(_,n)=>String.fromCodePoint(n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):Number(n))).replace(/&(quot|apos|lt|gt|amp|nbsp|hellip|rsquo|lsquo|rdquo|ldquo);/g,(_,n)=>({quot:'"',apos:"'",lt:'<',gt:'>',amp:'&',nbsp:' ',hellip:'…',rsquo:'’',lsquo:'‘',rdquo:'”',ldquo:'“'}[n]));
const plain=s=>decode(decode(s).replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ').trim();
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const excerpt=s=>{s=plain(s);return s.length>190?s.slice(0,187).replace(/\s+\S*$/,'')+'…':s;};
const safe=(s,host)=>{const u=new URL(decode(s));if(u.protocol!=='https:'||u.hostname!==host)throw Error('Unexpected source URL');u.search='';u.hash='';return u.href;};
async function get(u){const r=await fetch(u,{signal:AbortSignal.timeout(30000),headers:{'User-Agent':'VujaStudioContentSync/1.0'}});if(!r.ok)throw Error('Source returned '+r.status);return r.text();}
function meta(html,key){for(const m of html.matchAll(/<meta\b[^>]*>/gi)){const attrs={};for(const a of m[0].matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs))attrs[a[1].toLowerCase()]=decode(a[3]);if(attrs.property===key||attrs.name===key)return attrs.content||'';}return '';}
let html=await fs.readFile(new URL('index.html',root),'utf8');let failed=false;
try{
 const feed=await get('https://tshoaele.wordpress.com/feed/');
 const tag=(s,n)=>s.match(new RegExp('<'+n+'(?:\\s[^>]*)?>([\\s\\S]*?)</'+n+'>'))?.[1]||'';
 const posts=[...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m=>{const s=m[1];return {title:plain(tag(s,'title')),url:safe(tag(s,'link'),'tshoaele.wordpress.com'),date:new Date(tag(s,'pubDate')),text:excerpt(tag(s,'description'))};}).filter(p=>p.title&&Number.isFinite(+p.date)&&p.date<=new Date()).sort((a,b)=>b.date-a.date).slice(0,3);
 if(posts.length<3)throw Error('Incomplete blog feed');
 const cards=posts.map(p=>`<a class="blog-entry" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer"><p class="eyebrow">${esc(p.date.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}))}</p><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p><span class="text-link">Read on WordPress ↗</span></a>`).join('\n');
 html=html.replace(/(<div class="blog-grid">)[\s\S]*?(<\/div>)/,`$1\n${cards}\n$2`);
 console.log('Blog: refreshed latest three posts.');
}catch(e){failed=true;console.warn('::warning::Blog unchanged: '+e.message);}
try{
 const storefront=await get('https://vujatsoaela.gumroad.com/');
 const page=JSON.parse(decode(storefront.match(/id="app"[^>]*data-page="([^"]+)"/)?.[1]||''));
 const products=page.props.sections.flatMap(s=>s.search_results?.products||[]);
 if(!products.length)throw Error('Storefront format changed or empty catalogue');
 const old=[...html.matchAll(/<article class="project product-card"[\s\S]*?<\/article>/g)].map(m=>m[0]);
 const urls=new Map(old.map(card=>[safe(card.match(/href="([^"]+)"/)[1],'vujatsoaela.gumroad.com'),card]));
 for(const p of products)urls.set(safe(p.url,'vujatsoaela.gumroad.com'),urls.get(safe(p.url,'vujatsoaela.gumroad.com'))||'');
 const cards=[];
 for(const [url,oldCard] of urls){
  const source=await get(url);const title=plain(meta(source,'og:title'));const description=excerpt(meta(source,'og:description')||meta(source,'description'));const image=meta(source,'og:image');
  if(!title||!description||!image)throw Error('Missing product metadata');
  if(new URL(image).protocol!=='https:')throw Error('Unsafe cover');
  const category=oldCard.match(/data-category="([^"]+)"/)?.[1]||(/poetry|poem|letters|writing|novel/i.test(title)?'writing':/prompt|anime|cinematic|art pack/i.test(title)?'art':'tools');
  const label={art:'Art & Prompts',tools:'Apps & Planners',writing:'Poetry & Writing'}[category];
  cards.push(`<article class="project product-card" data-category="${category}"><a class="product-cover-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc('View '+title+' on Gumroad (opens in a new tab)')}"><div class="product-cover"><img src="${esc(image)}" alt="${esc(title+' published cover')}" width="600" height="450" loading="lazy" decoding="async"><span class="product-volume">${esc(label)}</span></div></a><div class="product-info"><p class="eyebrow">${esc(label)}</p><h3>${esc(title)}</h3><p class="product-description">${esc(description)}</p><a class="product-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">View on Gumroad ↗</a></div></article>`);
 }
 html=html.replace(/(<div class="collection">)[\s\S]*?(<\/div>\s*<div class="store-footer">)/,`$1\n${cards.join('\n')}\n$2`).replace(/(data-filter="all"[^>]*>All <sup>)\d+/,`$1${cards.length}`).replace(/(id="collection-count"[^>]*>)\d+ items/,`$1${cards.length} items`);
 console.log('Gumroad: refreshed '+cards.length+' products, including existing direct links.');
}catch(e){failed=true;console.warn('::warning::Gumroad unchanged: '+e.message);}
await fs.writeFile(new URL('index.html',root),html);
if(failed)process.exitCode=1;

