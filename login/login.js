// let name = localStorage.getItem('name') ? localStorage.getItem('name') : '';
// console.log(name);
// if (name != '') {
//     alert('Please visit profile');
//     window.location.href = "/index.html";
// }
// function saveData() {
//     let username, psw;
//     username = document.getElementById("username").value;

//     psw = document.getElementById("psw").value;

//     let user_records = new Array();
//     user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
//     if (user_records.some((v) => { return v.username == username && v.psw == psw; })) {
//         alert("Login Pass");
//         let current_user = user_records.filter((v) => { return v.username == username && v.psw == psw; })[0];
//         localStorage.setItem('username', current_user.username);
//         localStorage.setItem('email', current_user.email);
//         window.location.href = "/admin-panel/index.html";
//     }
//     else {
//         alert('Login Fail');
//     }

// }
var loginForm = document.querySelector("#loginForm");

function setCookie(name, value, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}




async function login() {
    var Email = document.querySelector("#email").value;
    var Password = document.querySelector("#psw").value;

    const data = { email: Email, password: Password };

    const request = await fetch('https://swagger-ui-production.up.railway.app/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },

    });
    const response = await request.json();
    console.log(await response);
    const adminID = '63ca5ef9efa2e61bc7adaf97';
    if (await response.errors) {
        loginForm.innerHTML = response.errors.message || response.errors.email || response.errors.password;
        return;
    }
    if (await response.userID == adminID) {
        setCookie('token', response.jwt, 3);
        window.location.href = "../admin-panel/index.html";
    }
    else {
        setCookie('token', response.jwt, 3);
        window.location.href = "../blog.html";

    }
    // .then(response => response.json())
    // .then(data => {
    //     const adminID = '63ca5ef9efa2e61bc7adaf97'
    //     // console.log(data.token);

    //     if (data.errors) {
    //         loginForm.innerHTML = data.errors.message || data.errors.email || data.errors.password;
    //         return;
    //     }
    //     if (data.userID == adminID) {
    //         setCookie('token', data.token, 3);
    //         window.location.href = "../admin-panel/admin.html";
    //     }
    //     else {
    //         setCookie('token', data.token, 3);
    //         // window.location.href = "/blog.html";

    //     }
    //     const response =await  request.json();
    //     if ( response.statusCode == 200) {
    //         alert(response.message);
    //     } else {
    //         console.log(response.message);
    //     }
    // })
    // .catch(error => console.log(error));
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    login();
});

// function signin(e) {
//     e.preventDefault();
//     login();
// }