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
    
    firebase.initializeApp(firebaseConfig);

    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");
    console.log(room_name);
    console.log(user_name);
    /*
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
*/
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
    document.getElementById("msg").value = "";
}