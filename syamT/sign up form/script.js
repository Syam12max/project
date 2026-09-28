let name= document.getElementById("name").value
let email= document.getElementById("email").value
let tel= document.getElementById("tel").value
let password= document.getElementById("password").value
let confirm= document.getElementById("confirm").value
if(name===""&&email===""||tel===""||password===""||cofirm===""){
    document.getElementById("message").innerHTML="please enter all detailes";
    return;
}
if(password!==cofirm){
    document.getElementById("message").innerHTML="password not matched";
    return;
}
let users={
    name:name,
    email:email,
    tel:tel,
    password:password,
    confirm:cofirm
}
localStorage.setItem("users",JSON.stringify(users))
let user = JSON.parse(users)