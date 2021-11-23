Liquid is a template language created by Shopify and written in Ruby.
It is now available as an [open source project](https://github.com/Shopify/liquid) on GitHub, and used by many different software projects and companies. Liquid is the backbone of all Shopify themes, and is used to load dynamic content in the pages of online stores.


## Liquid Basics
Documentation: https://shopify.dev/concepts/shopify-introduction
CheatSheet: https://www.shopify.com/partners/shopify-cheat-sheet
Shopify Community: https://community.shopify.com/c/Shopify-Community/ct-p/en
Liquid Sandbox: https://jumpseller.com/support/liquid-sandbox/

Chris the Freelancers:https://www.youtube.com/watch?v=zBtwd2OfZsI 
Chris the Freelancer guide: https://www.christhefreelancer.com/shopify-liquid-guide/

`{{ }}` - double curly brackets act as placeholders
`{% %}` - curly brackets with percentage signs contain logic

### Control Flow Tags
- `{% unless %}` 
  - can be translated as "if not"
  - Example:
  ```s
  {% unless product.title == 'Awesome Shoes' %}
    These shoes are not awesome.
  {% endunless %}
  ```