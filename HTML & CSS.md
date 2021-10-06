sources:
- https://www.w3.org/wiki/CSS/Properties
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index
- https://www.w3schools.com/css/default.asp

super cool tips:
- https://markodenic.com/css-tips/

## Tools
- PurgeCSS https://purgecss.com/ for filtering out unused CSS
  - recommended by Syntax Podcast 2021-08


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

___
### Media Queries 
- article from CSS-Tricks: https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

##### bootstrap breakpoints

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

##### tailwind breakpoints

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

##### bulma breakpoints (used for Small and Modern website): 

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

##### Used for HCS:
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

##### WordPress Rocket CSS
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

#### finding my own approach...
- from stackoverflow: "Rather than try to target @media rules at specific devices, it is arguably more practical to base them on your particular layout instead. That is, gradually narrow your desktop browser window and observe the natural breakpoints for your content. It's different for every site. As long as the design flows well at each browser width, it should work pretty reliably on any screen size (and there are lots and lots of them out there.)"

##### for orientation

```css
<-- Mobile devices -->
<-- no query  -->

<-- Mobile landscape and small devices -->
@media screen and (min-width: 480px) {
}

<-- iPads, Tablets -->
@media screen and (min-width: 768px) {
}

<-- small laptops, tablets landscape -->
@media screen and (min-width: 1024px) {
}

<-- Desktops and laptops -->
@media only screen  and (min-width : 1224px) {
}

<-- larger screens -->
@media only screen  and (min-width : 1824px) {
}
```

##### Screen sizes in Dev Tools
- 13" screen is about 1000 x 650px
___


### HTML5 Deep Dive
- http://diveintohtml5.info/table-of-contents.html
___


### CSS frameworks
- tailwindcss: https://tailwindcss.com/docs
- bootstrap: https://getbootstrap.com/
- materialize: https://materializecss.com/
- materialdesign: https://getmdl.io/
- bulma: https://bulma.io/
- foundation: https://get.foundation/
___


### Buttons
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

___ 
### Blur Effect
  - apply a blur effect to something *behind* an element 
  ```css
    opacity: .9;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  ``` 
  source: https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter

___


### Custom Checkbox
- https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
___


### BEM
CSS naming convention with a high adoption rate.

- Block__Element--Modifier
- modal__button--highlighted

Docs: http://getbem.com/naming/
__


#### _blank and noopener
if a link is to open in a new tab it receives `target="_blank"`. 
This apparently makes the page vulnerable to attacks.
Add `rel="noopener"` or `rel="noreferrer"` as attributes to the link and you are golden.
Source: https://web.dev/external-anchors-use-rel-noopener/
___


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
___


### Flex
- CSS Tricks Overview: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- deep dive into edge cases and quirkyness: https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties#33856609
___


### Form 

- `<input type="hidden">` 
  The <input type="hidden"> defines a hidden input field.
  A hidden field let web developers include data that cannot be seen or modified by users when a form is submitted.
  A hidden field often stores what database record that needs to be updated when the form is submitted.
  **Note**: While the value is not displayed to the user in the page's content, it is visible (and can be edited) using any browser's developer tools or "View Source" functionality. Do not use hidden inputs as a form of security!

- styling placeholder
```css
INPUT::-webkit-input-placeholder{
  color: #fff;
}
INPUT:-moz-placeholder {
  color: #fff;
}
input[placeholder] {
  color: #fff;
}
```

##### styling select arrow

```css
select {
  /* Remove default arrow: */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;  
  /* custom arrow: */
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 width='10' height='10' xmlns='http://www.w3.org/2000/svg'><pofill='none' stroke='currentColor' points='17 2 9.5 1fill-rule='evenodd' stroke-width='2' stroke-linecap='square'></polylinefsvg>") no-repeat;
  background-position: right 15px top 50%;
}
```

##### styling option (of select)
  - not yet without JavaScript

- background of input fields
Safari, Firefox:
```css
input {
  background-color: #fff;
}
```
for Chrome (autofill):
```css
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
```
___


### Form Validation
Best practices article: https://html.form.guide/best-practices/form-validations-definitive-guide/

- where to show the error message: next to the input field
- time to trigger the error: on focus change (onblur event)

important terms: 
- **Server side validation** is performed by a web server, after input has been sent to the server.
- **Client side validation** is performed by a web browser, before input is sent to a web server.
___


### Perspectives
- article from the master: https://css-tricks.com/how-css-perspective-works/
___


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
___


### Responsiveness

#### Comparing Tools for Responsive Design
- https://css-tricks.com/comparing-browsers-for-responsive-design/
___


### Root
What the heck is a `:root`? It is a pseudo-class which represents the root of the document tree, which most of the time means the `<html>` element. If you are in a Custom Element, using the shadow DOM, though: the `:root` will represent the root of the shadow DOM instead of the `<html>` element.
___


### Social Media Tags
- https://css-tricks.com/essential-meta-tags-social-media/#final-markup
___


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
___


### table
table styling: there is an example in Bare_Bones_Samples
also: 
- borders
  - you can only put borders on table, th and td
  - border-spacing: 0; get rid of tiny lines around borders
  - border-spacing: 4px 12px; distance between horizontal and vertical borders of cells
  - margins don't work on table elements
good source: https://www.w3docs.com/learn-css/css-tables.html
___

### text-align
- describes how **inline-level content** of a **block container** is aligned
  - ... and this is why it also works on images ☝️💡🤓
___


### Tooltip Magic
- insert button text
```html
<button class="btn--tooltip " data-tooltip="🚫">Hover me!</button>
```
```css
[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
  content: attr(data-tooltip);
}
```
___


### transition-delay
source: https://piccalil.li/quick-tip/define-delay-for-each-property-in-the-transition-shorthand/
If you have a few properties that change with a transition, you can define a transition-delay for each of them, using the transition shorthand and separating each property with a comma.
```css
p {
  ...
  transition: width .3s ease-in-out .1s, color .3s ease-in-out .3s;
}

```
___


### Variables
Variables in CSS make it very easy to change styling of the entire page very fast.
Inside the selectors you can set default values (see below).
```css
:root {
  --black: #fcfcfc;
}

p {
  color: var(--black, #fff);
}
```
___


### how to break words
`&shy;`
creates a "**s**oft **hy**phen" that only appears when the word breaks.
Works in HTML

`\u00AD`
also creates a soft hyphen and also works in markdown

`<wbr>`
does **not** create a hyphen.
The <wbr> (Word Break Opportunity) tag specifies where in a text it would be ok to add a line-break.

**Tip**: When a word is too long, the browser might break it at the wrong place. You can use the <wbr> element to add word break opportunities.

___
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
___

___
### prevent line from breaking
```html
<nobr></nobr>
```
```css
whitespace: pre;
```

___
### scroll above anchor
sometimes you might want to scroll a bit above your anchor.
Since 2020 we got this beauty:
```css
#anchor {
  scroll-margin-top: 100px;
}
```

___
### z-index, stacking order and stacking context

- stacking order = the order in which the elements appear / are placed on the page

- stacking context = a group of elements with **one common parent** that move forward or backward together in the stacking order
The main point about stacking contexts is that z-index can be used to rearrange the stacking order of elements **only inside their own stacking context**. 
Elements from different stacking contexts are therefore never interleaved in the final stacking order.
When a stacking context is created, it “flattens” all of its descendants. Those children can still be rearranged internally, but we've essentially locked those children in.

**When elements are positioned to overlap, the element coming later in the HTML markup will, by default, appear on the top of the other elements.**

- 'positioned' elements (and their childrend) are always displayed in front of 'non-positioned' elements. ('positioned' meaning other than `position: static`)
- to give a z-index, the element has to be other than `position: static`
- if you give a z-index to an element that has a parent with a z-index: there might be trouble (see: 'stacking context')
-  z-index still respects parent’s overflow. If you still can’t see something despite a z-index in the millions, check it’s not being cropped by an `overflow:hidden`.
- other things that create a new stacking context:
      - opacity other than 1
      - transform
      - filter
      - contain
      - `isolation: isolate;`
      - mix-blend-mode
      - css-regions
      - paged media
      - possibly others...*

* (As a general rule, it seems that if a CSS property requires rendering in an offscreen context, it must create a new stacking context.)

**The key** to avoid getting tripped up is being able to spot when new stacking contexts are formed. If you’re setting a z-index of a billion on an element and it’s not moving forward in the stacking order, **take a look up its ancestor tree and see if any of its parents form stacking context**. If they do, your z-index of a billion isn’t going to do you any good.

#### Stacking Order Within the Same Stacking Context

From back to front:

1. `root element` The stacking context’s root element
2. `positioned and z-index: -` Positioned elements (and their children) with negative z-index values (higher values are stacked in front of lower values; elements with the same value are stacked according to appearance in the HTML)
3. `non-positioned` Non-positioned elements (ordered by appearance in the HTML)
4. `positioned and z-index: 0 / auto` Positioned elements (and their children) with a z-index value of auto (ordered by appearance in the HTML)
5. `positioned and z-index: +` Positioned elements (and their children) with positive z-index values (higher values are stacked in front of lower values; elements with the same value are stacked according to appearance in the HTML)

**Note**: positioned elements with negative z-indexes are ordered first within a stacking context, which means they appear behind all other elements. Because of this, it becomes possible for an element to appear behind its own parent, which is normally not possible. This will only work if the element’s parent is in the same stacking context and is not the root element of that stacking context.

##### helpful tools:
- VSCode Extension: https://marketplace.visualstudio.com/items?itemName=felixfbecker.css-stacking-contexts
- Chrome Browser Extension: https://chrome.google.com/webstore/detail/z-context/jigamimbjojkdgnlldajknogfgncplbh

##### sources:
- https://www.joshwcomeau.com/css/stacking-contexts/
- https://philipwalton.com/articles/what-no-one-told-you-about-z-index/
- playground for testing: https://codepen.io/Codemon72/pen/KKagwRb
- Docs: https://www.w3.org/TR/CSS2/zindex.html
- Full list of stacking context scenarios: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context

___
### Cool and Fancy

##### CSS only dark mode
https://www.youtube.com/watch?v=_yCgeXFAXTM

##### Animated Gradients
https://www.youtube.com/watch?v=f3mwKLXpOLk

##### Clipping an image to your text
https://www.youtube.com/watch?v=9Kr3T4Ndl-o

##### shape-outside
https://www.youtube.com/watch?v=X1dz0xRbSJc

##### Masonry layout
https://www.youtube.com/watch?v=KrPz_wmBsAE
 

___

### CSS Fundamentals (and Quirks)
- Margins will collapse any time they touch.
That also means that the first child's margin-top will merge with the parent' margin-top. (And the last child's margin-bottom with the parent's margin-bottom.) 
**Tip**: Use margins only between siblings or line the parent with a padding, so that margins don't touch. Also: give the parent `display: flow-root`. This creates a new formatting context and margins only collapse with margins of the same formatting context.
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
- good article: https://zellwk.com/blog/style-hover-focus-active-states/
- Especially if giving separate styling for every pseudo class: do them in below order! Why? Because links can have multiple states (e.g. hover and something else and if `:active` is not the last, it will _never_ work). 

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

- use padding to create the 'size' of a button, and not width and height. A ratio of 1 (top & bottom) to 2.5 (right & left) is a good rule of 👍.