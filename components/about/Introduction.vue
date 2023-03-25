<template>
    <section>
        <div class="village">
            <img src="~assets/img/vv-logo.png" alt="" class="logo">
            <h1>Welcome to Value Villages Web App</h1>
            <p>
                Open source, easy to use,
            </p>
            <p>
                customisable, multi-platform.
            </p>
            <p>
                A full set right out of the box for everyone!
            </p>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
    max-width: 72;
    margin: 0 auto;
    padding: 6rem 4rem;

    .village {
        width: 100%;
        text-align: center;

        .logo {
            max-width: 18%;
            height: cover;
            vertical-align: middle;
            margin-top: 1rem;
        }

        h1 {
            margin: 1.5rem 1rem;
            font-size: 2rem;
            font-weight: 900;

        }

        p {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            line-height: 1.4rem;
            font-weight: 400;
            letter-spacing: 1px;
        }
    }
}
</style>
