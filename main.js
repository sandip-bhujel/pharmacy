/* =========================
   Day / Night Theme Toggle
========================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "ライトモードに切り替える");
  } else {
    themeToggle.textContent = "🌙";
    themeToggle.setAttribute("aria-label", "ダークモードに切り替える");
  }
});

/* =========================
   Mobile Navigation Menu
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", function () {
  navigation.classList.toggle("active");

  if (navigation.classList.contains("active")) {
    menuToggle.textContent = "✕";
    menuToggle.setAttribute("aria-label", "メニューを閉じる");
    menuToggle.setAttribute("aria-expanded", "true");
  } else {
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "メニューを開く");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

/* Close menu after selecting a link */

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "メニューを開く");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* Contact Form Validation */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contact-name");
    const email = document.getElementById("contact-email");
    const message = document.getElementById("contact-message");
    const status = document.getElementById("form-status");

    const fields = [name, email, message];
    let isValid = true;

    // Clear previous errors
    fields.forEach(function (field) {
      field.classList.remove("invalid");
      field.nextElementSibling.textContent = "";
    });

    status.textContent = "";
    status.style.color = "";

    // Validate name
    if (name.value.trim() === "") {
      showError(name, "お名前を入力してください。");
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
      showError(email, "メールアドレスを入力してください。");
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, "正しいメールアドレスを入力してください。");
    }

    // Validate message
    if (message.value.trim() === "") {
      showError(message, "お問い合わせ内容を入力してください。");
    }

    function showError(field, text) {
      field.classList.add("invalid");
      field.nextElementSibling.textContent = text;
      isValid = false;
    }

    if (isValid) {
      status.textContent =
        "入力内容は正しいです。お問い合わせ内容をご確認ください。";
      status.style.color = "var(--primary)";
    } else {
      status.textContent = "入力内容をご確認ください。";
      status.style.color = "#d64545";
    }
  });
}

/* FAQ Accordion */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", function () {
    item.classList.toggle("active");

    const icon = item.querySelector(".faq-icon");

    if (item.classList.contains("active")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "＋";
    }
  });
});
