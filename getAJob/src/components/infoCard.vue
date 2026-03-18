<template>
    <router-link :to="thingPath" class="card">
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

const thingPath = computed (()=>{
    return `/info/${props.job.job_id}`
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&family=Grenze+Gotisch:wght@100..900&display=swap');div {
    width: 40%;
    height: 40vh;
    background-color: #E0E2DB;
    color: #080705;
    text-align: center;
    font-family: "Grenze Gotisch", serif;
    margin: 5%;
    padding-top: 5%;
}
h1{
    font-size: 230%;
}
</style>