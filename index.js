// set current year on copyright element
// const yearEl = document.querySelector('.copyright');
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

// const contactEl = document.querySelector('.section-contact');

// const contactEl = document.querySelector('.section-contact');
// console.log(contactEl)

// LEFT NAV HOVER LINKS
// const leftNavLinkedIn = document.querySelector('.left-nav-link, .linked-in');
// leftNavLinkedIn.addEventListener('mouseover', () => {
//     const linkedInIcon = document.querySelector('.linked-in-icon')
//     linkedInIcon.classList.add('show-icon')
//     console.log(linkedInIcon)
//     leftNavLinkedIn.classList.add('hide-nav')
// })

// GIANT NAV LINKS////

// WORK
const workLinkEl = document.querySelector(".work-link");
workLinkEl.addEventListener("click", () => {
  const mainPage = document.querySelector(".main-page");
  const workEl = document.querySelector(".section-work");
  workEl.classList.add("open");
  mainPage.classList.add("hidden");
});

// CONTACT
const contactLinkEl = document.querySelector(".contact-link");
contactLinkEl.addEventListener("click", () => {
  const mainPage = document.querySelector(".main-page");
  const contactEl = document.querySelector(".section-contact");
  contactEl.classList.add("open");
  mainPage.classList.add("hidden");
});

// ABOUT //
const aboutLinkEl = document.querySelector(".about-link");
aboutLinkEl.addEventListener("click", () => {
  const mainPage = document.querySelector(".main-page");
  const aboutEl = document.querySelector(".section-about");
  console.log(aboutEl);
  aboutEl.classList.add("open");
  mainPage.classList.add("hidden");
});

// BACK ARROW

const backArrows = document.querySelectorAll(".back-arrow");

backArrows.forEach((backArrow) => {
  backArrow.addEventListener("click", () => {
    const mainPage = document.querySelector(".main-page");
    const aboutEl = document.querySelector(".section-about");
    const contactEl = document.querySelector(".section-contact");
    const workEl = document.querySelector(".section-work");
    contactEl.classList.remove("open");
    workEl.classList.remove("open");
    aboutEl.classList.remove("open");
    mainPage.classList.remove("hidden");
  });
});

// Project Section BACK ARROW




const contactSend = document.querySelector(".btn-send");
contactSend.addEventListener("click", (event) => {
  event.preventDefault();

  const formToReset = document.querySelector(".contact-form");
  const firstName = document.querySelector(".first-name").value;
  const lastName = document.querySelector(".last-name").value;
  const email = document.querySelector(".email-input").value;
  var message = document.querySelector(".message").value;

  // Compose email message
  const body =
    "Name: " +
    firstName +
    " " +
    lastName +
    "\n Email:" +
    email +
    "\n Message: " +
    message;

  const submitAlertMessage = `Thank you ${firstName}. Your Message has been sent.`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "huntercheveldave@gmail.com",
    Password: "F122EDB288F88258553A7845BCBE8EF87242",
    To: "huntercheveldave@gmail.com",
    From: email,
    Subject: "New message from your website",
    Body: body,
  }).then((message) => alert(submitAlertMessage));
  formToReset.reset();
});
