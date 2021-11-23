
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

