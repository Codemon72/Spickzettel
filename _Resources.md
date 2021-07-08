### Brad Traversy's Humongous List
https://github.com/bradtraversy/design-resources-for-developers/blob/master/readme.md
___


### APIs
- Beers: https://api.punkapi.com/v2/beers
- Chuck Norris Jokes: https://api.chucknorris.io/
- https://fakestoreapi.com/
- JSONplaceholder API: http://jsonplaceholder.typicode.com/
- Pokemon API: https://pokeapi.co/
- Star Wars API: https://swapi.dev/
- list of public apis: https://github.com/public-apis/public-apis
- list of movies: https://www.themoviedb.org/
  - https://www.themoviedb.org/documentation/api/discover
  - https://www.themoviedb.org/settings/api
- ISS location: https://wheretheiss.at/w/developer
___


### Color Picker
- google: 'color picker'
- https://color.adobe.com/create/color-wheel
_


### CDNs
- https://cdnjs.com/libraries
___


### DeadLinkChecker
check for dead / broken links
- https://www.deadlinkchecker.com/
___


### `imagemagick` for Sizing Images
(first you need to install it. E.g. https://formulae.brew.sh/formula/imagemagick#default)
use command line to get into correct folder, then, eg:

`convert anton.jpg -scale 500 anton.jpg`

the value determines the width in px
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


### QR Code Generator
- from Marko Denic: https://markodenic.com/tools/qr-code-generator/
___


