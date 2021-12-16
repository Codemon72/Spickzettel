### Shopify Basics
[Help Center](https://help.shopify.com/en)
- Liquid Basics: https://shopify.github.io/liquid/basics/introduction/


### Getting started with Shopify CLI
- https://shopify.dev/themes/tools/cli/getting-started

```
brew tap shopify/shopify
brew install shopify-cli

shopify version

shopify login --store example-store.myshopify.com

mkdir example-store

shopify theme pull
shopify theme serve
```
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


### Metafields
Docs: https://shopify.dev/api/liquid/objects/metafield
recommended App: Metafields Guru
```s
{{ resource.metafields.namespace.key }}
```
ytube tutorial: https://www.youtube.com/watch?v=UnHf57_YwPA

Apps/ Collections / Create metafield / multi-line text
locally
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
- see also Async Script Loading
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