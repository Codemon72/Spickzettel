### bin vs sbin

/bin : For binaries usable before the /usr partition is mounted. This is used for trivial binaries used in the very early boot stage or ones that you need to have available in booting single-user mode. Think of binaries like cat, ls, etc.

/sbin : Same, but for binaries with superuser (root) privileges required.

/usr/bin : Same as first, but for general system-wide binaries.

/usr/sbin : Same as above, but for binaries with superuser (root) privileges required.


### Browser Shortcuts (Mac)
- ALT + CMD + I - open / close dev tools
- ALT + CMD + C - open / close dev tools to inspect
- ALT + CMD + left/right - change Tabs
- CMD + T - open new tab
- CMD + W - close tab
- CMD + left/ right arrows - previous/ next page

##### open window in incognito mode
Chrome:
- SHIFT + CMD + N
Firefox:
- SHIFT + CMD + P 
Safari:
- File > New Private Window (A window that's using Private Browsing has a dark Smart Search field with white text.)

##### hard refresh
Chrome + Firefox: 
- SHIFT + CMD + R
Safari on Mac: 
1. Go to Safari > Empty Cache, or hit Opt + Cmd + E.
2. To refresh, click the refresh button on the address bar or press Cmd + R.
Safari on iPhone:
- Delete the cached data for a single site by going to Settings > Safari > Advanced > Website Data > Show All Sites.
- Tap Edit on the top right of the screen, and then scroll in the list or search with the search field to find the website you want to clear. Tap the red - icon next to the site address, and then tap the Delete button that appears.
- Return to Safari and reload the page, and all the site’s elements will be reloaded.
___


### Cyberduck
- download with homebrew
- connect to server:
  - /file/open connection
    - enter Server (z.Bsp.: ftp.12345.hostingkunde.de), Username (z.B.: 123456-xy), Password
___

### Digitization in companies, how-tos and factors

Presentation by Lennart Schneider, consultant at Die Zeit

Checklist for factors that support or have to be considered when digitizing a company:
- Fun/ enjoyment with the tool, good UX - a bad UX turns off even the enthusiasts
- test: “does this (process, tool) spark joy?” based on Tidying with Marie Kondo
- Team / employees should be allowed to choose the tech they use  (software or hardware) themselves
- Saving on technology is very often saving at the wrong end. An employee who gets along better with another computer has more fun at work, less distraction / annoyance and that will pay off in the long run.
- start small (but start)
LinkedIn founder Reid Hoffman: “If you’re not embarrassed by the first version of your product, you’ve launched too late.”
It is much better to take the first bumpy steps and be able to work with feedback than to plan far ahead and get bogged down by desires for perfection.
- leave established routines / processes in place - if it works it’s fine and you don’t want to disrupt processes unnecessarily
- Process descriptions should be as brief as possible
- quickly set up a first prototype. Example: they hired an experienced podcaster who showed them all the necessary steps in a workshop and had them do them, so that after 3 hours they had their first podcast from interviewing each other and an overview and first impression of how it works.
- Be aware and mind the existing company culture - Example: Die Zeit organized a hackathon in which 4 employees and 80 foreigners took part. The aim was to bring the freshness and joy of the creative start-up feeling into the company. The employees were mostly puzzled and bewildered by this and it had no effect.
- Avoid technical jargon - use terms the employees can easily understand
- Share expert knowledge - regularly and with humor and fun
Example: Die Zeit held a workshop with many short lectures (with topics from introducing a Trello board to playing nose flute). It generated fascination with how much diverse and wild expert knowledge there was and humor / lightness because of the topics. This led to a regular event (every Thursday an employee makes a short presentation of their choice via zoom) with a positive influence on the company culture: it has become much more natural for most employees to hold a short meeting with interested parties and to share their knowledge
- start with the employees who are interested in digitization. Sooner or later they will pull the others along. Start with the multipliers.
Tobias Krüger, culture change at Otto: “You start with the 5% who want it.”

German version:
### Digitalisierung in Firmen, Anleitung, Faktoren
Vortrag von Lennart Schneider, Berater bei der Zeit
Checklist für Faktoren, die bei der Digitalisierung einer Firma unterstützden bzw zu beachten sind
- Spaß/ Freude am Tool, gute UX
- "does this (process, tool) spark joy?" angelehnt an Tidying mit Marie Kondo
- Team / Mitarbeiter sollten Tech (Soft- oder Hardware) selber wählen dürfen
- an der Technik zu sparen ist sehr oft sparen am falschen Ende. Ein Mitarbeiter, der mit einem anderen Rechner besser zurecht kommt, hat mehr Freude an der Arbeit, weniger Ablenkung / Ärger und das wird sich auf Dauer rechnen.
- start small (but start)
LinkedIn Gründer Reid Hoffman: „If you’re not embarrassed by the first version of your product, you’ve launched too late.“
Es ist viel besser die ersten holperigen Schritte zu gehen und mit Feedback arbeiten zu können, als lange vorauszuplanen und sich durch Perfektionswünsche aufzuhalten.
- etablierte Routinen / Prozesse bestehen lassen / beibehalten
- möglichst knappe Prozessbeschreibungen 
- schnell einen ersten Prototyp auf die Beine stellen. Beispiel: sie haben sich einen erfahrenen Podcaster geleistet, der ihnen in einem Workshop alle notwendigen Schritte gezeigt hat und hat machen lassen, so dass sie nach 3 Stunden ihre erste Sendung mit gegenseitigen Interviews zusammen hatten und einen Überblick und ersten Eindruck wie es geht.
- Firmenkultur beherzigen - Beispiel: Hackathon veranstaltet, an dem 4 Mitarbeiter und 80 Auswärtige teilgenommen haben. Ziel war die Frische und Freude am kreativen Start-Up Feeling in die Firma zu holen. Stieß auf Unverständnis und konnte die Leute nicht abholen.
- Fachjargon meiden - die Mitarbeiter auch sprachlich abholen wo sie stehen
- Expertenwissen teilen - regelmäßig und mit Humor und Spaß
Beispiel: bei der Zeit eingeführt mit einem Workshop-Tag mit vielen Kurzvorträgen (mit Themen von Trello-Board bis Nasenflöte). Erzeugte Faszination wie viel Expertenwissen da war und Humor / Leichtigkeit wegen der Themen. Führte zu regelmäßigem Event (jeden Donnerstag macht ein Mitarbeiter eine kurze Präsentation seiner Wahl via Zoom) mit positiven Einfluss auf die Firmenkultur - es ist viel selbstverständlicher geworden, das jemand ein kurzes Meeting mit Interessierten macht und sein Wissen teilt
- anfangen mit den Mitarbeitern, die Lust auf Digitalisierung haben. Früher oder später werden sie die anderen mitziehen. #Multiplikatoren 
Tobias Krüger, Kulturwandel bei Otto: "Du fängst mit den 5% an, die Bock darauf haben."
–––


### Disable Google Analytics
- https://developers.google.com/analytics/devguides/collection/ga4/disable-analytics
Ugur's suggestion: put this on each page:
```js
function disableSendingAnalytics() {
  var host = window.location.hostname;
  if(host == 'localhost'){
    window['ga-disable-Analytics-ID'] = true;
  }
}
```
___


### Excel, Spreadsheets, google sheets
- Course by Barton Poulson: https://www.freecodecamp.org/news/learn-google-sheets/
___


### Format USB Drive
- nowadays (2021): format to ExFat
- (if it's already formatted with FAT32 you should be fine as well)

1. Attach the drive to your Mac.
2. Launch Disk Utility (from Applications > Utilities > Disk Utility).
3. Select the drive in the left-hand sidebar.
4. Click Erase.
5. From the Format menu, select ExFAT.
6. From the Scheme menu, select Master Boot Record.
7. Click Erase and follow prompts to confirm.

source: https://www.macworld.com/article/234613/how-to-format-a-thumb-drive-for-both-mac-and-windows.html
___


### Gimp
- beginners tutorial 2020-10-23: https://www.youtube.com/watch?v=x6pXJ7Ijir0
- if erase, brush or pencil don't work anymore, you might have selected something (and outside selection nothing will work)
  - select rectangular selection and just click somewhere once - this should unselect any areas
___


### Microsoft AutoUpdate

- what it is and how to delete it: https://www.guidingtech.com/what-is-microsoft-autoupdate-mac-how-to-delete/
___


### Time Formats
#### UTC vs ISO format for time
tl;dr
- Always use ISO 8601 format: `2019-11-14T00:55:31.820Z`
- Avoid the legacy format of RFC 1123 & 822: `Thu, 14 Nov 2019 00:55:16 GMT`

##### UTC & GMT are time-keeping, not formats
UTC and GMT are not formats.

UTC and GMT are two slightly different ways of tracking time. This is a complicated topic, so see the Wikipedia pages for the gory details if you really want to know.

For common business apps, there is no significant difference, literally less than a second’s difference. Most programmers can use the terms interchangeably. If you work for NASA, or the GPS/Galileo navigation projects, then you’ll want to learn more.

##### ISO 8601
The format seen in your first example 2019-11-14T00:55:31.820Z is defined by the ISO 8601 standard.
- The T in the middle separates the year-month-day portion from the hour-minute-second portion.
- The Z on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced "Zulu" per military/aviation tradition.
The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.

**Always choose ISO 8601** when serializing date-time values as text.

##### RFC 1123 / RFC 822
Your second example string Thu, 14 Nov 2019 00:55:16 GMT is defined in the older standards RFC 1123 & RFC 822.

These are legacy formats. They are terrible, difficult to parse by machine. And they are bad for humans as they assume English language and particular cultural norms.

Avoid this format whenever possible. Use this only when required for old protocols and systems not yet updated for ISO 8601.
source: https://stackoverflow.com/questions/58847869/utc-vs-iso-format-for-time#58848028
___


### SSH - Secure SHell
A protocoll that allows 2 machines to communicate securely over a network.

- 1960: precursor Telnet - was not secure.
- since 1995: SSH - encrypted
- allows you to do almost anything on the remote computer
- used mostly in terminal / command line
___


### SVG
- `viewport` - correlates with `height` and `width` but doesn't shrink or extend the displayed image (like we are used to from <img/>); does not control the size of the svg canvas, but how much we can see of it
- `viewbox` - 4 parameters: minX, minY, width, height
  - Example: `<svg viewBox= 0 0 50 70` - display the part of the svg starting from top left corner 50px to the right and 70px down of the svg canvas
  - if we make width and height in the viewbox larger than in the viewport we zoom out, if we make them smaller, we zoom in...
  ToDo: https://www.youtube.com/watch?v=TBYJ2V1jAlA
- `fill:..`
  - basically like `background-color`
  - Placed in CSS it will override a presentation attribute <path fill="#fff" ... />
  - ... but it will not override an inline style e.g. <path style="fill: #fff;" ... />

- `fill-rule: ...`
  In most cases what is considered to be the “inside” of a graphic is straightforward. However, when the graphic involves more complex compound paths such as those that intersect or enclosed shapes, what defines the inside of the shape becomes less clear.
  The fill-rule property indicates the algorithm to be used in determining what parts of the canvas are included inside more complex shapes.
  - `nonzero` - takes into account the direction of each line drawn in determining what is 'inside'
  - `evenodd` - counts each crossing of a line (no matter in which direction as +1). 'Even' then means outside, 'odd' inside.
  - `inherit`
  - excellently explained: https://www.sitepoint.com/understanding-svg-fill-rule-property/
- `stroke: ...`
  The stroke attribute is a presentation attribute defining the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape;
  *Note*: As a presentation attribute stroke can be used as a CSS property.
  You can use this attribute with the following SVG elements: <altGlyph>, <circle>, <ellipse>, <line>, <path>, <polygon>, <polyline>, <rect>, <text>, <textPath>, <tref>, <tspan>
  Usage notes:
  - Value	<paint>
  - Default value:	none
  - Animatable:	Yes

good sources:
https://rafaltomal.com/svg-guide/
https://css-tricks.com/using-svg/
https://css-tricks.com/svg-properties-and-css/
https://css-tricks.com/svg-line-animation-works/
https://css-tricks.com/svg-use-with-external-reference-take-2/
https://frontstuff.io/multi-colored-svg-symbol-icons-with-css-variables
___


### Woocommerce
- hidden products: https://pluginrepublic.com/woocommerce-hidden-products/
___


### Yaml
how to write a cascade:
```s
guest_author: 
  name: Joana Vesuvio
  firstname: Joana
  lastname: Vesuvio
  job_title: Assistenz (formerly)
  image: /assets/images/joana-vesuvio.jpg
```
can be accessed by `guest_author.name`
___

