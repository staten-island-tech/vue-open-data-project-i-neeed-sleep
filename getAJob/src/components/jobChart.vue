<template>
    <Bar 
        id="stats"
        :options="chartOptions"
        :data="chartData"
    />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'jobChart',
    components: { Bar },
    props: {
        chartInfo: {
            type: Object,
            required: true,
        },
        chartLabels: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            chartData: {
                labels: this.chartLabels,
                datasets: [ 
                    { 
                        label: 'Jobs that Under Classification',
                        backgroundColor: '#080705',
                        data: this.chartInfo,
                    } ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    }
}
</script>

<style scoped>

</style>