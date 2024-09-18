const firebaseConfig = {
    apiKey: "AIzaSyBXlioh5nV_me0mzxYIwOv4I17IrpR5meg",
    authDomain: "resume-2a1b3.firebaseapp.com",
    databaseURL: "https://resume-2a1b3-default-rtdb.firebaseio.com",
    projectId: "resume-2a1b3",
    storageBucket: "resume-2a1b3.appspot.com",
    messagingSenderId: "594035724853",
    appId: "1:594035724853:web:2f5ed1082b4943e999177c",
    measurementId: "G-4SP3630T7N"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    // to check the msg is printed or not 
    //console.log(name, emailid, msgContent)

    saveMessages(name, emailid, msgContent);


    //   enable alert
    // document.querySelector(".alert").style.display = "block";

    // //   remove the alert
    // setTimeout(() => {
    //     document.querySelector(".alert").style.display = "none";
    // }, 3000);
    alert("Form submitted and reset!");
    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};