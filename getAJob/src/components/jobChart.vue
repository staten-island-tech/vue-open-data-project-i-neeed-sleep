<template>
    <Bar 
        id=""
        :options="chartOptions"
        :data="chartData"
    />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
    jobs: {
        type: Object,
        required: true,
    },
})

const labels = ref([])


jobs.forEach(job => {
    if(job.title_classification && labels.include(job.title_classification)===false){
        labels.value.push({ [job.title_classification] : 1});
    }
    if(job.title_classification && labels.include(job.title_classification)===true){
        labels.value[job.title_classification]++
    }
});

export default {
    name: 'jobChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets: [ 
                    { 
                        label: 'Jobs that Classify',
                        backgroundColor: '#080705',
                        data: [],

                    } ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    Title: {
                        display: true,
                        text: 'E'
                    }
                }
            }
        }
    }
}
</script>

<style scoped>

</style>