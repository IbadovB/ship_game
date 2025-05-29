function shipButton(event) {
    const button = event.currentTarget;
  
    const bomb = button.querySelector(".fa-bomb");
    if (bomb) {
      bomb.style.display = "block";
    }
  
    if (button.classList.contains("bosXana")) {
      button.classList.add("clicked");
    }
  
    button.disabled = true;
  }