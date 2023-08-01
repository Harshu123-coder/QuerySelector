

var item = document.querySelector('#main-header');
item.style.borderBottom = '5px solid black';

var input =document.querySelector('input');
input.value ="hello guys";

var inp = document.querySelector('input[type="submit"]');
inp.value="SEND";

var list = document.querySelector('.list-group-item');
list.style.color="red";
 
var list = document.querySelector('.list-group-item:last-child');
list.style.color="purple";

var list = document.querySelector('.list-group-item:nth-child(2');
list.style.color="orange";

var odd =document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="gray";
}