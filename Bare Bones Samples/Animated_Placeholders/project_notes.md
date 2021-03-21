### How the Magic Happens:

- input fields + labels (or spans) inside div container
- position them (container: realtive) (children: absolute), width + height, padding so they all occupy the same space
- z-index and background: transparent so the label is behind the input field
- let the label transform upwards when input receives focus. 
  label: transform-origin: 0, 0;
  input:focus + label: transform: translateY();
- use `.form__input:not(:placeholder-shown)+.form__label` and set it to the same transform as input on focus - this way the label stays up when the input has received text but looses focus
