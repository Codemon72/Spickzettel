- probably a good one from Beau Carnes: 
  - Video: https://www.youtube.com/watch?v=O79pJ7qXwoE
  - Article: https://www.freecodecamp.org/news/how-to-make-a-website-with-wordpress/
  - Tutorial from FollowAndrew: https://www.youtube.com/watch?v=ZJKAwJq9_xM&list=PL0yztVlNIsg6-LRqxb39FhgWxTse4hpvr

Template Hierarchy: https://developer.wordpress.org/themes/basics/template-hierarchy/

##### useful tools: 
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
- pick destination / destination folder (/webseiten/wildplastic.com/wp-content/themes/wildplastic)
- right-click 'upload'
- pick the file you want to upload
- 'upload'


## Watch out
- php or Wordpress loves to build `<p>` where it sees empty lines. For example in internal CSS!!


## Handled Bugs

### WP doesn't notice new CSS -> empty cache
1. Plugins > WP Rocket > Einstellungen
2. Cache leeren
3. Cache neu füllen