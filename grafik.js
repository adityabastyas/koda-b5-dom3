const ctx = document.querySelector("#aditChart");

const dataDropDown = [
  {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes 1",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  {
    labels: ["Orenge", "Purple", "Green", "Yellow", "Blue", "Red"],
    datasets: [
      {
        label: "# of Votes 2",
        data: [21, 15, 3, 7, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  {
    labels: ["Black", "red", "orange", "Green", "blue", "Purple"],
    datasets: [
      {
        label: "# of Votes 3",
        data: [18, 22, 7, 5, 6, 3],
        borderWidth: 1,
      },
    ],
  },
];

let dataChoose = dataDropDown[0];

let chart = new Chart(ctx, {
  type: "bar",
  data: dataChoose,
});

const buttonDropDwon = document.querySelector("#select");

buttonDropDwon.addEventListener("change", (e) => {
  e.preventDefault();
  dataChoose = dataDropDown[buttonDropDwon.value];

  chart.data = dataChoose;
  chart.update();
});
