
function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat) || inputText.value.length == 0)
  {
    return true;
  }
  else
  {
    document.getElementById("mail").focus;
    alert("You have entered an invalid email address!");
    document.getElementById("mail").value = "";
    
    return false;
  }
}

function ValidatePhone()
{
  var numbers = /^[0-9]+$/;
  if(document.getElementById('phone').value.length == 10 || document.getElementById('phone').value.length == 0)
  {}
  else 
  {
    alert("Enter 10 digit phone number");
    document.getElementById('phone').value = "";
    document.getElementById('phone').focus;
  }
  if(document.getElementById('phone').value.match(numbers))
  {}
  else 
  {
    alert("Phone number should be only numbers");
    document.getElementById('phone').value = "";
    document.getElementById('phone').focus;
  }
}

function submitl(pwd)
{ 
  if(pwd.value.length == 0 || document.getElementById("mail").value.length == 0)
  {
    alert("Enter all details");
    location.reload();
  }
  else if (pwd.value.match("Admin")) 
  {
    alert("Login successful."); 
    location.reload();
  } 
  else 
  {
    alert("Invalid password"); 
    location.reload();
  }
}


function mouseOver() {
  document.getElementById("move").stop();
}

function mouseOut() {
  document.getElementById("move").start();
}