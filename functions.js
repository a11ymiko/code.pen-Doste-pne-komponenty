function removeChip(x){
  const element = document.getElementById("chip-"+x);
  var info_container = document.getElementById("info_container");
  const info = document.createElement("span")
  
  element.remove();
  infoHTML = "<span id='info' class='sr-only'>Filtr został usunięty</span>";
  info.innerHTML=infoHTML;
  info_container.appendChild(info);
  var del_info = document.getElementById("info");
  setTimeout(() =>{del_info.remove();},2000);}

var input = document.getElementById("new-filter");
input.addEventListener("keypress", function() {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("new-filter").click();
  }
});

function dodajChip(){
  const el = document.createElement("div")
  const info = document.createElement("span")
  
  el.setAttribute('id', 'chip-3');
  el.setAttribute('class','chip')
  el.style.display="inline";
  
  const element = document.getElementById("new-filter")
  var filter = document.getElementById("new-filter").value;
  var container = document.getElementById("chip_container"); 
  var info_container = document.getElementById("info_container");
  
  if (filter !== "")
    {
  innerHTML = '<span>'+filter+'</span><button aria-label="Usuń'+filter+'" onclick="removeChip(3)">X</button>';
  el.innerHTML = innerHTML;
  container.appendChild(el);
  document.getElementById("new-filter").value = "";
  infoHTML = "<span id='info' class='sr-only'>Nowy filtr "+filter+" dodany</span>";
  info.innerHTML=infoHTML;
  info_container.appendChild(info);
  var del_info = document.getElementById("info"); 
  setTimeout(() =>{del_info.remove();},2000);
}}

function addChip(){
  const el = document.createElement("div")
  const info = document.createElement("span")
  
  el.setAttribute('id', 'chip-3');
  el.setAttribute('class','chip')
  el.style.display="inline";
  
  const element = document.getElementById("new-filter")
  var filter = document.getElementById("new-filter").value;
  var container = document.getElementById("chip_container"); 
  
  if (filter !== "")
    {
  innerHTML = '<span>'+filter+'</span><button aria-label="Close '+filter+'" onclick="removeChip(3)">X</button>';
  el.innerHTML = innerHTML;
  container.appendChild(el);
  document.getElementById("new-filter").value = "";
  infoHTML = "<span id='info' class='sr-only'>New filter "+filter+" added</span>";
  info.innerHTML=infoHTML;
  container.appendChild(info);
  var del_info = document.getElementById("info"); 
  setTimeout(() =>{del_info.remove();},2000);
}}