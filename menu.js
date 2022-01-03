async function getData(){

    let url=`https://www.themealdb.com/api/json/v1/1/filter.php?a=indian`
    let res=await fetch(url)
    let data=await res.json()
    let meal=data.meals
    console.log(meal)
    displayData(meal)
}
getData()

let divTag=document.getElementById("cont")
function displayData(arr){

arr.map(function(elem){

let div=document.createElement("div")
let img=document.createElement("img")
let name=document.createElement("h1")
let price=document.createElement("h2")
let button=document.createElement("button")
button.addEventListener("click",addFn)

img.src=elem.strMealThumb
name.innerText=elem.strMeal
price.innerText=Math.floor(Math.random()*500+10)
button.innerText="Add To Cart"

div.append(img,name,price,button)
divTag.append(div)
})


}



function addFn(){
    alert("This Product is Sussesful wait a Few Second")
    
    setTimeout(function(){
       window.location.href="checkout.html" 
       alert("now You are in Payment Page")
    },3000)
    
}