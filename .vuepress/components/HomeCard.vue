<template>
    <div class="home-card" @click="handleClick">
        {{tt(text)}}
    </div>
</template>
<script>
    export default {
        props:{
            text: String
        },
        methods:{
            handleClick(){
                window.open(`/${this.text}/`)
            },
            tt(key){
                return this.t(`card.${key}`)
            }
        },
        mounted(){
            console.log(this)
        }
    }
</script>
<style lang="stylus">
    .home-card
        flex-grow: 1;
        flex-basis: 30%;
        max-width: 30%;
        border: 1px solid #ebeef5
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer
        margin-bottom: 20px
</style>