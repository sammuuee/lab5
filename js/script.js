document.getElementById("calculate").addEventListener("click",myExcelFuns);
document.getElementById("form").addEventListener("click",userForm);

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
    console.log('fzzef');
    //let numberstr=document.getElementById('number').value;
    //if(numberstr=='')[
    //    alert("you didnt put any value")
    //]
}