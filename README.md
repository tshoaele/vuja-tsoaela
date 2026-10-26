# Vuja Tsoaela creative studio

## Current design

The approved multidisciplinary design has a male Vuja avatar in the header and three equally weighted branches: Art & Prompts, Apps & Planners, and Poetry & Writing. The Vault contains ten verified Gumroad products. Product prices and checkout remain on Gumroad. Product covers load from the published Gumroad image URLs. The Journal links to three real posts on tshoaele.wordpress.com. Article introductions are short summaries, not copied blog posts. About wording remains unchanged. The image carousel is deferred.

Informal Blesser is correctly presented as a calculator under Apps & Planners. The illustrative mockup's fictional story label and product covers are not used. The original woman from the earlier hero appears under Poetry & Writing.

A standalone static website. No build step, account, API key, paid service or external font is required. The revised design follows the supplied gritty anime studio reference, with original generated illustrations and CSS artwork. No analytics or storage is used.

## Preview

Open index.html directly. For clipboard support, use HTTPS or a local web server. The prompt builder provides a manual copy fallback. The ChatGPT button opens a new tab with the editable prompt in its URL; it does not make an API call.

## Deploy on GitHub Pages

1. Create a repository and upload the contents of this folder, including .github/workflows/pages.yml and .nojekyll. index.html must be at the repository root.
2. Use main as the branch, or change the branch in pages.yml.
3. In repository Settings > Pages, choose GitHub Actions as the source.
4. Run the included workflow, or push a change to main. GitHub will show the published URL when deployment finishes.

Alternative: select Deploy from a branch in Pages settings, with main and /(root). No custom domain is required. Relative asset paths support both user and project Pages URLs.

## Edit content

- index.html: studio text, collection entries and section structure.
- style.css: black, cream and crimson visual system and responsive layouts.
- editorial.css: reference-led illustrated homepage, vertical navigation and editorial panel layout.
- assets/: original generated hero and fictional city illustrations.
- app.js: prompt templates, presets, sample readings and interactive controls.
- icon.svg: original browser icon.

The writing, story opening and collection concepts are clearly labelled samples. Replace them with approved work before presenting them as published material. The signature is Vuja Tsoaela. There are no invented prices, testimonials, social links, store links or contact details. Ghost Haven sample fiction is not asserted as existing canon.

## Accessibility and scope

Includes a skip link, semantic landmarks, labelled fields, visible keyboard focus, native modal reading view with Escape support, pressed filter states, live copy/build feedback and reduced-motion support. Layouts adapt for desktop, tablet and mobile. Navigation and the visual-study details work without JavaScript. Prompt tools, collection filters and sample readers require JavaScript.

The Creation Lab includes original-character controls for archetype, aesthetic, defining detail and composition. The Archives include an illustrative character dossier and story fragment. The location is Johannesburg, South Africa. Fictional concepts do not reproduce the franchise lore mentioned in the supplied notes.

No installable PWA or offline caching is included. This avoids stale cached drafts and keeps deployment simple. The website is ready for static deployment; this package does not create or publish a GitHub repository.


Update 25 October 2026: Creation Lab and the prompt builder have been removed at the owner’s request. The collections, artwork, archive, blog and contact links remain.

Ghost Haven website preview: now represents an original novel in development, with a new standalone teaser and working Vuja profile. The private Assassin’s Creed fan manuscript is separate and is not published here. No legal clearance guarantee is made.

## Automatic content updates
The existing Pages workflow refreshes public content daily at 06:17 South African time (04:17 UTC), on a push, or with Run workflow. Scheduled runs may be delayed. GitHub disables scheduled workflows in public repositories after 60 days without repository activity; successful content commits keep the repository active. If no source changes for that long, re-enable the workflow in Actions.

The Journal shows the latest three published WordPress RSS posts with source excerpts. The Vault discovers products visible in the Gumroad storefront's initial public catalogue and refreshes all existing product links from each product page's public metadata. Existing direct links are retained even when absent from the storefront. Product removals and category corrections need a deliberate edit. Gumroad pagination or a changed storefront format can require maintenance; this is public-page extraction, not an authenticated API integration. The initial catalogue is currently fully represented by the existing ten links.

No tokens, accounts, paid services, third-party feed proxies, or npm packages are required. Uses the standard Ubuntu runner in this public repository. Product prices and checkout remain on Gumroad. Existing categories are retained; new products use title-based categories and should be reviewed. Public product titles, cover art and descriptions replace hand-maintained copies; descriptions are shortened to 190 characters. Full descriptions remain on Gumroad.

If either source fails validation, that section stays unchanged and the other may refresh. The workflow saves index.html before deployment, preserving the last successful content as fallback. It reports a failed refresh in Actions even if the fallback website deploys successfully. Manual edits to generated product cards and blog cards will be overwritten on the next refresh. Layout, About, contacts and Ghost Haven are not generated.

Identity refinement, 25 October 2026: studio.css supplies square filter tabs, condensed section headings, sans-serif product titles and a VUJA TSOAELA typographic signature. Starburst removed. Body copy remains readable; artwork, links and sync-generated content retained.

Palette and contact refinement: main surface cool stone #D5D7D4 with near-black and crimson retained. Social handles 16px sans serif, platform names 22px, stronger contrast, single-column mobile contact list.

Selected Work gallery: six owner-selected-by-delegation pieces, native dialog with previous/next and arrow-key navigation, Escape/Close, focus return, direct image links without JavaScript. gallery.css and gallery.js are independent of the daily product/blog refresh. Compressed gallery files total approximately 1.6 MB; thumbnails load lazily and larger images load on request.
