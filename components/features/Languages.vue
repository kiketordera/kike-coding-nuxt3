<template>
    <section>
        <div class="card">
            <div class="card-items">
                <h4 class="golang">
                    Golang
                </h4>
                <p>
                    This is the programing language where all the technology is based. It is open-source, designed
                    specifically for web development and developed and empowered by Google
                </p>
            </div>
            <div class="card-items">
                <h4 class="docker">
                    Docker
                </h4>
                <p>
                    This is the container where we install al the software layers and it´s all wat we need.
                    No dependencies vastly reduces the maintenance and simplifies the deployment
                </p>
            </div>

            <div class="card-items">
                <h4 class="raspbian">
                    Raspbian
                </h4>
                <p>
                    For the remote areas without connection, this is the Operative System that controls the hardware.
                    It will run the app non-stop and restart automatically the software is disconnected from the power.
                </p>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
    max-width: 72rem;
    width: auto;
    margin: 0 auto;
    padding: 1rem 0rem;

    .card {
        display: flex;
        flex-direction: row;
        gap: 3.6rem;
        padding: 1rem 1rem;

        .card-items {
            margin: 2rem 0rem;
            letter-spacing: 1px;

            h4 {
                font-size: 1.7rem;
                text-align: center;
                margin-bottom: 5px;
                font-weight: 400;

            }

            .golang {
                color: #6AD7E5;

            }

            .docker {
                color: #00A3D2;
            }

            .raspbian {
                color: #CF1F26;
            }

            p {
                text-align: justify;

            }
        }
    }
}
</style>
