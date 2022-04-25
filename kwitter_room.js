function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
// add your firebase links here
var firebaseConfig = 
{
    apiKey: "AIzaSyCQGPoVPenf0H3DGY-pQm5wD19kRy8MQx4",
    authDomain: "lets-chat-web-app-2-f2a75.firebaseapp.com",
    projectId: "lets-chat-web-app-2-f2a75",
    storageBucket: "lets-chat-web-app-2-f2a75.appspot.com",
    messagingSenderId: "914497565695",
    appId: "1:914497565695:web:c2ae6a551664d74f1dedca",
    
  };
// initialize firebase
firebase.intializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById(welcome_user_name).innerHTML = "welcome "+user_name;


function addroom()
{
    room_name = document.getElementById("room_name").value;

    localStorage.setItem("roomname",room_name);

    window.location = "kwitter_page.html";

    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    
}