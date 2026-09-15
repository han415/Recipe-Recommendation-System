// const mysql=require("mysql2/promise")
const searchForm=document.getElementById("search-area")
const searchButtom=document.getElementById("search-submit")
const searchErrorMsg=document.getElementById("error-msg-area")

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
searchButtom.addEventListener("click",(active)=>{
    active.preventDefault();
    const ingredientID=searchForm.ingredientID.value;

    if (ingredientID==="I001"){
        location.href="searchegg.html"
    } else{
        searchErrorMsg.style.opacity=1;
        setTimeout(function(){
            window.location.reload();
        },3000)
    }
})