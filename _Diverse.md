
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


### Woocommerce
- hidden products: https://pluginrepublic.com/woocommerce-hidden-products/
___