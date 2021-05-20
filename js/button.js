const increment = () => {
  const button = document.getElementById('btn');
  const currentCount = Number(button.innerText);
  const newCount = currentCount + 1;
  button.innerText = newCount;
};