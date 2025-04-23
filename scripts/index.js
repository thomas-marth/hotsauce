const cookiesBanner = document.querySelector(".cookies_banner");
const cookiesAccept = document.querySelector(".accept");
const cookiesReject = document.querySelector(".reject");

function hideCookiesSettings() {
  cookiesBanner.style.display = "none";
}

cookiesAccept.addEventListener("click", hideCookiesSettings);
cookiesReject.addEventListener("click", hideCookiesSettings);

// Параллакс-эффект + движение курсора для хедера

let scrollBackgroundPositionY = 0;

let mouseBackgroundPositionX = 0;
let mouseBackgroundPositionY = 0;

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  scrollBackgroundPositionY = scrollPosition * 0.5;

  updateBackgroundPosition();
});

document.addEventListener("mousemove", function (e) {
  mouseBackgroundPositionX = (e.clientX / window.innerWidth - 0.5) * -60;
  mouseBackgroundPositionY = (e.clientY / window.innerHeight - 0.5) * -50;

  // requestAnimationFrame для плавного обновления
  window.requestAnimationFrame(updateBackgroundPosition);
});

// Обновляю позицию фона на основе текущих значений сдвигов и прокрутки:

function updateBackgroundPosition() {
  const header = document.querySelector(".hero");

  header.style.backgroundPosition = `calc(50% + ${mouseBackgroundPositionX}px) calc(50% + ${
    mouseBackgroundPositionY + scrollBackgroundPositionY
  }px)`;
}

//

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  // Открываем первую вкладку по умолчанию
  if (item.classList.contains("active")) {
    content.style.maxHeight = content.scrollHeight + "px";
  }

  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Закрыть все
    accordionItems.forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".accordion-content").style.maxHeight = null;
    });

    // Открыть текущую, если она была закрыта
    if (!isActive) {
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
