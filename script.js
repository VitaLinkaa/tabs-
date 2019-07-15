function init () {
  let tabBody = document.querySelectorAll('.tab_body');
    for (let i = 1; i < tabBody.length; i++) {
    tabBody[i].style.display = "none";
  }
}

init();

let tab = document.querySelectorAll('.tab');
    tab.forEach(element => {
        element.onclick = showTabs;
    });
  
function showTabs () {
    let data = this.getAttribute('data'); //получаем атрибут data
    console.log('data');
    let tabBody = document.querySelectorAll('.tab_body');
    for (let i = 0; i < tabBody.length; i++) {
    tabBody[i].style.display = "none";
  }
  document.querySelector(`.tab_body[data="${data}"]`).style.display = 'block';
}


  