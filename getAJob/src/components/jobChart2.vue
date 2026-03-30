<template>
    <Pie 
        :options="chartOptions"
        :data="chartData"
    />
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: { Pie },
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
                backgroundColor: ['#080705', '#362023'],
                data: this.chartInfo
                }
            ]
        },
        chartOptions:{
            responsive: true,
            maintainAspectRatio: false,
            plugins:{
                title: {
                    display: true,
                    text: 'Posting Type Jobs'
                }
            }
        }
    }
  }
}

</script>

<style scoped>

</style>