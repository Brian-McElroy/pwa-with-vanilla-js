const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "images/coffee1.jpg"
  },
  {
    name: "Voluptatem",
    image: "images/coffee2.jpg"
  },
  {
    name: "Explicabo",
    image: "images/coffee3.jpg"
  },
  {
    name: "Rchitecto",
    image: "images/coffee4.jpg"
  },
  {
    name: " Beatae",
    image: "images/coffee5.jpg"
  },
  {
    name: " Vitae",
    image: "images/coffee6.jpg"
  },
  {
    name: "Inventore",
    image: "images/coffee7.jpg"
  },
  {
    name: "Veritatis",
    image: "images/coffee8.jpg"
  },
  {
    name: "Accusantium",
    image: "images/coffee9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}


if ('serviceWorker' in navigator && 'PushManager' in window) {
  window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();

      const deferredPrompt = e;

      const installButton = document.createElement('button');
      installButton.textContent = 'Install App';
      installButton.style.position = 'fixed';
      installButton.style.top = '10px';
      installButton.style.left = '50%';
      installButton.style.transform = 'translateX(-50%)';
      installButton.style.zIndex = '9999';
      installButton.style.padding = '10px 20px';
      installButton.classList.add('btn-grad');
      installButton.style.color = 'white';
      installButton.style.border = 'none';
      installButton.style.borderRadius = '5px';
      installButton.style.cursor = 'pointer';

      installButton.addEventListener('click', () => {

          deferredPrompt.prompt();

          deferredPrompt.userChoice.then(choiceResult => {
              if (choiceResult.outcome === 'accepted') {
                  console.log('App installed');
              } else {
                  console.log('App installation declined');
              }

              installButton.style.display = 'none';
          });
      });

      document.body.appendChild(installButton);
  });
}