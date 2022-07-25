<template>
    <div>
        <TypeNav/>
        <ListContainer/>
        <Command/>
        <Rank/>
        <Like/>
        <Floor/>
        <Brand/>
    </div>
</template>

<script>
    import ListContainer from './ListContainer'
    import Command from './Command'
    import Rank from './Rank'
    import Floor from './Floor'
    import Like from './Like'
    import Brand from './Brand'
    export default {
        name: "Home",
        components: {
            ListContainer,
            Command,
            Rank,
            Like,
            Floor,
            Brand
        }
    }
</script>

<style lang="less" scoped>

</style>