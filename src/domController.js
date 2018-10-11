function updateDOM(identicon) {
  clearNodes()
  const backgroundColor = `rgb(${identicon.colorValue[0]}, ${identicon.colorValue[1]}, ${identicon.colorValue[2]})`
  const nodes = document.querySelector('#identicon').children

  for(let i = 0; i < nodes.length; i++){
    if (identicon.identiconArray[i]){
      nodes[i].style.backgroundColor = identicon.backgroundColor
    }
  }

}

function clearNodes(){
  const nodes = document.querySelector('#identicon').children
  for(let i = 0; i < nodes.length; i++){
    nodes[i].style.backgroundColor = "white";

  }

}
