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
bootstrap breakpoints

```css
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```

tailwind breakpoints

```css
'sm': '640px',
@media (min-width: 640px) { ... }
'md': '768px',
@media (min-width: 768px) { ... }
'lg': '1024px',
@media (min-width: 1024px) { ... }
'xl': '1280px',
@media (min-width: 1280px) { ... }
'2xl': '1536px',
@media (min-width: 1536px) { ... }
```

bulma breakpoints (used for Small and Modern website): 

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

WordPress Rocket CSS
```css
xs
@media (max-width: 600px) {
}
sm
@media (max-width: 900px) { 
}
md
@media (max-width: 1200px) {
}
l
@media (max-width: 1800px) {
}
xl
@media screen and (min-width: 1800px) {
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
### Specificity
source: https://css-tricks.com/specifics-on-css-specificity/

- If the element has **inline styling**, that automatically1 wins (1,0,0,0 points)
- For each **ID** value, apply 0,1,0,0 points
- For each **class** value (or pseudo-class or attribute selector), apply 0,0,1,0 points
- For each **element** reference, apply 0,0,0,1 point

You can generally read the values as if they were just a number, like 1,0,0,0 is “1000”, and so clearly wins over a specificity of 0,1,0,0 or “100”. The commas are there to remind us that this isn’t really a “base 10” system, in that 0,0,1,0 would still rank higher than 0,0,0,13.

**Important Notes**:
- The **universal selector (*)** has no specificity value (0,0,0,0)
- **pseudo-elements** (e.g. :first-line) get 0,0,0,1 unlike their **psuedo-class** brethren which get 0,0,1,0
- The **pseudo-class :not()** adds no specificity by itself, only what’s inside it’s parentheses.
- The **!important** value appended a CSS property value is an **automatic win**. It overrides even inline styles from the markup. The only way an !important value can be overridden is with another !important rule declared later in the CSS and with equal or great specificity value otherwise. You could think of it as adding 1,0,0,0,0 to the specificity value.

### Special Characters and Entities
An HTML entity is a string that begins with an `&` and ends with a `;`. Entities are frequently used to display reserved characters (which would otherwise be interpreted as HTML code), and invisible characters (like non-breaking spaces). You can also use them in place of other characters that are difficult to type with a standard keyboard. 

`&nbsp;` "non blank space"

###### how to break words
`&shy;`
creates a "**s**oft **hy**phen" that only appears when the word breaks.
Works in HTML

`\u00AD`
also creates a soft hyphen and also works in markdown

`<wbr>`
does **not** create a hyphen.
The <wbr> (Word Break Opportunity) tag specifies where in a text it would be ok to add a line-break.

**Tip**: When a word is too long, the browser might break it at the wrong place. You can use the <wbr> element to add word break opportunities.

### how to break lines in preferred places
-  setting divs to inline-block on media query
```html
<div class="foo">some text</div>
<div class="foo">some more text</div>
```
```css
@media only screen and (min-width: 1440px) {
  .foo {
    display: inline-block;
  }
}
```
- text in spans with display: inline-block

By using
```css
span.avoidwrap { display:inline-block; }
```
and wrapping the text I want to be kept together in
```html
<span class="avoidwrap"> Text </span>
```
it will wrap first in preferred blocks and then in smaller fragments as needed.

-  `<br>` depending on media query
```html
<span>Honey Nut Cheerios, <br class="rwd-break">Wheat Chex, etc.</span>
And one line of CSS in you media query:
```
```css
@media screen and (min-width: 768px) {
    .rwd-break { display: none; }
}
```

### prevent line from breaking
```html
<nobr></nobr>
```
```css
whitespace: pre;
```

### scroll above anchor
sometimes you might want to scroll a bit above your anchor.
Since 2020 we got this beauty:
```css
#anchor {
  scroll-margin-top: 100px;
}
```

### CSS Fundamentals (and Quirks)
- Margins will collapse any time they touch.
That also means that the first child's margin-top will merge with the parent' margin-top. (And the last child's margin-bottom with the parent's margin-bottom.) 
**Tip**: Use margins only between siblings or line the parent with a padding, so that margins don't touch.
**Note**: In flexbox and grid touching margins no longer collapse.
- Block elements always have 
  ```css
  block-element {
    height: 0;
    width: 100%;
  }
  ```
- Inline elements
  - you can only nest other inline elements in them
  - can't set width and height on them
  - the only respect margin, padding and border placed on their sides, not on top and bottom.
  **Note**: padding on top or bottom will work *in a way*: it will overlap the surrounding inline-elements.


### CSS Boilerplate
```css
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
```

##### ... some good practices
- always style link states! It should be super obvious to the user that interaction is possible.
```css
a {
  color: --all-link-states;
} 
a:visited {
  color: --visited-link;
}
a:focus,
a:hover {
  color: --highlighted-link;
}
a:active {
  color: --feedback-click;
}
```
Especially if giving separate styling for every pseudo class: do them in above order! Why? Because links can have multiple states (e.g. hover and something else and if `:active` is not the last, it will _never_ work). 

- use padding to create the 'size' of a button, and not width and height. A ratio of 1 (top & bottom) to 2.5 (right & left) is a good rule of 👍.