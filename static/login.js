// const mysql=require("mysql2/promise")
const loginForm=document.getElementById("login-area")
const loginButtom=document.getElementById("login-submit")
const loginErrorMsg=document.getElementById("error-msg-area")

// async function connectToMySQL(){
//     const con=await mysql.createConnection({
//         user:"root",
//         password:"m09101002",
//         host:"127.0.0.1:3306",
//         database:"recipe_system"
//     });
//     let userID="U001";
//     let[result]=await con.execute("SELECT password FROM Users WHERE user_id=?",[userID])
//     console.log(result)
//     con.end();
// }
// connectToMySQL()
loginButtom.addEventListener("click",(active)=>{
    active.preventDefault();
    const userID=loginForm.userID.value;
    const password=loginForm.password.value;

    if (userID==="U015" && password==="123"){
        alert('Welcome');
        location.href="login_home.html"
    } else{
        loginErrorMsg.style.opacity=1;
        setTimeout(function(){
            window.location.reload();
        },3000)
    }
})