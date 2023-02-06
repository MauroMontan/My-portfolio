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
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
}

header {
    margin: auto;
    height: 4rem;
    width: 100%;
}

main {
    height: 100%;
    width: 90%;
    padding: 1rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

footer {
    width: 80%;
    height: 2rem;

    margin: auto;
}

@media (max-width: 768px) {
    .layout{
        height: 100vh;
        width: 100%;
    }
    main {
        width: 100%;
        height: 100%;
        align-items: unset;
        justify-content: unset;
        height: fit-content;
        margin-bottom: 3rem;

    }

    footer {
        font-size: 0.8rem;
        width: 90%;
    }

}
</style>
