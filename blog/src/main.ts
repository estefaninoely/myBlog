import emailjs from "@emailjs/browser";
window.onload = function () {
  const contact = document.querySelector("#contact_number");
  console.log(contact);
  const form = document.getElementById("contact-form") as HTMLFormElement;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    /*contact.value = (Math.random() * 100000) | 0;*/

    // these IDs from the previous steps
    emailjs.sendForm("default_service", "contact_form", form).then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};

emailjs.init("TuYIcxd6UlaulmG7X");
