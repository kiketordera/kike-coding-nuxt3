<template>
    <section>
        <div class="community">
            <div class="common">
                <img src="~/assets/img/tent-hover.svg" alt="">
                <p>From the <span>community</span> to the <span>people</span> </p>
            </div>

            <div class="villages">
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
        </div>

        <div class="image-graph">
            <img src="~/assets/img/graph-en.png" alt="">
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
        font-family: 'Raleway' !important;
        margin-bottom: 2rem;

        .common {
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

                span {
                    color: #f7941d;
                }
            }
        }

        .villages {
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
    }

    .image-graph {
        margin: 0 auto;
        max-width: 48rem;

        img {
            height: 600px;
            max-width: 100%;
        }
    }

    @media screen and (min-width:320px) and (max-width: 480px) {
        .image-graph {
            margin-left: 0;

            img {
                height: 400px;
            }
        }
    }

}
</style>
