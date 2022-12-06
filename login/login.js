let name = localStorage.getItem('name') ? localStorage.getItem('name') : '';
console.log(name);
if (name != '') {
    alert('Please visit profile');
    window.location.href = "/index.html";
}
function saveData() {
    let username, psw;
    username = document.getElementById("username").value;

    psw = document.getElementById("psw").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    if (user_records.some((v) => { return v.username == username && v.psw == psw; })) {
        alert("Login Pass");
        let current_user = user_records.filter((v) => { return v.username == username && v.psw == psw; })[0];
        localStorage.setItem('username', current_user.username);
        localStorage.setItem('email', current_user.email);
        window.location.href = "/admin-panel/index.html";
    }
    else {
        alert('Login Fail');
    }

}