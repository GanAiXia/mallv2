<template>
    <div>
        <TypeNav/>
        <ListContainer/>
        <Command/>
        <Rank/>
        <Like/>
        <Floor v-for="(floor, index) in floorList" key="floor.id" :floorList="floor"/>
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
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        components: {
            ListContainer,
            Command,
            Rank,
            Like,
            Floor,
            Brand
        },
        mounted() {
            this.$store.dispatch("getFloorList")
        },
        computed: {
            ...mapState({
                floorList: state => state.home.floorList
            })
        },
    }
</script>

<style lang="less" scoped>

</style>