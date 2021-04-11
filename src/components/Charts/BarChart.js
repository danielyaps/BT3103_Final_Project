import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    props: {
        chartdata: {
            type: Object,
            default: null
        },
    },
    data: function () {
        return {
            datacollection: {
                labels: [],
                datasets: [{
                    label: "Your Analytics",
                    backgroundColor: 'blue',
                    data: []
                }]
            },
            options: {
                scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
                },
                legend: { display: false },
                title: {
                display: true,
                text: 'Analytics!'
                },
                responsive: true,
                maintainAspectRatio: false
            },
        }
    },
    methods: {
        process: function (){
            for (const [key,value] of Object.entries(this.chartdata)) {
                this.datacollection.labels.push(key);
                this.datacollection.datasets[0].data.push(value);
            }
        },
        fetchItems: function () {
            this.process();
            this.renderChart(this.datacollection, this.options)
        }
    },
    created () {
        this.fetchItems()
    }
}