<template>
    <div class="content">
        <div class="title m-b-md">
            Vue.js Global Error Handling
        </div>

        <div class="links">
            <button v-on:click="good_request">
                Good Request
            </button>
            <button v-on:click="bad_request">
                Bad Request
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ErrorHandling",
        data() {
            return {
            }
        },
        methods: {
            bad_request: function () {

                axios.get('/api/bad')
                    .then(res => {
                        console.log(res.data)
                    });
            },
            good_request: function () {

                axios.get('/api/good')
                    .then(res => {
                        console.log(res.data)
                    });
            },
        }
    }
</script>

<style scoped>

</style>
