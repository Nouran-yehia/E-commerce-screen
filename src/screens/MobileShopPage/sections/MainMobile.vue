<template>
    <div class="shop-page">
        <div class="div-3">
            <Breadcrumb />
            <Header />
            <Frame />
            <FrameWrapper />
            <MobilePagination />
        </div>
    </div>
</template>
<script>
import Breadcrumb from "./Breadcrumb.vue";
import Frame from "./Frame.vue";
import FrameWrapper from "./FrameWrapper.vue";
import Header from "./Header.vue";
import MobilePagination from "./Pagination.vue";

export default {
    name: "MainMobile",
    components: {
        Breadcrumb,
        Frame,
        FrameWrapper,
        Header,
        MobilePagination
    }
};
</script>
