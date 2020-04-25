import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#03a9f4',
        secondary: '#e91e63',
        accent: '#4caf50',
        error: '#f44336',
        warning: '#ff9800',
        info: '#607d8b',
        success: '#8bc34a',
      },
    },
  },
});
