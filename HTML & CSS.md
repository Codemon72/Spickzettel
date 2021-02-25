
#### Buttons
- avoid outlines on click
  ```css
  ::-moz-focus-inner {
  border: 0;
  }
  button:focus {
    outline: none;
  }
  ```

  - apply a blur effect to something *behind* an element 
  ```css
    opacity: .9;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  ``` 
  source: https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter

#### _blank and noopener
if a link is to open in a new tab it receives `target="_blank"`. 
This apparently makes the page vulnerable to attacks.
Add `rel="noopener"` or `rel="noreferrer"` as attributes to the link and you are golden.
Source: https://web.dev/external-anchors-use-rel-noopener/


#### On Form Validation
Best practices article: https://html.form.guide/best-practices/form-validations-definitive-guide/


- where to show the error message: next to the input field
- time to trigger the error: on focus change (onblur event)

important terms: 
- **Server side validation** is performed by a web server, after input has been sent to the server.
- **Client side validation** is performed by a web browser, before input is sent to a web server.