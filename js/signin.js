
function f_loginCheck() {
  var id = document.getElementById("id").value;
  var pwd = document.getElementById("pwd").value;

  console.log(id);
  console.log(pwd);
    axios
        .post("http://203.250.32.29:8080/api/webservice/login", {
            id: id,
            password: pwd
        })
        .then(res => {
          console.log(res.data)
          if(res.data == 0) {
            alert('이메일을 인증해주세요.');
          }
          if(res.data == 1) {
            window.open('mainpage.html')
          }
          if(res.data == 2) {
            alert('가입하지 않은 아이디이거나 잘못된 비밀번호입니다.');
          }
        })
  
}
/*
function postLoginData() {
    var id = document.querySelector('id').value;
    var pwd = document.querySelector('pwd').value;

 const loginData = {
   loginType: 'custom',
   id: id,
   password: pwd,
 };
 const url = 'http://203.250.32.29:8080/api/webservice/login'
 
 return (
   axios
     .post(url, loginData)
     .then((response) => {
       if (response.status >= 200 && response.status <= 204) {
         this.props.handleLogin();
       }
     })
     .then(() => {
       this.props.history.push('/');
     })
     .catch(() => {
       alert('가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.');
     })
 );
}
*/
