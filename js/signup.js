function f_signupCheck() {
  var name = document.getElementById("name").value;
  var nickname = document.getElementById("nickname").value;
  var pwd1 = document.getElementById("pwd1").value;
  var pwd2 = document.getElementById("pwd2").value;
  var email = document.getElementById("email").value;
  var birth = document.getElementById("birth").value;
  var id = document.getElementById("id").value;

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

    //비밀번호 체크

    if(!checkPassword(id.value, pwd1.value, pwd2.value)) {
        return false;
    }

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
        
          



}
    //비밀번호 확인
    function checkPassword(id, pwd1, pwd2) {
        //비밀번호가 입력되었는지 확인하기
        if (!checkExistData(pwd1, "비밀번호를"))
            return false;
        //비밀번호 확인이 입력되었는지 확인하기
        if (!checkExistData(pwd2, "비밀번호 확인을"))
            return false;
 
        var pwd1RegExp = /^[a-zA-z0-9]{4,100}$/; //비밀번호 유효성 검사
        if (!pwd1RegExp.test(pwd1)) {
            alert("비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
            pwd1.value = "";
            pwd1.focus();
            return false;
        }
        //비밀번호와 비밀번호 확인이 맞지 않다면..
        if (pwd1 != pwd2) {
            alert("두 비밀번호가 맞지 않습니다.");
            pwd1.value = "";
            pwd2.value = "";
            pwd2.focus();
            return false;
        }
 
        //아이디와 비밀번호가 같을 때..
        if (id == pwd1) {
            alert("아이디와 비밀번호는 같을 수 없습니다!");
            pwd1.value = "";
            pwd2.value = "";
            pwd2.focus();
            return false;
        }
        return true; //확인이 완료되었을 때
    } 