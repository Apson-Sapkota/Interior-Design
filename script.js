function formvalidation(){
  var mail = document.forms["messageform"]["emails"].value;
  if(mail ==""){
    window.alert("Please enter your Email");
    return false;
  }
  else{
    window.alert("You will be notified soon.");
  }
}