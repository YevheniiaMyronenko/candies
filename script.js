
function searchProducts(){
 let input=document.getElementById('search').value.toLowerCase();
 document.querySelectorAll('.product').forEach(p=>{
  p.style.display=p.innerText.toLowerCase().includes(input)?'block':'none';
 });
}
