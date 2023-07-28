function removeChip(x){
  const element = document.getElementById("chip-"+x);
  var info_container = document.getElementById("info_container");
  const info = document.createElement("span")
  const div = document.getElementById("chip-container")
  const legend_container = document.getElementById("table-legend")
  const filter_info = document.createElement("span")
  
  element.remove();
  infoHTML = "<span id='info' class='sr-only'>Filtr został usunięty</span>";
  info.innerHTML=infoHTML;
  info_container.appendChild(info);
  var del_info = document.getElementById("info");
  checkForFilters();
  setTimeout(() =>{del_info.remove();},2000);
}

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
  var nr_id = getFiltersLen()+1;
  el.setAttribute('id', 'chip-'+nr_id);
  el.setAttribute('class','chip');
  el.style.display="inline";
  
  const element = document.getElementById("new-filter")
  var filter = document.getElementById("new-filter").value;
  var container = document.getElementById("chip-container"); 
  var info_container = document.getElementById("info_container");
  if (filter !== "")
    {
    innerHTML = '<span>'+filter+'</span><button aria-label="Usuń'+filter+'" onclick="removeChip('+nr_id+')">X</button>';
    el.innerHTML = innerHTML;
    container.appendChild(el);
    document.getElementById("new-filter").value = "";
    infoHTML = "<span id='info' class='sr-only'>Nowy filtr "+filter+" dodany</span>";
    info.innerHTML=infoHTML;
    info_container.appendChild(info);
    checkForFilters();
    var del_info = document.getElementById("info"); 
    setTimeout(() =>{del_info.remove();},2000);
}

function addChip(){
  const el = document.createElement("div")
  const info = document.createElement("span")

  el.setAttribute('id', 'chip-3');
  el.setAttribute('class','chip')
  el.style.display="inline";
  
  const element = document.getElementById("new-filter")
  var filter = document.getElementById("new-filter").value;
  var container = document.getElementById("chip-container"); 
  
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
}


function getFiltersLen(){
  var div = document.getElementById("chip-container");
  children = div.children;
  len = children.length
  return len;
}

function checkForFilters(){
  const legend_container = document.getElementById("table-overview");

  if (getFiltersLen() > 0) {
      active_filters = getFilterNames();
      filterTable(active_filters);
      innerHTML = '<span>Tabela filtrowana po kategoriach: '+active_filters+'</span>';
      legend_container.innerHTML = innerHTML;
  }
  if (getFiltersLen() == 0) {
    innerHTML = '<span>Niefiltrowana tabela</span>';
    legend_container.innerHTML = innerHTML; 
    }
  }
window.onload=function(){
  checkForFilters();
}

function getFilterNames() {
  var div_filter = document.getElementById("chip-container");
  children_filter = div_filter.children;
  let text = '';
  let filters_arrays = [];
  for(let i=0; i<children_filter.length; i++){
    text = children_filter[i].innerText;
    var newText = text.split('X').join("")
    filters_arrays[i]=newText;
  }
  return filters_arrays; 
}

function filterTable(filters){
  var cat_1 = document.getElementsByClassName('cat-1')
  var cat_2 = document.getElementsByClassName('cat-2')
  var cat_3 = document.getElementsByClassName('cat-3')
  var present_cat = [];
  for(let i=0; i<filters.length; i++){ 
    if(filters[i] === "Kategoria 1"){
        present_cat[i] = "Kat_1"
      }
    if(filters[i] === "Kategoria 2"){
      present_cat[i] = "Kat_2"
    }
    if(filters[i] === "Kategoria 3"){
      present_cat[i] = "Kat_3"
    }
  }
  for(let j=0; j<cat_1.length; j++){
    cat_1[j].style.display="none";
    }
  for(let k=0; k<cat_2.length; k++){
    cat_2[k].style.display = "none";
    }
  for(let l=0; l<cat_3.length; l++){
      cat_3[l].style.display="none";
    }

  for(let m=0; m<=present_cat.length; m++){
    if(present_cat[m] === "Kat_1"){
      for(let j=0; j<cat_1.length; j++){
        cat_1[j].style.display="table-row";
      }
    }
    if(present_cat[m] === "Kat_2"){
      for(let j=0; j<cat_2.length; j++){
        cat_2[j].style.display="table-row";
      }
    }
    if(present_cat[m] === "Kat_3"){
      for(let j=0; j<cat_3.length; j++){
        cat_3[j].style.display="table-row";
      }
    }
    if(present_cat.length == 0){
      for(let j=0; j<cat_1.length; j++){
        cat_1[j].style.display="table-row";
        }
      for(let k=0; k<cat_2.length; k++){
        cat_2[k].style.display = "table-row";
        }
      for(let l=0; l<cat_3.length; l++){
          cat_3[l].style.display="table-row";
        }
    }
  }
}

//Accordeon
function accordeonToggle(name){
  btn = document.getElementById("btn-product-"+name);
  current_state = btn.getAttribute("aria-expanded");
  if(current_state == "false"){
    btn.setAttribute("aria-expanded", "true");
    accordeonVisible();
  }
  else {
    btn.setAttribute("aria-expanded", "false");
    accordeonInvisible();
  }
}

function accordeonVisible(){
  
}

function accordeonInvisible(){

}

//Tooltips 
/* not working
let chip1Dis = document.getElementById("chip-1-btn-dis");
let chip2Dis = document.getElementById("chip-2-btn-dis");
let inputDis = document.getElementById("input-action-dis");

chip1Dis?.addEventListener("blur", tooltipRemove("chip-1-dis"));
chip2Dis?.addEventListener("blur", tooltipRemove("chip-2-dis"));
inputDis?.addEventListener("blur", tooltipRemove("input-dis"));

chip1Dis?.addEventListener("focus", tooltipShow("chip-1-dis"));
chip2Dis?.addEventListener("focus", tooltipShow("chip-2-dis"));
inputDis?.addEventListener("focus", tooltipShow("input-dis"));

function tooltipShow(id="chip-1-dis"){
  div_container = document.getElementById(id);
  const tooltip_info = document.createElement("span");

  console.log(id);

  tooltip_info.style.display="inline";

  innerTxt ="<span id='tooltip-"+id+"'>This element is disabled due to...</span>";
  tooltip_info.innerHTML = innerTxt;
  div_container.appendChild(tooltip_info);
}

function tooltipRemove(id){
  let tooltip_info = document.getElementById("tooltip-"+id);

  console.log("remove "+id);

  tooltip_info?.remove;
}
*/
