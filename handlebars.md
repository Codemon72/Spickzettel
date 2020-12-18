


#### From LeCoupa:
https://gist.github.com/LeCoupa/6176077a9a8e2ad00eda

Handlebars is a semantic web template system, started by Yehuda Katz in 2010.
Handlebars.js is a superset of Mustache, and can render Mustache templates in addition to Handlebars templates.
More: http://handlebarsjs.com/


### 1. Expressions.

#### 1.1 Basic usage.


`{{mustache}} `                                  : Handlebars expression (variable in the current context)

`{{article.title}} `                             : Handlebars expressions can also be dot-separated paths

`{{{foo}}}  `                                    : If you don't want Handlebars to escape a value

`articles.[10].[#comments]   `                   : The template will treat it roughly eqivalent to this `javascript: articles[10]['#comments']`

`{{! This comment will not be in the output }}`  : Any comments that must contain }} or other handlebars tokens should use the {{!-- --}} syntax.

`<!-- This comment will be in the output -->`    : This comment will be in the output


#### 1.2 Helpers.


`{{{link story}}}`                               : `link` is the name of a Handlebars helper, and story is a parameter to the helper

`{{{link '...' story.url}}}`                     : You can also pass a simple String as a parameter to Handlebars helpers.

`{{{link "..." href=story.url class="story"}}}`  : Handlebars helpers can also receive an optional sequence of key-value pairs as their final parameter


#### 1.3. Subexpressions.


`{{outer-helper (inner-helper 'abc') 'def'}}`    : Handlebars offers support for subexpressions, which allows you to invoke multiple helpers


#### 2. Block Expressions.


`{{#noop}}{{body}}{{/noop}}`                     : Basic block, The noop helper will receive an options hash. This options hash contains a function (options.fn) that behaves like a normal compiled Handlebars template. 

```
{{#with story}}
  <div class="intro">{{{intro}}}</div>
  <div class="body">{{{body}}}</div>
{{/with}}
```

Note 1: When looping through items in each, you can optionally reference the current loop index via {{@index}}.
Note 2: Additionally for object iteration, {{@key}} references the current key name.
Note 3: The first and last steps of iteration are noted via the @first and @last variables then iterating over an array.
Note 4: When iterating over an object only the @first is available.

```
{{#each comments}}
  <h2><a href="/posts/{{../permalink}}#{{id}}">{{title}}</a></h2>
  <div>{{body}}</div>
{{/each}}
```

```
{{#if isActive}}
  <img src="star.gif" alt="Active">
{{else}}
  <img src="cry.gif" alt="Inactive">
{{/if}}

{{#unless license}}
  <h3 class="warning">WARNING: This entry does not have a license!</h3>
{{/unless}}
```

Note 1: The log helper allows for logging of context state while executing a template.
Note 2: Delegates to Handlebars.logger.log which may be overriden to perform custom logging.

```
{{log "Look at me!"}}
```

3. Built-In Utilities.


`Handlebars.Utils.escapeExpression(string) `: HTML escapes the passed string, making it safe for rendering as text within HTML content.

`Handlebars.Utils.isEmpty(value)           `: Determines if a given value is empty.

`Handlebars.Utils.extend(obj, value)       `: Simple utility method to augment obj with all keys defined on value.

`Handlebars.Utils.toString(obj)            `: Generic toString method.

`Handlebars.Utils.isArray(obj)             `: Determines if an obj is an array.

`Handlebars.Utils.isFunction(obj)          `: Determines if an obj is a function.