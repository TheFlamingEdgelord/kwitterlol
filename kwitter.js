function adduser() {
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    
}
/*
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
  
  const app = initializeApp(firebaseConfig);
  
  const analytics = getAnalytics(app);
  */