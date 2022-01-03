document.querySelector("#form").addEventListener("submit",getvalue)
var arr=JSON.parse(localStorage.getItem("myLocal"))||[]
function getvalue(event){
   event.preventDefault();
   
var myObj={
name:form.name.value,
add:form.add.value,
email:form.email.value,
password:form.password.value,

}
console.log(myObj);
arr.push(myObj)
localStorage.setItem("myLocal",JSON.stringify(arr))

}