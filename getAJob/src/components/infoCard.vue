<template>
    <router-link :to="thingPath" class="card">
        <div>
            <h2>{{ job.civil_service_title }}</h2>
            <h3>{{ job.agency }}</h3>
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
    return `/thing/${props.job.job_id}`
})
</script>

<style scoped>
div {
    width: 30vw;
    height: 35vw;
    background-color: #9da07d;
    color: #000000;
    text-align: center;
    
}
</style>