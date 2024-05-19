const firebaseConfig = {
  apiKey: "AIzaSyBQH0gLnqWpsrXoEprJYOu6OjjcOYClTsw",
  authDomain: "let-stalk-portfolio.firebaseapp.com",
  databaseURL: "https://let-stalk-portfolio-default-rtdb.firebaseio.com",
  projectId: "let-stalk-portfolio",
  storageBucket: "let-stalk-portfolio.appspot.com",
  messagingSenderId: "835272760801",
  appId: "1:835272760801:web:3b81bb3cb03473a4ea86a0",
  measurementId: "G-78ZBKLYRY2",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);


var LetsTalkDB=firebase.database().ref("LetsTalk");


document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var message = getElementVal("message");

    // console.log(name,email,phone,message);
    saveMessages(name, email, phone,message);


    //   enable alert
    document.querySelector(".form-alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".form-alert").style.display = "none";
        var send = document.querySelector(".effect-motion-bg");
        send.style.backgroundSize = "auto";
    }, 2000);

    //   reset the form
    document.getElementById("contactForm").reset();
}  

const saveMessages = (name, email, phone,message) => {
    var newContactForm = LetsTalkDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
  };
  

const getElementVal = (id) => {
    return document.getElementById(id).value;
};