import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VUE_APP_API_URL + '/';

axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/json';

axios.interceptors.request.use(function (config) {
    return config;
});

export default axios 