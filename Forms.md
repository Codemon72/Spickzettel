Forms deserve an extra entry, because they can become quite complex

excellent source for building good forms: https://developers.google.com/web/fundamentals/design-and-ux/input/forms

### Client Side Form Validation


###  Set Custom Validation Message / Change Browser Notification for `required` Input Fields

```s
<div class="Form__Item">
  <input id="email" type="email" class="Form__Input" name="contact[email]"  placeholder="Your Email"
    oninvalid="setCustomValidity('Bitte trage eine valide Email ein.')"
    onchange="try{setCustomValidity('')}catch(e){console.log(e.message)}"
    onkeypress="try{setCustomValidity('')}catch(e){}"
    required
    >
  <label for="email">Email</label>
</div>
```
https://developers.google.com/web/fundamentals/design-and-ux/input/forms#set_custom_validation_messages