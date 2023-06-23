<template>
    <div class="container">
        <Category>
            <template v-slot="{foods}">
                <ul>
                <li v-for="list, index in foods" :key="index">{{ list }}</li>
            </ul>    
                
            </template>
           
        </Category>

        <Category>
            <template v-slot="{foods}">
            
            <ul>
            <li v-for="list, index in foods" :key="index">{{ list }}</li>
        </ul>    
            
        </template>
        </Category>

        <Category>
            <template v-slot="{foods}">
            
            <ul>
            <li v-for="list, index in foods" :key="index">{{ list }}</li>
        </ul>    
            
        </template>
        </Category>

    </div>
</template>

<script>
import Category from './components/Category.vue'


export default {
    name: "App",
    components: {
        Category
    }
    
}   
</script>


<style>
.container {
    display: flex;
    justify-content: space-around;
}
a {
    text-align: center;
}
</style>




