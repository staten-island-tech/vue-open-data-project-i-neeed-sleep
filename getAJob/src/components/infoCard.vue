<template>
    <router-link :to="detailPage" class="card">
        <div>
            <h1>{{ job.civil_service_title }}</h1>
            <h2>{{ job.agency }}</h2>
        </div>
    </router-link>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    job: {
        type: Object,
        required: true,
    },
})

const detailPage = computed (()=>{
    return `/info/${props.job.job_id}`
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&family=Grenze+Gotisch:wght@100..900&display=swap');
div {
    width: 25vw;
    max-width: 300px;
    height: 26vw;
    max-height: 312px;
    background-color: #E0E2DB;
    color: #080705;
    font-family: "Grenze Gotisch", serif;
    margin: 5vw;
    padding: 2vw;
}
h1{
    font-size: 2vw;
}
h2{
    font-size: 1.5vw;
}
</style>