function openTab(evt, tabName) {
   
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
    }
  
   
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }
  