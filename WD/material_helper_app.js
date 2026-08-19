function handleMaterialChange(){
  var other=document.getElementById('addFenceMaterialOther');
  var sel=document.getElementById('addFenceMaterial');
  if(!other||!sel)return;
  if(sel.value==='其他'){other.style.display='';}
  else{other.style.display='none';other.value='';}
}
function handleMaterialOtherInputAPP(){
  var sel=document.getElementById('addFenceMaterial');
  if(sel)sel.value='其他';
}
