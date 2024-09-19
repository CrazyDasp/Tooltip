const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltip.forEach(element => {
  const div = document.createElement("div");
  div.textContent = element.getAttribute("title");
  div.classList.toggle("tooltip");
  
  const coords = element.getBoundingClientRect();
  div.style.left = `${coords.left}px`;
  div.style.top = `${coords.bottom}px`;
  
  element.insertAdjacentElement("afterend", div);

  element.addEventListener("click", (event) => {
    
    const allDiv = Array.from(document.querySelectorAll("div"));

    event.preventDefault();
    
    allDiv.forEach(curDiv => {
      curDiv.classList.remove("tooltip_active");
    });

    div.classList.toggle("tooltip_active");
 
  });
});