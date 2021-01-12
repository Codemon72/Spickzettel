# Hugo CMS


#### Hugo operators
`eq` = equals
`ne`= not equal
`gt` = greater than
`lt` = less than
`ge`= greater or equal than
`le`= less or equal than

Unlike most other logic languages, here we put the comparison operator before the two arguments:
```
{{ if ne .Section "blog" }}current{{ end }}
```

#### Hugo Conditionals

#### if, if else, else
````
{{ if condition }}
{{ else if condition }}
{{ else }}
{{ end }}
````

#### not
You can negate a conditional by using the not keyword. `not` should come before the conditional statement, the use of parenthesis here is important.

```
{{ if not (op arg1 arg2 ) }}
{{end}}
```

#### and / or
````
{{ if and (conditional1) (conditional2) }}
{{ if or (conditional1) (conditional2) }}
````

#### nesting and / or statements
````
{{ if or ( and (conditional1) (conditional2) ) (conditional2) }}
````


Mike Dane in answering someone:
You wanna use an if statement to check whether or not a title has been passed into the partial. You could do something like this:

``````
<h1>{{ if .myTitle }}{{ .myTitle }}
{{ else }} 
default value 
{{ end }}
</h1>
``````

This checks to see if the .myTitle variable has a value and if it does then it uses that value, otherwise it uses the default value

https://www.mikedane.com/static-site-generators/hugo/conditionals/


#### The $ (Dollar sign) in Hugo

`$` has special significance in your templates. `$` is set to the starting value of . (“the dot”) by default.

source: https://gohugo.io/templates/introduction/#2-use--to-access-the-global-context