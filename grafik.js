const grafikBox = document.querySelector("#grafikBox");
const select = document.querySelector("#select");

select.addEventListener("change", function (e) {
  const oldCnvas = grafikBox.querySelector("canvas");
  oldCnvas.remove();

  const newCanvas = document.createElement("canvas");
  newCanvas.id = e.target.value;
  // console.log(e.target.value);

  grafikBox.appendChild(newCanvas);

  // const canvas = document.querySelector("#grafik");

  const pilihan = e.target.value;

  if (pilihan === "grafikSatu") {
    new Chart(newCanvas, {
      type: "bar",
      data: {
        labels: ["A", "B", "C"],
        datasets: [
          {
            label: "jumlah",
            data: [10, 20, 30],
          },
        ],
      },
    });
    return;
  }

  if (pilihan === "grafikDua") {
    new Chart(newCanvas, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  }

  if (pilihan === "grafikTiga") {
    const labels = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    new Chart(newCanvas, {
      type: "line",
      data: data,
    });
  }
});
