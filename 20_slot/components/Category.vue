<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot name="center">no 1</slot>
       
        <slot name="footer">no 2</slot>

    </div>
</template>

<script>
export default {
    name:"Category",
    props:["title"]
}
</script>

<style>
    .category{
        background-color: aquamarine;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
        height: auto;
    }
    video{
        width: 100%;
        height: auto;
    }
</style>