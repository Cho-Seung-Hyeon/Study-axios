function f_loginCheck() {
  var id = document.getElementById("userId").value;
  var pwd = document.getElementById("pwd").value;

  console.log(id);
  console.log(pwd);
    axios
        .post("http://203.250.32.29:8080/api/webservice/login", {
            id: id,
            password: pwd
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
        
}