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



### Grundlagen:

#### Das Dashboard
Nach dem Anmelden in WordPress gelangst du zum Dashboard. Hier erhältst du einen Überblick über Aktivitäten, Beiträge, Kommentare und viele andere Dinge.

#### Beiträge und Seiten
WordPress unterscheidet zwischen Beiträgen (für Blogposts) und Seiten (für statische Inhalte wie "Über uns", "Kontakt" usw.).

#### Medien
Unter "Medien" kannst du Bilder, Videos und andere Dateien hochladen und verwalten.

#### Design/Themes
Unter "Design" kannst du das Aussehen deiner Website anpassen. Hier wählst du das Theme (Designvorlage) aus und kannst es nach Belieben anpassen.

#### Plugins
Mit Plugins erweiterst du die Funktionalität deiner WordPress-Website. Es gibt Tausende von Plugins für alle erdenklichen Zwecke.

#### Benutzer
Hier verwaltest du alle Benutzer deiner Website und legst fest, welche Berechtigungen sie haben.

#### Einstellungen
Hier konfigurierst du grundlegende Website-Einstellungen wie die Sprache, den Seitentitel, das Datumformat und vieles mehr.
–––

### Vorsichtsmaßnahmen beim Arbeiten an der Seite eines Kunden:

#### Backups
Bevor du größere Änderungen an der Website vornimmst, solltest du immer ein Backup erstellen. Dies stellt sicher, dass du die Website wiederherstellen kannst, falls etwas schiefgeht.

#### Aktualisierungen
Sei vorsichtig, wenn du WordPress, Themes oder Plugins aktualisierst. Es kann zu Kompatibilitätsproblemen kommen, die die Website stören oder gar zum Absturz bringen.

#### Plugin-Installation
Installiere keine Plugins, ohne sie zuerst zu überprüfen. Schlecht codierte oder veraltete Plugins können Sicherheitsrisiken darstellen.

#### Änderungen am Code
Wenn du am Code (z. B. PHP oder JavaScript) von Themes oder Plugins Änderungen vornehmen musst, sei sehr vorsichtig und stelle sicher, dass du weißt, was du tust. Ein kleiner Fehler kann die gesamte Website unbrauchbar machen.

#### Kommunikation
Informiere deinen Kunden immer über geplante größere Änderungen oder potenzielle Ausfallzeiten.

#### Testumgebungen
Wenn möglich, arbeite zuerst in einer Testumgebung oder Staging-Umgebung, bevor du Änderungen an der Live-Website vornimmst.
