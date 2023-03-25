<template>
    <section>
        <div class="background">
            <img src="~assets/img/first-screen.png" alt="">
            <img src="~assets/img/front.png" alt="">
            <img src="~assets/img/third-screen.png" alt="">
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
section {
    width: 100%;
    max-width: 72rem;
    margin: 0 auto;
    padding: 0.6rem 0rem;

    .background {
        display: flex;
        max-width: 48rem;
        vertical-align: top;
        background-position: center;

        img {
            width: 100%;
            height: 65vh;
        }
    }
}
</style>
