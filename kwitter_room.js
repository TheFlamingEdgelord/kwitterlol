
const firebaseConfig = {

      apiKey: "AIzaSyAyRGgj3Phc74fu56X1ReBo2mPI3WppzWI",
    
      authDomain: "kwitter-76ef0.firebaseapp.com",
    
      databaseURL: "https://kwitter-76ef0-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-76ef0",
    
      storageBucket: "kwitter-76ef0.appspot.com",
    
      messagingSenderId: "15441962727",
    
      appId: "1:15441962727:web:56a9dde94143db7eaca442",
    
      measurementId: "G-0CGLP3ZRJP"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("RoomName - " + Room_names);

       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function addroom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding roomname" });
      localStorage.setItem("room_name",room_name);
      window.location="twitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

function redirectToRoomName() {
     console.log(name);
     localStorage.setItem("room_name", name); window.location = "kwitter_page.html";
}