<template>
    <section>
        <div class="system">
            <div class="title">
                <img src="~/assets/svg/youtube.svg" alt="">
                <p>
                    <span>Step</span> by <span>step</span> guided <span>tutorials</span>
                </p>
            </div>
            <div class="info">
                <p>
                    The core of the app is that the knowledge is built into video-tutorials. It has been proven that in lack
                    of presence learning,
                    video-tutorials are the best self-teaching resource. Even nowadays in universities, they impart real
                    courses focused on
                    video lessons,the so-called “flip-teaching” with MOOCs courses from top universities like Harvard,
                    Cambridge or MIT.
                </p>
                <p>
                    Another key to this solution is the scalability of the knowledge resource, once it is developed and
                    integrated in the system.
                    This allows us to increase the video library over time.
                </p>
                <p>
                    Designed to guide step by step and make a follow up on the process,
                    giving also tips and growing security for the user to use the app.
                </p>
            </div>
            <div class="box-img">
                <div class="details">
                    <img src="~assets/img/system.png" alt="">
                    <p>
                        Create your own video courses and introduce them into the system.
                    </p>
                </div>
                <div class="details">
                    <img src="~assets/img/vikapu.png" alt="">
                    <p>
                        Introduce the different steps guiding all the process
                    </p>
                </div>
                <div class="details">
                    <img src="~assets/img/rings.png" alt="">
                    <p>
                        See the records of the different products made out of the video courses
                    </p>
                </div>
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

    .system {
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
                font-weight: 900;

                span {
                    color: #CF1F26;
                }

            }
        }

        .info {
            font-family: 'Raleway' !important;
            margin: 0 auto;
            width: 100%;
            max-width: 48rem;
            padding: 0rem 2rem;

            p {
                align-items: center;
                text-align: justify;
                font-size: 20px;
                padding-bottom: 2rem;
                padding-top: 0.5rem;
                width: 95%;
            }
        }

        .box-img {
            display: flex;
            flex-direction: row;
            gap: 2;
            margin: 0 auto;
            padding-top: 2.5rem;
            background: linear-gradient(#fefefe 0%, #e9e9e9 100%);
            padding: 2.5rem 0rem 2rem 2rem;

            .details {
                align-items: center;

                img {
                    height: auto;
                    max-width: 70%;
                    margin: 0rem 2rem;
                }

                p {
                    text-align: center;
                    margin-top: 1rem;
                    font-size: 1.2rem;
                    letter-spacing: 3;
                }
            }

        }

    }
}
</style>
