import VueSweetaler2 from 'vue-sweetalert2';
import { createApp } from 'vue';
import Vuelidate from 'vuelidate';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';

/* add icons to the library */
library.add(faUserPlus, faUserEdit, faTrash);

createApp(App).use(router, VueSweetaler2).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
