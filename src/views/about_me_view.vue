<script setup lang="ts"></script>

<template>
  <div class="about">
    <div class="photo">
      <div class="frame">
        <img src="../assets/about_avatar.svg" alt="about avatar" />
        <div class="quote">
        <p>
          <i class="fa-solid fa-quote-left"></i> Estudiar no es un acto de
          consumir ideas, sino de crearlas y recrearlas.
          <i class="fa-solid fa-quote-right"></i>
        </p>
        <h5>- Benito Taibo</h5>
      </div>
      <div class="music-message">
        <img src="../assets/musicMessage.png" alt="music message" />
      </div>
      <div class="playlist">
        <a
          href="https://open.spotify.com/playlist/4GMmj6OUdJ2B7vOX9fSD14?si=81dba72063684028"
          class="fa-solid fa-music"
          target="_blank"
        ></a>
      </div>
      </div>

     

     
    </div>
    <div class="content">
      <h1>Read something about me !</h1>
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

h1 {
  margin-bottom: 1rem;
  color: #4db9b4;
}

.music-message {
  position: absolute;
  top: -10rem;
  right: 5rem;
}
.music-message img {
  user-select: none;
  -moz-user-select: none;

  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 100%;
  height: 100%;
}

hr {
  margin-bottom: 1rem;
}

.photo {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quote {
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position:absolute;
  width:100%;
  background-color: #232323;
  padding: 1rem;
  border-radius: 0.5rem;
  bottom:-4rem;
  line-height: 1.2rem;
  left: 0;
}

.playlist {
  background-color: #5865f2;
  font-size: 2rem;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  position: absolute;
  top:1rem;
  left:0;
}

.playlist a {
  text-decoration: none;
}

.playlist:hover {
  background-color: #1ecc5c;
}


h5 {
  text-align: end;
}

.frame {
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: solid 0.5rem #41b883;
  display: flex;
  position: relative;
}

.frame img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.content {
  background-color: #232323;
  padding:2rem;
  width: 100%;
  border-radius: 0.5rem;
  text-align: justify;
  line-height: 2rem;
  transition: all 1s ease;
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
    gap: 4rem;
  }

  .content {
    line-height: 1.5rem;
    font-size: 0.9rem;
  }
  .quote {
    left: unset;
    bottom: -1rem;
    width: 100%;
    right: 0;
    font-size: 0.7rem;
    padding: 0.5rem;
  }
  h1 {
    font-size: 1rem;
  }
  .playlist {
    top: 1rem;
    left: unset;
    right:0rem;
    font-size: 1.5rem;
  }
  .music-message {
    display: none;
  }
}
</style>
