const h1 = document.querySelector("h1");

const glitch = (element) => {
  let count = 0;

  setInterval(() => {
    // element
    // -10 ~ 10
    const skew = Math.random() * 20 - 10;

    // element::before
    const beforeTop = Math.random() * 100;
    const beforeBottom = Math.random() * 100;

    // element::after
    const afterTop = Math.random() * 100;
    const afterBottom = Math.random() * 100;

    element.style.setProperty("--skew", `${skew}deg`);
    element.style.setProperty("--beforeTop", `${beforeTop}%`);
    element.style.setProperty("--afterTop", `${afterTop}%`);
    element.style.setProperty("--beforeBottom", `${beforeBottom}%`);
    element.style.setProperty("--afterBottom", `${afterBottom}%`);
    element.style.setProperty("--scale", "1");

    count++;

    if (count % 23 === 0) {
      const bigSkew = Math.random() * 180 - 90;
      element.style.setProperty("--skew", `${bigSkew}deg`);
    }

    if (count % 43 === 0) {
      const bigScale = 1 + Math.random() / 2;
      element.style.setProperty("--scale", `${bigScale}`);
    }
  }, 100);
};

glitch(h1);
