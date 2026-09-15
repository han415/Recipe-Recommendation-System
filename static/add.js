// const mysql=require("mysql2/promise")
const addForm=document.getElementById("add-area")
const addButtom=document.getElementById("add-submit")
const addErrorMsg=document.getElementById("error-msg-area")

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
addButtom.addEventListener("click",(active)=>{
    active.preventDefault();
    const rname=addForm.rname.value;
    const ringredient=addForm.ringredient.value;
    const rmethod=addForm.rmethod.value;

    if (rname=="" || ringredient=="" || rmethod==""){
        addErrorMsg.style.opacity=1;
        setTimeout(function(){
            window.location.reload();
        },3000)
    } else{
        alert('Add Success');
        location.href="login_home.html"
    }
})