function handleMaterialChange(){
  var other=document.getElementById('fenceMaterialOther');
  var sel=document.getElementById('fenceMaterial');
  if(!other||!sel)return;
  if(sel.value==='其他'){other.style.display='';}
  else{other.style.display='none';other.value='';}
}
function handleMaterialOtherInput(){
  var sel=document.getElementById('fenceMaterial');
  if(sel)sel.value='其他';
}
