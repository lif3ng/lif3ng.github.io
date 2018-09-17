<template>
    <div>
        {{JSON.stringify(versions)}}
        <template v-for="(value,index) in versions">
            <div class="version-item" v-for="(version,name) in value">
                <span>{{name}}</span>
                <span>{{version}}</span>
            </div>
        </template>
    </div>
</template>
<script>
export default{
    data(){
        return {
            versions: this.$root.$page.frontmatter.versions || {}
        }
    },
    mounted(){
        console.log(this)
    }
}
</script>
<style lang="stylus">
.version-item
  border: 1px solid #ccc
  border-radius: 5px
  display: inline-block
  background: linear-gradient(to right, #aaa 50% , #fff 51% )
  + .version-item 
    margin-left 10px
  >span
    display: inline-block
    height: 100%
    text-align: center
    width: 60px
    &:first-child
      color: #fff
    
</style>