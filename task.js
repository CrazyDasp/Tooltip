const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltip.forEach(element => {
  const div = document.createElement("div");
  div.textContent = element.getAttribute("title");
  div.classList.add("tooltip");
  
  const coords = element.getBoundingClientRect();
  div.style.left = `${coords.left}px`;
  div.style.top = `${coords.bottom}px`;
  
  element.appendChild(div);
  element.addEventListener("click", (event) => {
    
    hasTooltip.forEach(element => {
      const activeDiv = element.querySelector("div");
      if (activeDiv.classList.contains("tooltip_active") && activeDiv != div) {
        activeDiv.classList.remove("tooltip_active");
      };
    });
    
    event.preventDefault();
 
    if (div.classList.contains("tooltip_active")) {
      div.classList.remove("tooltip_active");
    } else {
      div.classList.add("tooltip_active");
    };
 
  });
});