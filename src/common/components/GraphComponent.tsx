import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Graph = (props: any) => {
  const { data, paginationData } = props;
  const [chartData, setChartData] = useState<any>({ labels: [], datasets: [] });

  useEffect(() => {
    if (!data) return;

    const chartData: any = {
      labels: [],
      datasets: [
        {
          fill: "start",
          label: "Market Price",
          data: [],
          borderColor: "#FFB600",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, "rgba(255, 182, 0, 100)");
            gradient.addColorStop(0.25, "rgba(255, 182, 0, 100)");
            gradient.addColorStop(1, "white");
            return gradient;
          },
          lineTension: 0.2,
        },
      ],
    };

    data.forEach((entry, i) => {
      if (
        paginationData &&
        paginationData?.total_entries >
          paginationData?.limit * paginationData?.page &&
        data.length === i + 1
      )
        return;
      const date = moment(entry.date).format("MMM DD");
      chartData.labels.push(date);
      chartData.datasets[0].data.push(Number(entry.cr_rate));
    });
    chartData.labels = chartData.labels;
    chartData.datasets = chartData.datasets;

    setChartData(chartData);
  }, [data]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },

      //  title: {
      //     display: true,
      //     text: 'Chart.js Line Chart',
      //  },
    },
    scales: {
      x: {
        reverse: true,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <Line data={chartData} options={options} />
    </>
  );
};

export default Graph;
