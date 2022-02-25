function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat))
  {
    return true;
  }
  else
  {
    alert("You have entered an invalid email address!");
    location.reload();
    return false;
  }
}

function submitt(pwd)
{ 
  if(pwd.value.length == 0)
  {
    alert("Enter all details");
  }
  else
  {
    alert("Sign up successful. Our representatives will contact you soon.!"); 
    location.reload();
  }
}
