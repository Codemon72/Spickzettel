### installation
https://mac.install.guide/ruby/13.html

also possible to install it with `rbenv` (which I have)
`rbenv` is a version manager tool for the Ruby programming language on Unix-like systems. It is useful for switching between multiple Ruby versions on the same machine and for ensuring that each project you are working on always runs on the correct Ruby version.
`to activate this Ruby version as the new default, run: rbenv global 3.2.1` 

### where is it installed
`which ruby`

### check for version
`ruby -v`


### snippets

- `unless` 
  - `if`in reverse
  - Examples:
  ```s
  i += 1 unless i > 10

  unless person.present?
    puts "There's no such person" 
  end
  ```
  - Some rules of thumb when using unless:
    1. Avoid using more than a single logical condition. unless foo? is fine. unless foo? && bar? is harder to parse.
    2. Avoid negation. “Unless” is already negative. Piling more on only makes it worse.
    3. Never, ever, ever use an else clause with an unless statement.
  - source and great article: https://signalvnoise.com/posts/2699-making-sense-with-rubys-unless

