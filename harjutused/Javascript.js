console.log("töötab");

var muutuja = "muutuja"
document.getElementById("htmli_id").innerHTML = muutuja;

var arr = ["mouse","cat","dog"];

arr.push("horse");
console.log(arr[1]);
arr[2] = "cow"
console.log(arr[arr.lenght-1])

var holder = document.getElementById("holder");
console.log(holder);
for(var i=0; i < arr.length; i++)
  holder.innerHTML += "<p>" + (i+1) + ". " +arr[i]+"</p>";

  holder.innerHTML += "tereteretere"