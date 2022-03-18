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
            alert('가입된 이메일이 없습니다.');
          }
          else if(res.data == 3) {
            alert('가입하신 아이디가 없습니다.');
          }
          else 
            alert('가입하신 이메일로 임시 비밀번호가 발급되었습니다.');
          
        })
  
}
