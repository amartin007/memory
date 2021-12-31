import { createApp } from 'vue';
import App from './App.vue';
import './styles/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCat,
  faCrow,
  faDog,
  faDove,
  faDragon,
  faFeather,
  faFeatherAlt,
  faFish,
  faFrog,
  faHippo,
  faHorse,
  faHorseHead,
  faKiwiBird,
  faOtter,
  faPaw,
  faSpider
} from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-brands-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add([
  faCat,
  faCrow,
  faDog,
  faDove,
  faDragon,
  faFeatherAlt,
  faFeather,
  faFeatherAlt,
  faFish,
  faFrog,
  faHippo,
  faHorse,
  faHorseHead,
  faKiwiBird,
  faOtter,
  faPaw,
  faSpider
]);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
