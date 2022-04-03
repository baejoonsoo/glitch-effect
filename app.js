const h1 = document.querySelector("h1");

const glitch = (element) => {
  setInterval(() => {
    const beforeTop = Math.random() * 100;
    const afterTop = Math.random() * 100;
    const beforeBottom = Math.random() * 100;
    const afterBottom = Math.random() * 100;

    element.style.setProperty("--beforeTop", `${beforeTop}%`);
    element.style.setProperty("--afterTop", `${afterTop}%`);
    element.style.setProperty("--beforeBottom", `${beforeBottom}%`);
    element.style.setProperty("--afterBottom", `${afterBottom}%`);
  }, 100);
};

glitch(h1);
