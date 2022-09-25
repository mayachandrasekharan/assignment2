
 let fname = document.getElementById("fname");
 let email=document.getElementById("email1");
 let phone=document.getElementById("phone");
 let pwd=document.getElementById("pass");
 let repwd=document.getElementById("repass");
 


    function firstFocus() {
        fname.focus();
        return true;
  }
  function validate(){

    return(allLetter()&&ValidateEmail()&&phone_validation()&&pass_validation()&&repass_validation()&&chk_valid());
  }

  //fullname validation
     function allLetter(){ 
       let letters = /^([A-Za-z\.]+)$/;
       let error=document.getElementById("flbl");
       if(fname.value==""){
        error.innerHTML="please enter fullname !";
        error.style.color="red";
        return false;
       }
       if(fname.value.match(letters)){
            // Focus goes to next field.
             document.form.email.focus();
             document.getElementById("flbl").value.innerHTML=" ";
             return true;
           
         }
        else {
            error.innerHTML="Characters only !";
            error.style.color="red";
            fname.value="";
            document.form.fname.focus();

            return false;
        }
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
  function phone_validation(){
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let error5=document.getElementById("phnlbl");
  if(phone.value.match(phoneno))
        {
      return true;
        }
      else
        {
            error5.innerHTML="please enter valid phone number";
            error5.style.color="red";
            phone.value="";
            document.form.phone.focus();
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
    function repass_validation(){
        let message = document.getElementById("rplbl"),
        colors = {
        goodColor: "#fff",
        goodColored: "#087a08",
        badColor: "#fff",
        badColored:"#ed0b0b"
        },
        strings = {
        "confirmMessage": ["good", "bad"]
        };
        
        if(pwd.value === repwd.value && (pwd.value + repwd.value) !== "") {
        repwd.style.backgroundColor = colors["goodColor"];
        rplbl.style.color = colors["goodColored"];
        rplbl.innerHTML = strings["confirmMessage"][0];
        }
        else if(!(repwd.value === "")) {
        repwd.style.backgroundColor = colors["badColor"];
       rplbl.style.color = colors["badColored"];
        rplbl.innerHTML = strings["confirmMessage"][1];
        }
        else {
        rplbl.innerHTML = "";	
        }
        
    }
    function chk_valid(){
      let chkbx=document.getElementById(ckb1);
      if(document.form.ckb1.checked){
          return true;

      }
      else{
          alert("please check terms");
          return false;
      }
    }
  