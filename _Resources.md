### Learn X in Y minutes
overview for a lot of languages
- https://learnxinyminutes.com/

### Brad Traversy's Humongous List
https://github.com/bradtraversy/design-resources-for-developers/blob/master/readme.md

### List of Sites with Free Tiers
https://github.com/ripienaar/free-for-dev

### Marko Denic's List
- https://markodenic.com/50-free-tools-and-resources/

### Egghead's bite-size video tutorials for badass web developers
- https://egghead.io/topics
___


### APIs
- Lists of free APIs:
  - https://publicapis.dev/
  - https://github.com/toddmotto/public-apis
- Beers: https://api.punkapi.com/v2/beers
- Chuck Norris Jokes: https://api.chucknorris.io/
- API of Ice and Fire: https://anapioficeandfire.com/
- Entertainment APIs from rapidapi: https://rapidapi.com/category/Entertainment
- https://fakestoreapi.com/
- JSONplaceholder API: http://jsonplaceholder.typicode.com/
- NASA APIs: https://api.nasa.gov/
- Pixabay Docs: https://pixabay.com/api/docs/
- Pokemon API: https://pokeapi.co/
- Star Wars API: https://swapi.dev/
- list of public apis: https://github.com/public-apis/public-apis
- random quote: https://api.quotable.io/random 
- list of movies: https://www.themoviedb.org/
  - https://www.themoviedb.org/documentation/api/discover
  - https://www.themoviedb.org/settings/api
- ISS location: https://wheretheiss.at/w/developer
- Word Related APIs:
  - https://www.datamuse.com/api/
  - https://developer.wordnik.com/
___


### Color Picker
- google: 'color picker'
- https://color.adobe.com/create/color-wheel
_


### CDNs
- https://cdnjs.com/libraries for example: font-awesome
___


### DeadLinkChecker
check for dead / broken links
- https://www.drlinkcheck.com/
- https://www.deadlinkchecker.com/ (delivered a lot of false alarms 2022-05)
___


### DNS = Domain Name System
The Domain Name System (DNS) maps hostnames to IP addresses, just like phonebooks map people's names to their phone numbers. When you type URL www.yahoo.com into the browser, the browser contacts a DNS resolver that returns the server's IP address. DNS has a cost; typically it takes 20 to 120 milliseconds for it to look up the IP address for a hostname. The browser cannot download anything from the host until the lookup completes.
So it is a good idea to reduce your DNS lookups.
- Mess with DNS: https://jvns.ca/blog/2021/12/15/mess-with-dns/
___

### favicon checker
https://realfavicongenerator.net/favicon_checker#
–––

### games that teach programming
- list: https://skillcrush.com/blog/free-coding-games/
___


### icons (free)
- https://feathericons.com/
- https://iconic.app/
- https://heroicons.com/
- https://www.flaticon.com/
___


### images, illustrations (free)
- https://unsplash.com/
- https://pixabay.com/de/
- https://www.pexels.com/
- free illustrations: https://mixkit.co/free-stock-art/
___


### image size, reducing, compressing
- `imagemagick` for Sizing Images
(first you need to install it. E.g. https://formulae.brew.sh/formula/imagemagick#default)
use command line to get into correct folder, then, eg:
```s
convert anton.jpg -scale 500 anton.jpg
```
  the value determines the width in px

- online image compression for webp, jpeg, png: https://tinyjpg.com/
- list of online image compression sites: https://enviragallery.com/best-free-image-optimization-tools-for-image-compression/

___


### JSON Server
JSON Server is a Node Module that you can use to create demo rest json webservice in less than a minute. All you need is a JSON file for sample data.
- good tutorial: https://www.youtube.com/watch?v=mAqYJF-yxO8&list=PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZizIdD
- nice walkthrough: https://www.journaldev.com/10660/json-server#:~:text=JSON%20Server%20is%20a%20Node,JSON%20file%20for%20sample%20data.
- Doku: https://www.npmjs.com/package/json-server

- recommended process:
  - repo 'data' in the root of your directory
  - inside 'data' create a file db.json with valid data
  - install 'JSON Server' globally: `npm install -g json-server`
  - open a terminal, cd into your directory and run `json-server --watch data/db.json`
  - build your API as usual
___


### Open Graph Checker: 
- https://dnschecker.org/open-graph-preview-generate-metatags.php
- https://www.opengraph.xyz/
–––

### placeholder IMAGES / Unsplash

Docs: https://source.unsplash.com/

`<img src="https://source.unsplash.com/80x120" alt="random image">`

multiple random images:
```
<img src="https://source.unsplash.com/random/200x200?sig=1" />
<img src="https://source.unsplash.com/random/200x200?sig=2" />
<img src="https://source.unsplash.com/random/200x200?sig=3" />
```

more parameters example:
`<img src="https://source.unsplash.com/featured/100x160/?{sky},{sea}">`
___


### LMS
- Canvas (TeSi's choice)
___


### Network Connectivity Check
- https://fast.com
___


### Open Source Leg-Ups
- [First contributions](https://github.com/multunus/first-contributions) is a hands-on tutorial that walks you through contributions workflow on GitHub. When you complete the tutorial, you have made a contribution to the same project.
- [https://up-for-grabs.net] is a site that aggregates (rolls up and makes easy to explore) projects that actively want help. They label those projects with things like “up-for-grabs”, “jump-in” or “help wanted.”
- [goodfirstissues.com](https://goodfirstissues.com/) is a site that aggregates the latest issues with the label “Good First Issue”, which is a GitHub feature for finding easy issues to tackle (see here). goodfirstissues.com empowers first-time contributors to find and select issues that they want to solve.
- [goodfirstissue.dev](https://goodfirstissue.dev/) curates easy pickings from popular open-source projects, and helps you make your first contribution to open-source.
- [CodeTriage](https://www.codetriage.com/) helps you subscribe to your favorite open-source projects and get a new open issue from them in your inbox every day.
- Read blog posts and guides on [how to contribute to an open source project](https://www.hanselman.com/blog/GetInvolvedInOpenSourceTodayHowToContributeAPatchToAGitHubHostedOpenSourceProjectLikeCode52.aspx), then pick one!
- [Get Involved in Tech](http://www.getinvolvedintech.com/) walks you through setting up your GitHub account, exploring StackOverflow, setting up a blog and starting to tweet!
source: https://www.firsttimersonly.com/
___


### PDF
- compress, change, combine, crop, unlock, rotate: https://pdfcompressor.com/
 - full list: PDF to DOC; DOC to PDF; PDF to JPG; JPG to PDF; PDF to PNG; PNG to PDF; PDF Compressor; Combine PDF; Rotate PDF; Unlock PDF; Crop PDF 
- edit metadata: https://www.sejda.com/edit-pdf-metadata
   (free: 3 per hour)
___


### QR Code Generator
- from Marko Denic: https://markodenic.com/tools/qr-code-generator/
- https://rebrandly.com/
___


### SVGs, Free
- https://undraw.co/search
- to create: https://app.svgator.com/
___


### Text Compare, online
https://text-compare.com/
___


### URL shortener
https://rebrandly.com/
––– 

### Test Google Structured Data for Correctness**
works with URL or snippet
https://validator.schema.org/
___


### Web Components
- https://lit.dev/ (recommended by Sven from Flavia)