# Hugo CMS

__Mike Dane__ has quite good **[Hugo docs](https://www.mikedane.com/static-site-generators/hugo/installing-using-themes/)**

Hugo Tutorial 2019/05: https://www.youtube.com/watch?v=u53xfby0EYI&list=PLbWvcwWtuDm1OpcbohZTOwwzmc8SMmlBD

https://gohugo.io/commands/

**[Install Hugo](https://gohugo.io/getting-started/installing)** before you can work with it.

**update Hugo**: `brew upgrade hugo`

#### regular workflow

1. create or go to the folder where you want to have your project. Terminal: **hugo new site <fancy-name>**

2. **git init**

3. download a theme form https://themes.gohugo.io/ with 
**git submodule add *hugo-theme-link***
this will automatically create a file ".gitmodules" with something like this: 
`````
[submodule "themes/hugo-fresh"]
	path = themes/hugo-fresh
	url = git@github.com:StefMa/hugo-fresh.git
`````
4. follow the instructions in the theme documentation

this might come in handy again:
````
cp -a themes/portio/exampleSite/* .
````

#### new file
```hugo new example.md```
```hugo new directory/example.md```


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
<h1>
{{ if .myTitle }}{{ .myTitle }}
{{ else }}default value 
{{ end }}
</h1>
``````

This checks to see if the .myTitle variable has a value and if it does then it uses that value, otherwise it uses the default value

https://www.mikedane.com/static-site-generators/hugo/conditionals/
___


### Hugo functions
`range` - iterates over a map, array or slice
```
{{ range .Params.nextDates }}
    <span class="course-card-item-value">{{ dateFormat "2.1.2006" .start_date }}</span>
{{ end }}
```

- `range` with index:
``` 
{{range $index, $element := .columns}}
    index:{{ $index }} 
    name:{{ $element.name }} 
{{ end }}
```
you can name or abbreviate the variables however you like, the order is defining 'index' and 'element'.
___


### The $ (Dollar sign) in Hugo

`$` has special significance in your templates. `$` is set to the starting value of . (“the dot”) by default.

source: https://gohugo.io/templates/introduction/#2-use--to-access-the-global-context

### Setting Up Multilingual in Hugo

- in config file:
	```toml
	DefaultContentLanguage = "de"

	# for the i18n folder to work:
	enableMissingTranslationPlaceholders = true

	[languages]
    [languages.en]
        languagecode = "en"

        [languages.en.params]
            author = "Clemens Bruesch"
            description = "Clemens Bruesch's personal website"

        [languages.en.menu] # It is possible to change the menu too.

            [[languages.en.menu.main]]
                name = "About"
                url = "about"

            [[languages.en.menu.main]]
                name = "Blog"
                url = "posts"

    [languages.de]
        languagecode = "de"

        [languages.de.params]
            author = "Clemens Brüsch"
            description = "Clemens Brüsch's personal website"

        [languages.de.menu] # It is possible to change the menu too.

            [[languages.de.menu.main]]
                name = "About"
                url = "about"

            [[languages.de.menu.main]]
                name = "Blog"
                url = "posts"
	```
- i18n folder in root with one file each for respective languages (e.g. de.toml, en.toml)
	en.toml:
	```toml
	[test]
	other = "english"
	```
	html file:
	```html
	{{ i18n "test" }}
	```

## Hugo Theme Research

### Good Theme for a Marketing Landingpage

Meghna - https://themes.gohugo.io/meghna-hugo/
- from themefischer
- simplicity 4/5
- note: multilingual

Universal - https://themes.gohugo.io/hugo-universal-theme/
- simplicity 3/5
- notes: keine reine Landingpage, Menü müsste rausgenommen oder umdirigiert werden auf Elemente auf index.html, Probleme es lokal zu hosten ("Module "hugo-universal-theme" not found").

Vex - https://themes.gohugo.io/vex-hugo/
- from themefischer
- simplicity 3/5
- notes: keine reine Landingpage, Menü müsste umgebaut werden, multilingual

Airspace - https://themes.gohugo.io/airspace-hugo/
- from themefischer
- simplicity 3/5
- notes: keine reine Landingpage, Menü müsste umgebaut werden, multilingual

Bigspring - https://themes.gohugo.io/bigspring-hugo-startup-theme/
- from themefischer
- simplicity 3/5
- notes: keine reine Landingpage, Menü müsste umgebaut werden, multilingual

Grayscale - https://themes.gohugo.io/hugograyscale/
- simplicity 3/5
- notes: single landingpage; schlichtes Design, dass allerdings noch nachgebessert werden müsste; Struktur: geht so; jQuery
