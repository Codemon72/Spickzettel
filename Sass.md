sources: 
- Programmieren mit Mario: https://www.youtube.com/watch?v=Om3XeeSTN0U

### Basic Notes
- build with Ruby
- needs Compiler (in Visual Studio Code: 'Live Sass Compiler')
- 2 kinds of syntax: 
  - Sass syntax: no curly braces, semicolons,
  - Scss syntax: looks more like CSS 
- enables 
  - variables, 
  - nesting (don't go deeper than 3 levels), 
  - inheritance, 
  - mixins (re-usable functions), 



### basic workflow
1. create `index.html` and `style.scss`
2. in VSCode click on 'Watch Sass'
   - this creates 2 new files: `style.css` and `style.css.map`
    - we **never write into style.css**, because it will get overwritten by the Sass compiler
    - `style.css.map` is for the developers: if you inspect an element in the browser it will show you the origin in your `style.scss` because `style.css.map` maps to it. Delete the file and it will only show the styles in `style.css`. (Code on and the compiler will create a new `style.css.map`.)
3. integrate `style.css` into `index.html`.