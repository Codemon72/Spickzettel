

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

