const text = `Hey.

I just wanted to say this properly.

You don’t have to be perfect.
You don’t have to look perfect.
You don’t have to feel okay all the time.

I just hope you know — you matter more than you think.

And somehow, in all the noise, you're one of the few things that feel calm.

That's all 🤍`;

let index = 0;
const speed = 45;
const container = document.querySelector(".textCont");

function typeWriter() {
  if (index < text.length) {
    container.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// floating hearts generator
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "🤍";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 12 + 16 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);
