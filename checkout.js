function getdata(){
    var cart= document.getElementById("cart").value;
    var cvv= document.getElementById("cvv").value;
   
 
    
alert("we are Processing Wait A Sec")
     setTimeout(function(){
        if(cart==123456789 &&cvv==999){
            alert("payment susseful Thank U")
        }else{
            alert("Not Susseful sorry")
        }
     },3000)
 }