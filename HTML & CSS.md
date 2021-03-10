### Layout Debugger
```css
* { outline: 2px dotted red }
* * { outline: 2px dotted green }
* * * { outline: 2px dotted orange }
* * * * { outline: 2px dotted blue }
* * * * * { outline: 1px solid red }
* * * * * * { outline: 1px solid green }
* * * * * * * { outline: 1px solid orange }
* * * * * * * * { outline: 1px solid blue }
```
or
```css
* { background-color: rgba(255,0,0,.2); }
* * { background-color: rgba(0,255,0,.2); }
* * * { background-color: rgba(0,0,255,.2); }
* * * * { background-color: rgba(255,0,255,.2); }
* * * * * { background-color: rgba(0,255,255,.2); }
* * * * * * { background-color: rgba(255,255,0,.2); }
* * * * * * * { background-color: rgba(255,0,0,.2); }
* * * * * * * * { background-color: rgba(0,255,0,.2); }
* * * * * * * * * { background-color: rgba(0,0,255,.2); }
```

### Media Queries 
Used for THE Software Company (bulma breakpoints): 

```css
@media only screen and (min-width: 769px) {
}
@media only screen and (min-width: 1088px) {
}
@media only screen and (min-width: 1280px) {
}
@media only screen and (min-width: 1408px) {
}
```

Used for HCS:
```css
@media only screen and (min-width: 480px) {
}
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 992px) {
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1440px) {
}
```

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
- fancy button hover effects
  - https://youtu.be/cH0TC9gWiAg?t=46

#### Blur Effect
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


#### Form Validation
Best practices article: https://html.form.guide/best-practices/form-validations-definitive-guide/

- where to show the error message: next to the input field
- time to trigger the error: on focus change (onblur event)

important terms: 
- **Server side validation** is performed by a web server, after input has been sent to the server.
- **Client side validation** is performed by a web browser, before input is sent to a web server.

### Box Shadows
The box-shadow property applies one or more shadows to an element.

box-shadow default:
- shadow of equal size of its element 
- under the element. 
- color in general matches the color property (except Safari: there the default shadow color is transparent).

It takes 2 - 6 values.
(1. but can be left out **inset** is set as first value, moves shadow inside of the box, displays above background color but the content)
**1. offset-x** - how far to push the shadow horizontally from the element - can also take negative values 
**2. offset-y** - how far to push the shadow vertically from the element, can also take negative values 
**3. blur-radius** (a radius from the most outer point of black it blurs in all directions) 
**4. spread-radius** - how far to spread the shadow out **in all directions** _before_ starting the blur - can also take negative values
**5. color** #00bfb3


As a rule of thumb: on **hover** make the blur and offset-y 3 times as big as before. Natural shadows blur more the farther they are away from the surface and also the angle gets more pronounced.

Here's an example of the CSS to create multiple shadows with some blur, at mostly-transparent black colors:

```css
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```

blue moon crescent:
```css
background-color: transparent;
border-radius: 50%;
box-shadow: 25px 10px 0 0 blue; 
```

very nice, realistic shadow 
```css
box-shadow: 
    -8px 8px 15px rgba(255, 255, 255, .05),
    inset -8px 8px 15px rgba(255, 255, 255, .05),
    20px 20px 20px rgba(0, 0, 0, .2),
    inset 20px 20px 20px rgba(0, 0, 0, .2);
```

### Reflection
check this out: https://youtu.be/vmpAK2h0UeQ?t=952
```css
body {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center,
}
.container {
  background-color: white;
  -webkit-box-reflect: below 5px linear-gradient(transparent, transparent, #0004);
}
```