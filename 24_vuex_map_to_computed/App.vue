<template>
    <div>
        <Count></Count>
    </div>
</template>

<script>
import Count from './components/Count.vue'


export default {
    name: "App",
    components: {
        Count
    },
    mounted() {
        console.log("app",this)
        console.log("app-store", this.$store)
    }
}   
</script>





