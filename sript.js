let firstName=document.getElementById("fname").value;
let LastName=document.getElementById("lname").value;
let Address=document.getElementById("address").value;
let Pincode=document.getElementById("pcode").value;
let Gender=document.getElementById("gender").value;
let Food=document.getElementById("food").value;
let State=document.getElementById("state").value;
let Country=document.getElementById("country").value;
function getData(e)
{
    e.preventDefault();
    let rows="";
    try 
    {
        rows+="<tr><td>"+firstName+"</td><td>"+LastName+"</td><td>"+Address+"</td><td>"+Pincode+"</td><td>"+Gender+"</td><td>"+Food+"</td><td>"+State+"</td><td>"+Country+"</td></tr>";
        $(rows).appendTo("#list tbody");
    } 
    catch (error)
    {
console.log("Error");
  
    }
}




