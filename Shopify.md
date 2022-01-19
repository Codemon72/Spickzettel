### Shopify Basics
[Help Center](https://help.shopify.com/en)
- Liquid Basics: https://shopify.github.io/liquid/basics/introduction/


### Getting started with Shopify CLI
- https://shopify.dev/themes/tools/cli/getting-started

`brew tap shopify/shopify`
`brew install shopify-cli`

`shopify version`

`shopify login --store example-store.myshopify.com`

`mkdir example-store`

`shopify theme pull` - download one of the themes (opens a dialogue) - Docs: https://shopify.dev/themes/tools/cli/theme-commands#pull
`shopify theme serve`

`shopify theme push --unpublished --json` 
  - `--unpublished` - uploads the theme to the theme library as a new unpublished theme.
  - `--json` - for better success or error messages)
  - Docs: https://shopify.dev/themes/tools/cli/theme-commands#push

- The terminal offers you pages in localhost and 'Online Store Editor' to work in
___


### Workflow with Shopify Cli

- `shopify login --store https://example.myshopify.com/`
- `shopify store` Display the store that you're currently connected to:
- `shopify theme serve`
- open in theme preview (not localhost - that seems to be buggy)
- do your thing
- `shopify logout`
___


#### workflow for development 
see above (Getting started with Shopify CLI)
- work on theme
- push changes to feature branch on GitHub
- (?GitHub Integration?)
- merge and tag the repo (-> "Create a new release")
- push master branch to shopify: `shopify theme push --unpublished`
___


## Liquid Basics
Documentation: https://shopify.dev/concepts/shopify-introduction
CheatSheet: https://www.shopify.com/partners/shopify-cheat-sheet
Shopify Community: https://community.shopify.com/c/Shopify-Community/ct-p/en
Liquid Sandbox: https://jumpseller.com/support/liquid-sandbox/

Chris the Freelancers:https://www.youtube.com/watch?v=zBtwd2OfZsI 
Chris the Freelancer guide: https://www.christhefreelancer.com/shopify-liquid-guide/

`{{ }}` - double curly brackets act as placeholders
`{% %}` - curly brackets with percentage signs contain logic
___


### Structure
`theme.liquid` is the backbone and skeleton of your page. Gets loaded every time. 
  - all apps get injected here
___


### Choosing a Theme
- look for speed and performance (how much is already built in that you don't need an app for) mainly
___


### Metafields
Docs: https://shopify.dev/api/liquid/objects/metafield
recommended App: Metafields Guru
In the code create a metafield (`{{ resource.metafields.namespace.key }}`) where you want to have it. Choose a `namespace` and a `key` for this particular metafield. Probably wrap them in conditionals.
Example for a metafield in collections: 
```s
{%- if collection.metafields.second.description != blank -%}
  <div class="collection_second-description">
    {{ collection.metafields.second.description }}
  </div>
{%- endif -%}
```

Then, on the admin page, go into the app and build the metafield there.
In this example:
> Apps/ Collections / Create metafield / multi-line text
insert you chosen `namespace` under 'Namespace' and `key` und 'key' and Bob' your uncle.

ytube tutorial: https://www.youtube.com/watch?v=UnHf57_YwPA
___


### Shopify Partners
To work on a theme as a developer create an account.
- https://partners.shopify.com/


### How to Set Up a Local Theme Development Workflow
check out: https://www.youtube.com/watch?v=SrtOXwjXJ1w


### Apps I liked or come recommended
- Metafields Guru - add custom fields #metafields


### Page Speed
- good article: https://www.semrush.com/blog/9-tips-for-boosting-the-speed-of-your-shopify-website/
- the score shown in the admin interface comes from google/lighthouse and might NOT be the best source (maybe check out `pingdom.com`, `gtmetrix.com` and `https://pagespeed.web.dev/`)
  - also: better check a couple of times for an average value
- number of apps are an important factor here
- check for the number of HTTP requests
- see also "Async Script Loading" in this cheat sheet
- homepage banners / sliders are heavy

Tipp: deinstalled apps don't always remove all of their code. This might slow your page down and you have to do it by hand.
- in theme.liquid (and also header.liquid and footer.liquid) search for remains of apps (for example look for `{%include `)
  - check if the name after `include` belongs to an app that is still in use (careful: could be name of the app or the creator of the app...)(google: shopify apps by exampleName)
  - if you delete the `{% include 'exampleName' %}`, check for (additional) errors in the console of the live page 
  - after deleting the `{% include 'exampleName' %}` line, delete the exampleName.liquid (probably in /snippets)
___


### Async Script Loading
Change this:
`{{ 'example.js' | asset_url | script_tag }}`
to this:
`<script src="{{ 'example.js' | asset_url }}" async></script>`
___


### Preview Link
Previewing the offline theme
- Firstly, from your Shopify admin, navigate to Online Store > Themes.
- Find the theme that you want to share and click on Actions > Preview. (if it is not there: upload it)
- On the new page that appeared, wait for a second and at the bottom of the screen you’ll see a bar pop up.
- On this bar, click on the button Share Preview > Copy Link.
  Note: Make sure you click on this button, do not share the URL on the top of your page because it won’t work.
- Now just share the generated link with whoever you wish!

Workflow for Uploading the new Theme:
- in your main/ master branch, download the live theme with `shopify theme pull` (Docs: https://shopify.dev/themes/tools/cli/theme-commands#pull)
  - check for their changes with `git status`
  - commit with "changes by client" or "current live theme version"
- go into the local git branch with the new features you created
  - `rebase master` and solve all conflicts
  - `shopify theme serve` and check 
    - for errors
    - their recent changes
    - your changes
  - stay in this branch and upload it to shopify with `shopify theme push --unpublished --json`
  - you will be asked for a theme name, choose something along the line: "GeneralThemeName-CoolNewFeature"
    - this will make it easier for the client to find the theme herself in the library
  - now the customer can preview the features easily himself (>Online Store >Themes >Action button on respective theme >Preview) or you can generate a link in the preview (at the bottom of the page: >Share Preview)
___


## MIGHT BE OUT-DATED:
#### workflow for development / publishing themes
Jody Edgar's Advice: https://youtu.be/Tt-Wy-ZDwas?t=110
- make a copy of the live theme and name it: "[current title] (Development)"
- work on the copy
- publish the finished version
- rename the former active version to: "[current title] (date last saved)"
- rename the published version to: "[current title] (active)"

#### workflow for new project:
- open a folder: `mkdir example-folder` //use dashes between words
- go into the folder: `cd example-folder`
- download theme: `theme get --password=[your-api-password] --store=[your-store.myshopify.com] --themeid=[your-theme-id]`
  - [password](https://youtu.be/SrtOXwjXJ1w?t=426): create private App: Apps/ "Manage private Apps"/ "create new private App"; Permission: Themes: Read and Write; "Safe" / 
  - [store - store ID](https://youtu.be/SrtOXwjXJ1w?t=588): url clip of the shop (eg: sam-the-merch-store.myshopify.com)  
  - [themeid - theme ID](https://youtu.be/SrtOXwjXJ1w?t=618): either run a theme command: `theme get --list -p=[your-api-password] -s=[your-store.myshopify.com]` or go to "Online Store" / "Themes" / "Customize"/ get the number from the browser.
- test if it works with {{ template }} in theme.liquid (should give out "index" on main page
- possible in config.yml set up an [ignore rule for settings_data.json](https://youtu.be/SrtOXwjXJ1w?t=1314)
````
ignore_files:
-config/settings_data.json
````

- initialize git: `git init`
- check with: `ls -la` (there should be a '.git' file now)
- `git acm "first commit - add all initial theme files"`
- create empty repository on GitHub and copy the URL
- `$ git remote add origin <url to your GitHub repository>`
- `git push -u origin master`



Frank "T-Shirt-Frank" Bendler: [Youtube: Shopify Store erstellen online Shop Anleitung KOMPLETTER KURS](https://www.youtube.com/watch?v=Yr4zUlbmwuw)

Article from Christopher Dodd: [Using Git with Shopify](https://christopherdodd.com/git-with-shopify/)


#### shopify courses @ **Partner Academy** that seem useful:
[Shopify Fundamentals](https://partner-training.shopify.com/outline/iihbx9ym/cover)
[Store Operations Fundamentals](https://partner-training.shopify.com/outline/25unidim/cover)
[Partner Program Fundamentals](https://partner-training.shopify.com/outline/bm3o7mou/cover)