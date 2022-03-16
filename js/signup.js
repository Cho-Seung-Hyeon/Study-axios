function f_signupCheck() {
  var name = document.getElementById("name").value;
  var nickname = document.getElementById("nickname").value;
  var pwd1 = document.getElementById("pwd1").value;
  var pwd2 = document.getElementById("pwd2").value;
  var email = document.getElementById("email").value;
  var birth = document.getElementById("birth").value;
  var id = document.getElementById("id").value;


  console.log(id);
  console.log(pwd1);
  console.log(pwd2);
  console.log(name);
  console.log(nickname);
  console.log(email);
  console.log(birth);
    axios
        .post("http://203.250.32.29:8080/api/webservice", {
            id: id,
            password: pwd1,
            email : email,
            name : name,
            nickName: nickname,
            verifyPassword : pwd2,
            birthDate : birth
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
        
          //이메일확인
          if(email.includes('@')){
            let emailId = email.split('@')[0]
            let emailServer = email.split('@')[1]
            if(emailId === "" || emailServer === ""){
            document.getElementById("emailError").innerHTML=""
            check = false
            }
            else{
            document.getElementById("emailError").innerHTML=""
            }
        }else{
            document.getElementById("emailError").innerHTML=""
            check = false
        }



}
