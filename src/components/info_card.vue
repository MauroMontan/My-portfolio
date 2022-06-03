<script setup lang="ts"></script>

<template>
    <div class="code">
        <pre>
      <code>
      <small> about_me.json </small>
  <i>1 </i>   { 
  <i>2 </i>     <b>'name'</b> : 'Mauro Montaño', 
  <i>3 </i>     <b>'age'</b> : 21, 
  <i>4 </i>     <b>'Pronouns'</b> : ['He' , 'Him',], 
  <i>5 </i>     <b>'what_i_love'</b> : ['Vue' , 'Flutter','Fastapi' ], 
  <i>6 </i>   }
      </code>
    </pre>

        <a href="https://1drv.ms/b/s!AuHup4ba9wF9wEGP1_dIL8LCejeN?e=3aMK3C" target="_blank">resume</a>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

.code {
    width: 100%;
    border-radius: 0.5rem;
    position: relative;
    animation: all 1s ease;
}

small {
    opacity: 0.4;
}

pre {
    background-color: #232323;
    text-align: start;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: start;
    border-radius: 1rem;
}

.code pre code {
    font-weight: bold;
    line-height: 1.5;
    font-family: 'Source Code Pro', monospace;
}

a {
    background: #41b883;
    padding: 0.5rem;
    outline: none;
    text-decoration: none;
    border-radius: 0.5rem;
    border: none;
    position: absolute;
    bottom: -1rem;
    font-size: 1.1rem;
    left: -2rem;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
    transition: all 1s ease-out;
}

b {
    color: #6a98f0;
}

i {
    opacity: 0.3;
}

a:active {
    transform: scale(110%);
}

a:hover {
    opacity: 0.7;
}

@media (max-width: 768px) {
    .code {
        width: 100%;
    }

    a {
        left: unset;
        bottom: unset;
        top: -1rem;
        right: 1rem;
    }

    pre {
        font-size: 0.8rem;
    }
}
</style>
