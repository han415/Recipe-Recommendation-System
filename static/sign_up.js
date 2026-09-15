// const mysql=require("mysql2/promise")
const signupForm=document.getElementById("signup-area")
const signupButtom=document.getElementById("signup-submit")
const signupErrorMsg=document.getElementById("error-msg-area")

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
signupButtom.addEventListener("click",(active)=>{
    active.preventDefault();
    const username=signupForm.username.value;
    const password=signupForm.password.value;

    if (username=="" || password==""){
        signupErrorMsg.style.opacity=1;
        setTimeout(function(){
            window.location.reload();
        },3000)
    } else{
        alert('ID:U015 請重新登入');
        location.href="login.html"
    }
})