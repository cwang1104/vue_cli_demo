<template>
    <ul>
        <li v-for="m in messageList" :key="m.id">
            <!-- 携带params参数，to的字符串写法 -->
            <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp; -->


            <!-- 携带params参数，to的对象写法 -->
            <router-link :to="{
                // path:'/home/message/detail',  params参数不能使用path，只能使用name
                name:'detail',
                params:{
                    id:m.id,
                    title:m.title
                }
            }">
                {{ m.title }}
            </router-link>&nbsp;&nbsp;
        </li>
    </ul>
    <hr>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
            ]
        }
    }

}
</script>

<style></style>

