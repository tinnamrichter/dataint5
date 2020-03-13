"use strict";
const $ = function (foo) {
    return document.getElementById(foo);
};

let xhr = new XMLHttpRequest()
xhr.addEventListener("load", function() {
    let obj = JSON.parse(xhr.responseText);
 
        var name = obj.name;
        var address = obj.address;

$("info").innerHTML = `
<h2>${name}</h2><br>
<p>${address}</p>`

});


xhr.open("GET", "https://cvrapi.dk/virksomhed/dk/erhvervsakademi-kolding/31642124");

xhr.send();