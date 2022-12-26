# Animated Labels / Placeholders

### How the Magic Happens:

- place input element and label (or span) as siblings inside div container
```html
<div class="form-group animated-placeholder">
    <input type="text" class="form__input" placeholder=" " />
    <label class="form__label">Name</label>
  </div>
```
- position the input element above each other (container: relative) (children: absolute)
  - (width, height, padding so they all occupy the same space)
```css
.animated-placeholder .form__label,
.animated-placeholder .form__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px;
  font-size: 18px;
}
```
- with z-index place the input above the label. Give the input background: transparent so the label can be seen.
- let placeholder be an empty string `placeholder= " "` and set `color: transparent;`
- when input receives focus (`.form__input:focus`): let the label transform upwards. 
```css
.form__label {
  opacity: 0.6;
  transform-origin: 0 0;
  transition: all 0.3s ease-in-out;
}
.form__input:focus + .form__label {
  transform: translateX(-12px) translateY(-37px) scale(0.9);
}
```
- use `.form__input:not(:placeholder-shown) + .form__label` (negation pseudo-class: selects all form__input elements that do not show the placeholder - meaning: the input field does not hold any text) and set it to the same transform as input on focus - this way the label stays up when the input has received text but looses focus
```css
.form__input:focus + .form__label,
.form__input:not(:placeholder-shown) + .form__label {
  transform: translateX(-12px) translateY(-37px) scale(0.9);
}
```