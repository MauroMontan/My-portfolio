<script setup lang="ts"></script>

<template>
  <div class="code">
    <pre>
      <code>
      <small> about_me.json </small>
  <i>1 </i>   { 
  <i>2 </i>       <b>'name'</b> : 'Mauro Montaño', 
  <i>3 </i>       <b>'age'</b> : 21, 
  <i>4 </i>       <b>'what_i_love'</b> : ['vue' , 'flutter','fastapi' ], 
  <i>5 </i>   }
      </code>
    </pre>

    <button>resume</button>
  </div>
</template>
<style scoped>
.code {
  width: 85%;
  border-radius: 1rem;
  position: relative;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
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
  line-height: 2.4;
}

button {
  background: #41b883;
  padding: 0.5rem;
  outline: none;
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

button:active {
  transform: scale(110%);
}

button:hover {
  opacity: 0.7;
}
@media (max-width: 768px) {
  .code {
    width: 100%;
  }
  button {
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
