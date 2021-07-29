- probably a good one from Beau Carnes: 
  - Video: https://www.youtube.com/watch?v=O79pJ7qXwoE
  - Article: https://www.freecodecamp.org/news/how-to-make-a-website-with-wordpress/
  - Tutorial from FollowAndrew: https://www.youtube.com/watch?v=ZJKAwJq9_xM&list=PL0yztVlNIsg6-LRqxb39FhgWxTse4hpvr

Template Hierarchy: https://developer.wordpress.org/themes/basics/template-hierarchy/

### Backup 
to make a backup of a WordPress website you need to use plugins / go to marketplace and search for one
- used by Teresa: UpdraftPlus

### useful tools: 
- https://cyberduck.io/
- https://localwp.com/
  basic setup tutorial: https://www.youtube.com/watch?v=uQCoTQAo3qo

### Map - Find Your Way Around
the juicy bits:
- Seiten
- Design - Theme-Editor: header, footer, 404, style.css, all templates
- Individuelle Felder

### upload to site
- open cyberduck
- pick destination / destination folder (/webseiten/willowland.com/wp-content/themes/willowland)
- right-click 'upload'
- pick the file you want to upload
- 'upload'


## Watch out
- php or Wordpress loves to build `<p>` where it sees empty lines. For example in internal CSS!!

### Workflow
- get access to site
- download site and save it to GitHub
- work in small increments
  - test your code in DevTools (in all browsers)
  - apply to local files and upload them to site with cyberduck
  - hard refresh page - if necessary: empty and refill cache via admin dashboard: plugins > WP Rocket > Einstellungen


## Handled Bugs

### WP doesn't notice new CSS -> empty cache
1. Plugins > WP Rocket > Einstellungen
2. Cache leeren
3. Cache neu füllen