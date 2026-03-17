<template>
    <div>
        <h2>something something {{ thing.name }}</h2>
        <img :src="thing.img">
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const thing = ref({})


async function getItem(id) {
  try{
    const response = await fetch(`link/${id}`)
    const data = await response.json()
    thing.value = data.results
  }catch(error){
    console.log(error)
  }
}
onMounted(function(){
    getItem(route.params.id)
})
watch(
    () => route.params.id,
    function (id){
        getItem(id)
    },
)
</script>

<style scoped>

</style>