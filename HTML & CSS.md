
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