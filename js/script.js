try {
    document.getElementById("form").addEventListener("click",userForm);
} catch (error) {
       
}
try {
    document.getElementById("calculate").addEventListener("click",myExcelFuns)
} catch (error) {
    
}

function userForm(){
    let firstName=document.getElementById('name').value;
    let lastname=document.getElementById('last-name').value;
    let email=document.getElementById('email').value;
    let address=document.getElementById('address').value;
    let city=document.getElementById('city').value;
    let province=document.getElementById('province').value;
    let membership=document.querySelector('input[name="membership"]:checked').value;
    document.getElementById('output').innerHTML='<p>Full Name:' +firstName+' '+lastname+'<br> Email:'+email+'<br>Address:'+address+' '+city+' '+province+'<br>Membership:'+membership+'</p>';
}


function myExcelFuns(){
    
    let numberstr=document.getElementById('number').value;
  
    if(numberstr==''){
        alert("you didnt put any value")
    }else{
        numberstr.trim()
        
        let numberArr=numberstr.split(" ");
        let finalNumericArray=[];
        let result=0;
        for(let i=0;i<numberArr.length;i++){
            if(numberArr[i]!=''){
                finalNumericArray.push(Number(numberArr[i]));
            }
        }
        console.log(finalNumericArray);
        let operation=document.querySelector('input[name="calc"]:checked').value
        if(operation=="autoSum"){
            for (let i = 0; i < finalNumericArray.length; i++) {
                result += finalNumericArray[i];
                console.log(result);
                console.log(finalNumericArray[i]);
            }

        }if (operation == "average") {
            
            for (let i = 0; i < finalNumericArray.length; i++) {
                result += finalNumericArray[i];
            }
            result=result/finalNumericArray.length
        }if (operation == "max") {
            
            result = Math.max(...finalNumericArray);
        }if(operation=="min") {
            
            result = Math.min(...finalNumericArray);
        }
        document.getElementById('output').innerHTML='Result: '+result;
    }
}
