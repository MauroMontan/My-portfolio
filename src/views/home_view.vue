<script setup lang="ts">
import { InfoCard } from "../components/components";
</script>

<template>
    <div class="container">
        <div class="content">
            <img src="../assets/avatar.svg" alt="" />

            <div class="intro">
                <h4>Hello! I am</h4>
                <h1>Mauro Montaño</h1>

                <h3>a full stack developer.</h3>
                <div class="social">
                    <i>
                        <a class="fa-brands fa-github" href="https://github.com/MauroMontan" target="_blank"></a>
                    </i>
                    <i>
                        <a class="fa-brands fa-instagram" href="https://www.instagram.com/mauro_montano_/"
                            target="_blank"></a>
                    </i>
                </div>
            </div>
        </div>

        <div class="info">
            <InfoCard />
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    display: grid;
    gap: 4rem;
    padding: 1rem;
    grid-template-columns: repeat(2, 1fr);
}

.social {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: start;
}

.social i {
    font-size: 1.5rem;
    margin-right: 2rem;
}

.social i a {
    text-decoration: none;
}

.social i a:hover {
    color: #41b883;
}

.content {
    display: flex;
    align-items: center;

    justify-content: center;
}

.content .intro {
    display: flex;
    justify-content: center;
    text-align: left;
    flex-direction: column;
}

img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    object-position: center;
}

.content h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
    background-image: -webkit-linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.info {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content:center;
}

@media (max-width: 768px) {
    .container {
        width: 100%;
        font-size: 0.8rem;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
    }

    .info {
        justify-content: center;
    }

    .content h1 {
        font-size: 2rem;
    }

    img {
        width: 50%;
        height: 50%;
    }
}
</style>
