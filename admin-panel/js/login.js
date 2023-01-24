// // signup validations
// function validateEmail(email) {
    
//     let validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
//     if (!validRegex.test(email)) {
//         return false;

//     }
//     else {
//         return true;
//     }
// };
// function regValidation() {

//     let counter = 0;


//     let username = document.getElementById("username");
//     let email = document.getElementById("email");
//     let password = document.getElementById("psw");

//     if (username.value == "") {
//         counter++;
//         alert("firstname required");
//         // return false;
//     }
  


//     if (!validateEmail(email.value)) {

//         counter++;
//         alert("Email required");
//         // return false;
//     }
   

//     if (password.value == "") {
//         counter++;
//         alert("Password required");
//         // return false;
//     }
   

//     if (counter == 0) {
//         alert("all good");
       
//         window.location.href = "../../blog.html"
        
//     }

//     let user_records = new Array();
//     user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
//     if (user_records.some((v) => { return v.username == username; })) {
//         alert("duplicate data");
//     }
//     else {
//         user_records.push({
//             "username": username,
//             "email": email,
//             "psw": psw
//         });
//         localStorage.setItem("users", JSON.stringify(user_records));
//     }


// }