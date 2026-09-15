// const mysql=require("mysql2/promise")
const changeForm=document.getElementById("change-area")
const changeButtom=document.getElementById("change-submit")
const changeErrorMsg=document.getElementById("error-msg-area")

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
changeButtom.addEventListener("click",(active)=>{
    active.preventDefault();
    const userID=changeForm.userID.value;
    const username=changeForm.username.value;
    const password=changeForm.password.value;

    if (userID!="U015" || password!="123" || username==""){
        changeErrorMsg.style.opacity=1;
        setTimeout(function(){
            window.location.reload();
        },3000)
    } else{
        alert('CHANGE SUCCESS');
        location.href="login_home.html"
    }
})