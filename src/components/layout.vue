<script setup lang="ts"></script>

<template>
    <div class="layout">
        <header>
            <slot name="header"></slot>
        </header>

        <main>
            <slot name="default"></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>
.layout {
    background-color: #191919;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url("../assets/background.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

header {
    height: 4rem;
    width: 100%;
    background: #232323;
}

main {
    height: 100%;
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    overflow: auto;
}

footer {
    width: 80%;
    height: 2rem;

    margin: auto;
}

@media (max-width: 768px) {
    .layout {
        background-image: url("../assets/mobile_bg.svg");
    }

    main {
        width: 100%;
        align-items: unset;
        justify-content: unset;
    }

    footer {
        font-size: 0.8rem;
        width: 90%;
    }

    header {
        background-color: transparent;
    }
}
</style>
