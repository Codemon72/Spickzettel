
### Browser Short Cuts (Mac)
- ALT + CMD + I - open / close dev tools
- ALT + CMD + C - open / close dev tools to inspect
- ALT + CMD + left/right - change Tabs
- CMD + T - open new tab
- CMD + W - close tab
- CMD + left/ right arrows - previous/ next page
- SHIFT + CMD + N - open window in incognito mode


### Cyberduck
- download with homebrew
- connect to server:
  - /file/open connection
    - enter Server (z.Bsp.: ftp.12345.hostingkunde.de), Username (z.B.: 123456-xy), Password
___


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
  - if we make width and height in the viewbox larger than in the viewport we zoom out, if we make them smaller, we zoom in
___


### Woocommerce
- hidden products: https://pluginrepublic.com/woocommerce-hidden-products/
___