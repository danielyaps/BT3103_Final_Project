import {Bar} from 'vue-chartjs'

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
                    backgroundColor: [],
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
                text: '',
                },
                responsive: true,
                maintainAspectRatio: false
            },
        }
    },
    methods: {
        process: function (){
            setTimeout(() => {
                Object.values(this.chartdata.label).forEach(val => {
                    this.datacollection.labels.push(val);
                    console.log(val);
                });
                Object.values(this.chartdata.data).forEach(val => {
                    this.datacollection.datasets[0].data.push(val);
                    console.log(val);
                });
                this.options.title.text = this.chartdata.name;
                this.datacollection.datasets[0].backgroundColor = this.chartdata.color;
            }, 1000);

        },
        fetchItems: function () {
            this.process();
            setTimeout(()=> {
                this.renderChart(this.datacollection, this.options);
            }, 1000);
            
        }
    },
    mounted() {
        this.fetchItems()
    }
}