
  const container = document.getElementById("container");
  const resetButton = document.getElementById("but");

  function makeRows(rows, cols) {
      container.innerHTML = ''; // Limpia la cuadrícula existente
      for (let i = 0; i < (rows * cols); i++) {
          let cell = document.createElement("div");
          cell.className = "grid-item";
          container.appendChild(cell);
      }
      addHoverEffect(); // Reaplica el efecto hover después de crear la cuadrícula
  }

  function addHoverEffect() {
      const gridItems = document.querySelectorAll(".grid-item");

      gridItems.forEach(item => {
          item.addEventListener("mouseover", () => {
              item.classList.add("active");
          });
      });
  }

  resetButton.addEventListener("click", () => {
      makeRows(16, 16); // Reinicia la cuadrícula con 16x16
  });

  makeRows(16, 16); // Crea la cuadrícula inicial
