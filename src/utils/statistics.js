export default {
    createEmptyStatistics() {
        return {
            type: "line",
            data: {
                labels: [],
                datasets: [{
                    label: "humidity",
                    borderColor: 'rgb(255, 99, 132)',
                    data: []
                },
                {
                    label: "noise",
                    borderColor: 'rgb(132, 99, 255)',
                    data: []
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: "Humidity and noise"
                },
                tooltips: {
                    mode: "index",
                    intersect: false
                },
                hover: {
                    mode: "nearest",
                    intersect: true
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Time"
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Value"
                            }
                        }
                    ]
                }
            }
        }
    }
}