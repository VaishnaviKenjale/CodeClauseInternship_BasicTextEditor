

document.getElementById("heading").innerHTML =
  localStorage["title"] || "Text Editor"; 
  
document.getElementById("content").innerHTML =
  localStorage["text"] || "Add Date, Write and Edit your valuable thoughts here & automatically saved :)"; 


setInterval(function()         
{
  localStorage["title"] = document.getElementById("heading").innerHTML; 
  localStorage["text"] = document.getElementById("content").innerHTML; 
}, 1000);

function display_date()
{
    document.getElementById('content').innerHTML += " "+ Date()
}
  
