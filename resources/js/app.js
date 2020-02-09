require('./bootstrap');

import Vue from 'vue';

import Notifications from 'vue-notification';
Vue.use(Notifications);

Vue.component('error-handling', require('./ErrorHandling').default);
Vue.component('vue-footer', require('./Footer').default);

let app = new Vue({
    el: '#app',
});

window.axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        // if application return error 400
        if (error.response.status === 400 && error.response.data.message)
        {
            let errors = JSON.parse(error.response.data.message);
            let errors_list = '';
            for (let ei in errors)
                for (let i in errors[ei])
                    errors_list += '<li>'+errors[ei][i]+'</li>';

            app.$notify({
                group: 'alert',
                title: 'Errors..!',
                text: errors_list,
                type: 'error',
                duration: 5000,
                speed: 1000,
            });
        }
    },
);
