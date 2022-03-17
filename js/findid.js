/*function f_loginCheck() {
  var name = document.getElementById("name").value;
  var mail = document.getElementById("mail").value;

  console.log(name);
  console.log(mail);
    axios
        .post("http://203.250.32.29:8080/api/webservice/findUserid", {
            name: name,
            email: mail
        })
        .then(res => {
          console.log(res.data)
          if(res.data == 0) {
            alert('회원님의 아이디가 없습니다');
          }
          else if(res.data == 1) {
            alert('가입한 이메일이 없습니다.');
          }
          else
            alert('가입하지 않은 아이디이거나 잘못된 비밀번호입니다.');
          
        })
  
}
*/
function f_loginCheck() {
  var name = document.getElementById("name").value;
  var mail = document.getElementById("mail").value;

  console.log(name);
  console.log(mail);
    axios
        .post("http://203.250.32.29:8080/api/webservice/findUserid", {
            name: name,
            email: mail
        })
        .then(res => {
          console.log(res.data)
          if(res.data == 0) {
            alert('회원님의 이름으로된 아이디가 없습니다');
          }
          else if(res.data == 1) {
            alert('가입한 이메일이 없습니다.');
          }
          else
            alert('가입하지 않은 아이디이거나 잘못된 비밀번호입니다.');
          
        })
  
}