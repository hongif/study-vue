<template>
    <div>
        <top-banner/>
        <main-header/>
        <slide-banner/>
        <stay/>
        <trip/>
        <additional-services/>
        <tip/>
        <info/>
        <main-footer/>
    </div>
</template>

<script>
    import AdditionalServices from "./main/AdditionalServices";
    import MainFooter from "./main/MainFooter";
    import MainHeader from "./main/MainHeader";
    import Info from "./main/Info";
    import SlideBanner from "./main/SlideBanner";
    import Stay from "./main/Stay";
    import Tip from "./main/Tip";
    import TopBanner from "./main/TopBanner";
    import Trip from "./main/Trip";

    export default {
        name: "Main",
        components: {
            AdditionalServices,
            MainFooter,
            MainHeader,
            Info,
            SlideBanner,
            Stay,
            Tip,
            TopBanner,
            Trip,
        }
    }
</script>

<style scoped>

</style>