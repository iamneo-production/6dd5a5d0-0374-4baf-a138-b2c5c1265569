import React from "react";

import { Pie } from "react-chartjs-2";

import "./PieChart.css"; 

const PieChart = ({ data }) => {

    let obj ={
        "ONLINE" : 0,
        "POC":0,
        "INTERNATIONAL":0,
        "ATM":0,
        "TAPnPAY":0
    };
    data.forEach(tran=>obj[tran.type] += tran.amount);

    const labels = Object.keys(obj);

    const amounts = Object.values(obj);

    const chartData = {
        labels: labels,

        datasets: [
            {
                data: amounts,

                backgroundColor: [
                    "rgba(255, 99, 132, 0.9)",

                    "rgba(54, 162, 235, 0.9)",

                    "rgba(255, 206, 86, 0.9)",

                    "rgba(238, 130, 238, 0.9)",

                    "rgba(60, 179, 113, 0.8)",
                ],
            },
        ],
    };

    return (
        <div className="pie-chart">
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;
