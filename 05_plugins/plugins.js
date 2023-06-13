export default {
    install(Vue){
        Vue.directive('big10',function(el,binding){
            // console.log('v-big10')
            // console.log(binding)
            // console.log(el.value)
            // console.log(binding.value)
            el.innerText = binding.value * 10
        })
    }
}