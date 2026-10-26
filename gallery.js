'use strict';
(() => {
 const links=[...document.querySelectorAll('[data-artwork]')];
 const viewer=document.getElementById('art-viewer');
 if(!viewer || typeof viewer.showModal!=='function')return;
 const image=document.getElementById('art-image');let index=0,opener=null;
 const show=i=>{index=(i+links.length)%links.length;const a=links[index];image.src=a.href;image.alt=a.querySelector('img').alt;document.getElementById('art-title').textContent=a.dataset.title;document.getElementById('art-kind').textContent=a.dataset.kind;document.getElementById('art-counter').textContent=(index+1)+' / '+links.length;document.getElementById('art-file').href=a.href;};
 links.forEach((a,i)=>a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();opener=a;show(i);viewer.showModal();}));
 document.getElementById('art-close').addEventListener('click',()=>viewer.close());
 document.getElementById('art-prev').addEventListener('click',()=>show(index-1));
 document.getElementById('art-next').addEventListener('click',()=>show(index+1));
 viewer.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();show(index+1);}if(e.key==='ArrowLeft'){e.preventDefault();show(index-1);}});
 viewer.addEventListener('click',e=>{if(e.target!==viewer)return;const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close();});
 viewer.addEventListener('close',()=>{image.removeAttribute('src');opener?.focus();});
})();
