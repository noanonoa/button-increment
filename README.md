# Button Increment
HTML button that displays and starts at `0` by default.  Clicking on the button increments the count up by one and updates the display.

```JavaScript
const increment = () => {
  const button = document.getElementById('btn');
  const currentCount = Number(button.innerText);
  const newCount = currentCount + 1;
  button.innerText = newCount;
};
```