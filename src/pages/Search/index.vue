<template>
    <div>
       params:  {{$route.params.keyword}}
       <br>
        query:{{$route.query.k}}
    </div>
</template>

<script>
    export default {
        name: "Search"       
    }
</script>

<style lang="less" scoped>

</style>