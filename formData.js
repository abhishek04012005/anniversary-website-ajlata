var firebaseConfig = {
    apiKey: "AIzaSyDRuDtQHGXGEFiABcO5hipvK_zteqgE9Dw",
    authDomain: "guestdata-371bd.firebaseapp.com",
    projectId: "guestdata-371bd",
    storageBucket: "guestdata-371bd.appspot.com",
    messagingSenderId: "86264927343",
    appId: "1:86264927343:web:bcacc4e492b370df72a99a",
    measurementId: "G-CKB6WBC0M9"
};




// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database()


// function handleMe() {

//     console.log("I'm Clicked and Saved")
//     alert("Successfully Saved!fyvhg");
//     var yourName = document.getElementById('yourName').value;
//     var yourNumber = document.getElementById('yourNumber').value;
//     // var radioButton = document.getElementById('radio1').value;
//     var yourGuest = document.getElementById('yourGuest').value;
//     var whatFunction = document.getElementById('whatFunction').value;
//     // var yourMeal = document.getElementById('yourMeal').value;
//     // var userName = document.getElementById('userName').value;
//     // var pwd = document.getElementById('pwd').value;

//     database.ref('users/' + yourName).set({
//         yourName: yourName,
//         yourNumber: yourNumber,
//         // radioButton: radioButton,
//         yourGuest: yourGuest,
//         whatFunction: whatFunction,
//         // yourMeal: yourMeal,
//         // userName: userName,
//         // pwd: pwd
//     })


// }

function handleMe() {

    if (document.getElementById('yourName').value == 0) {
        alert("Please Enter Your Name")
    }
    else if (document.getElementById('yourNumber').value == 0) {
        alert("Please Enter Your Number")
    }
    else {
        console.log("I'm Clicked and Saved")
        alert("Thank You! We have recived your input.");
        var yourName = document.getElementById('yourName').value;
        var yourNumber = document.getElementById('yourNumber').value;
        // var radioButton = document.getElementById('radio1').value;
        var yourGuest = document.getElementById('yourGuest').value;
        var whatFunction = document.getElementById('whatFunction').value;
        var yourMeal = document.getElementById('yourMeal').value;
        // var userName = document.getElementById('userName').value;
        // var pwd = document.getElementById('pwd').value;

        database.ref('users/' + yourName).set({
            yourName: yourName,
            yourNumber: yourNumber,
            // radioButton: radioButton,
            yourGuest: yourGuest,
            whatFunction: whatFunction,
            yourMeal: yourMeal,
            // userName: userName,
            // pwd: pwd
        })

    }
    // location.reload();


}
