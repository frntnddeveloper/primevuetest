import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';

import './assets/scss/app.scss';
import StyleClass from 'primevue/styleclass';


const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Lara,
        unstyled: true,
        options: {
            prefix: 'p',
            darkModeSelector: '.my-app-dark',
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
});
app.directive('styleclass', StyleClass);

app.mount('#app');
