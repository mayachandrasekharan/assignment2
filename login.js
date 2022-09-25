

 let email=document.getElementById("exampleInputEmail1");

 let pwd=document.getElementById("exampleInputPassword1");
 
 


    function firstFocus() {
        email.focus();
        return true;
  }
  function validate(){

    return(ValidateEmail()&&pass_validation());
  }


  //email validation
  function ValidateEmail()
  {
  
     let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
     let error1=document.getElementById("elbl");
     if(email.value==""){
        error1.innerHTML="please enter your email address!";
         error1.style.color="red";
     }
     else if(email.value.match(regexp))
  {
    document.form.uname.focus();
    $("#email1").keyup(function(){
        $("#uname").val(this.value);
    });
  return true;
  }
  else
  {
  //alert("You have entered an invalid email address!");
  error1.innerHTML="invalid email address!";
  error1.style.color="red";
  email.value="";
  document.form.email.focus();
  return false;
  }
  }
    function pass_validation(){
        let pat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
       
        let error2=document.getElementById("plbl");
        if(pwd.value.match(pat)){
                document.form.repass.focus();
                return true;
        }
        else{
            error2.innerHTML="Password must contain at least one number, one uppercase and lowercase letter,one symbol and at least 8 and max 20 characters!";
            error2.style.color="red";
           // error2.style.fontSize="12px";
            //alert("Password must contain at least one number, one uppercase and lowercase letter,one symbol and at least 8 and max 20 characters");
            
            document.form.pass.focus();
            pwd.value="";
            return false;
        }
    }
    
    
  