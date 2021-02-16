
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