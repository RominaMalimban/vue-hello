// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
const { createApp } = Vue;

createApp({
    data() {
      return {
        title : "Hello world!",
        myClass : "changeColor",
        image : "img/boolean_img.jpg",
        classImg : "sizeImg"
      }
    }
  }).mount('#app');