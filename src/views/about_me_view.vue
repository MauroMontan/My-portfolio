<script setup lang="ts"></script>

<template>
  <div class="about">
    <div class="photo">
      <div class="frame">
        <img src="../assets/about_avatar.svg" alt="about avatar" />
      </div>
    </div>
    <div class="content">
      <p>
        Hi, I´m Mauro Montaño, a self-taught full-stack developer and linux user
        from México . i have been developing software since 2020, im fascinated
        about creating and making my ideas alive with VUE js, FastApi, express
        js and FLutter, i´m always learning something new and reinforcing what I
        already know , I´m not afraid of design and CSS anymore
        <i class="fa-solid fa-face-grin-beam"></i> . I am interested in open
        source.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  height: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
}

.photo {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.frame {
  height: 60%;
  width: 60%;
  border-radius: 50%;
  border: solid 0.5rem #41b883;
  overflow: hidden;
}

.frame img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.content {
  background-color: #232323;
  padding: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  text-align: justify;
  line-height: 2rem;
}
.content p {
  font-weight: 700;
  background-image: -webkit-linear-gradient(30deg, #85ffbd 0%, #fffb7d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
  .about {
    grid-template-columns: repeat(1, 1fr);
  }
  .frame {
    width: 50%;
    height: 70%;
  }
  .content {
    line-height: 1.5rem;
  }
}
</style>
