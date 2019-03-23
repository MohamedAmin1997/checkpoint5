
 
  var config = {
    apiKey: "AIzaSyDTnIQV3KhvbFwi7EZTf9SzlYdEX7yQEuk",
    authDomain: "contact-be631.firebaseapp.com",
    databaseURL: "https://contact-be631.firebaseio.com",
    projectId: "contact-be631",
    storageBucket: "contact-be631.appspot.com",
    messagingSenderId: "656892043052"
  };
  firebase.initializeApp(config);
 
function submit ()
{
var database = firebase.database();
 var ref = database.ref("pc");
 
 var name= document.getElementById("bt1").value ; 
 var track=document.getElementById("opt").value;
 var slide_name=document.getElementById("bt2").value;
 var message=document.getElementById("bt3").value;

 
 
 var data= {
    name : name ,
    track : track , 
    slide_name : slide_name , 
    message : message 
    
    };
 ref.push(data);
}
document.getElementById("bo").addEventListener("click" , function(e){
    e.preventDefault();
    submit();

})