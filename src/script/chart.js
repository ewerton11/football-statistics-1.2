import Chart from "chart.js/auto"

const c1 = new Chart(document.getElementById("firstCircle"), {
  type: "doughnut",
  data: {
    labels: "",
    datasets: [
      {
        data: [100],
        backgroundColor: ["rgb(8, 18, 58)"],
      },
    ],
  },
  options: {
    responsive: true,
    hover: { mode: null },
    borderWidth: 0,
    cutout: "90%",
  },
})

const c2 = new Chart(document.getElementById("secondCircle"), {
  type: "doughnut",
  data: {
    labels: "",
    datasets: [
      {
        data: [100],
        backgroundColor: ["rgb(8, 18, 58)"],
      },
    ],
  },
  options: {
    responsive: true,
    hover: { mode: null },
    borderWidth: 0,
    cutout: "90%",
  },
})

const c3 = new Chart(document.getElementById("thirdCircle"), {
  type: "doughnut",
  data: {
    labels: "",
    datasets: [
      {
        data: [100],
        backgroundColor: ["rgb(8, 18, 58)"],
      },
    ],
  },
  options: {
    responsive: true,
    hover: { mode: null },
    borderWidth: 0,
    cutout: "90%",
  },
})

const tableSlide = new Chart(document.getElementById("chart-t1"), {
  type: "bar",
  data: {
    labels: [
      "1° rodada",
      "2° rodada",
      "3° rodada",
      "4° rodada",
      "5° rodada",
      "6° rodada",
      "7° rodada",
      "8° rodada",
      "9° rodada",
      "10° rodada",
    ],
    datasets: [
      {
        label: "",
        backgroundColor: "rgb(8, 18, 58, .10)",
        borderColor: "rgb(8, 18, 58)",
        borderWidth: 3,
        categoryPercentage: 0.3,
        data: [1, 1, 5, 2, 0, 3, 4, 0, 2, 5],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
        },
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },
  },
})
