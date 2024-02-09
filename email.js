const form = document.querySelector("form");
function send() {
  var fristName = document.getElementById("fristName").value;
  var lastName = document.getElementById("lastName").value;
  var userName = document.getElementById("inputEmail4").value;
  var phoneNumber = document.getElementById("inputtel").value;
  var addressOne = document.getElementById("inputAddress").value;
  var addresstwo = document.getElementById("inputAddress2").value;
  var city = document.getElementById("inputCity").value;
  var stateName = document.getElementById("inputState").value;
  var zipcode = document.getElementById("inputZip").value;
  var anyMessage = document.getElementById("somemessage").value;

  var Body =
    "Name :- " +
    fristName +
    " &nbsp;" +
    lastName +
    "<br/>Email Id :- " +
    userName +
    "<br/>Phone Number :- " +
    phoneNumber +
    "<br/>Address one :- " +
    addressOne +
    "<br/>Address two:- " +
    addresstwo +
    "<br/>City:- " +
    city +
    "<br/>State Name :- " +
    stateName +
    "<br/>Zip Code :-" +
    zipcode +
    "<br/>Message :-" +
    anyMessage;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sandeepkumarr8844@gmail.com",
    Password: "F5A1F1BAA42F2013D9AB8DBDED13BE433B4A",
    To: "sandeepkumarr8844@gmail.com",
    From: "sandeepkumarr8844@gmail.com",
    Subject: "Hi Sandeep, this mail has come from your website.",
    Body: Body,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  send();
});
