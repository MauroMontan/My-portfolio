<script setup lang="ts">
import { reactive } from "vue";

const contactData = reactive({
    email: "",
    name: "",
    message: "",
});

const contactMe = async (): Promise<void> => {
    const request = await fetch(
        "https://formsubmit.co/ajax/mauromiguelanastaciomontano@gmail.com",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(contactData),
        }
    );
    const data = await request.json();

    console.log(data);
};
</script>

<template>
    <div class="form-container">
        <h3>Contact me</h3>
        <div class="form">
            <input type="email" v-model="contactData.email" name="email" placeholder="e-mail" />

            <input type="text" name="name" v-model="contactData.name" placeholder="Your name" />
            <textarea name="message" placeholder="pleas write your message" cols="30" v-model="contactData.message"
                rows="6"></textarea>
        </div>
        <div class="actions">
            <button @click="contactMe">send</button>
        </div>
    </div>
</template>

<style scoped>
.form-container {
    background-color: #232323;
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    width: 100%;
    height: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.container .form {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: space-evenly;
}

input {
    height: 3rem;
    outline: none;
    border: none;
    text-align: center;
    width: 100%;
    background-color: #191919;
    color: #5f8dec;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
}

textarea {
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);

    background-color: #191919;
    outline: none;
    width: 90%;
    margin: 0 auto;
    border: none;
    padding: 1rem;
    color: #5f8dec;
    font-size: 1.2rem;
    resize: none;
    border-radius: 0.5rem;
}

.actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
}

button {
    padding: 0.5rem;
    color: #191919;
    background-color: #41b883;
    border-radius: 0.5rem;
    outline: none;
    border: none;

    font-weight: bold;
    font-size: 1.2rem;
}

@media (max-width: 768px) {
   
    input {
        font-size: 0.9rem;
    }
}
</style>
