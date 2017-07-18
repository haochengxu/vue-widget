<template>
    <img ref="img" :src="imgUrl" class="scale-image">
</template>

<script>
export default {
    props: {
        imgUrl: String
    },
    mounted() {
        console.log(this.$refs.img.width)
        console.log(this.$refs.img.height)
        console.log(this.$refs.img.width)
    }
 }
</script>

<style>
.scale-image {
    transition: 500ms ease-in-out;   
}
.scale-image:hover {
    transform: scale(1.5, 1.5);
    transition: 500ms ease-in-out;   
}
</style>
