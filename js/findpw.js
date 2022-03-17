function f_loginCheck() {
  var id = document.getElementById("id").value;
  var mail = document.getElementById("mail").value;

  console.log(id);
  console.log(mail);
    axios
        .post("http://203.250.32.29:8080/api/webservice/findUserpassword", {
            id: id,
            email: mail
        })
        .then(res => {
          console.log(res.data)
          if(res.data == 0) {
            alert('이메일을 인증해주세요.');
          }
          else if(res.data == 1) {
            window.open('mainpage.html')
          }
          else 
            alert('가입하지 않은 아이디이거나 잘못된 비밀번호입니다.');
          
        })
  
}
