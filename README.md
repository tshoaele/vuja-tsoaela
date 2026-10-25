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
