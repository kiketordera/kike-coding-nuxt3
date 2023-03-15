<template>
    <section>
        <div class="community">
            <div class="title">
                <img src="~/assets/svg/hunt.svg" alt="">
                <p>From the <span>community</span> to the <span>people</span> </p>
            </div>

            <div class="info">
                <p>
                    You can have different locations (Villages), and you can also have custom services created by you in
                    every
                    village (like a barbershop, workshop, farm… there are a lot of icons all ready for you as samples or you
                    can
                    upload yours!).
                </p>
                <p>
                    In every single service, you will have your inventory for materials and tools, your video courses to
                    educate, the records of manufactured products, and the data digitalized.
                </p>
                <p>
                    Also, you will be able to make deliveries to other services, track the items, and make payments.
                </p>
            </div>

            <div class="structure">
                <img src="~/assets/img/graph.png" alt="">
            </div>
            <p class="content">
                To serve the different villages and communities, there are 6 languages included, what gives you a huge
                coverage over the world map:
            </p>
            <div class="map">
                <img src="~/assets/svg/world-map.svg" alt="">
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
    width: 100%;
    max-width: 56rem;
    margin: 0 auto;
    padding: 6rem 0rem;

    .community {
        margin-bottom: 2rem;
        font-weight: 400;

        .title {
            display: flex;
            justify-content: center;
            justify-items: center;
            padding-bottom: 1rem;
            align-items: center;

            img {
                height: 60px;
            }

            p {
                font-size: 2.4rem;
                text-align: center;
                padding-left: 1.5rem;
                font-family: "Raleway" !important;

                span {
                    color: #f7941d;
                }
            }
        }

        .info {
            font-family: 'Raleway' !important;
            margin: 0 auto;
            width: 100%;
            max-width: 48rem;

            p {
                align-items: center;
                text-align: justify;
                font-size: 20px;
                padding-bottom: 2rem;
                padding-top: 0.5rem;
                width: 95%;
            }
        }

        .structure,
        .map {
            margin: 0 auto;
            max-width: 48rem;
            padding-top: 1rem;

            img {
                height: auto;
                max-width: 100%;

            }
        }

        .map {

            width: 100%;
            max-width: 900px;
            padding-top: 6rem;
            margin-top: -80px;
            margin-bottom: 10px;
        }

        @media screen and (min-width:320px) and (max-width: 480px) {
            .structure {
                margin-left: 0;

                img {
                    height: 400px;
                }
            }
        }

        .content {
            width: 85%;
            text-align: start;
            margin: 0 auto;
            padding: 1rem 0rem;
            letter-spacing: 1px;
            font-size: 1rem;
            font-weight: 500;
        }

    }
}
</style>
