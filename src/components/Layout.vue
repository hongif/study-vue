<template>
    <div>
        <top-banner/>
        <main-header/>
        <router-view/>
        <main-footer/>
    </div>
</template>

<script>
    import MainFooter from "./layout/MainFooter";
    import MainHeader from "./layout/MainHeader";
    import TopBanner from "./layout/TopBanner";

    export default {
        name: "Layout",
        components: {
            MainFooter,
            MainHeader,
            TopBanner,
        }
    }
</script>

<style scoped>

</style>