// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAjTki-nHP2WpcBX9IqiNvCM8_ZaItFV0Q",
      authDomain: "let-s-chat-web-app-53201.firebaseapp.com",
      projectId: "let-s-chat-web-app-53201",
      storageBucket: "let-s-chat-web-app-53201.appspot.com",
      messagingSenderId: "326631452906",
      appId: "1:326631452906:web:31f7a158a18b26512fe793"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update
      ({
            purpose : "adding room name"
      })
      localStorage.setItem("room_name", room_name);
      window.location = "LCWA_room.js";
}
      
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "LCWA_room.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "LCWA.html";
}

function send()
{
      msg.document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}