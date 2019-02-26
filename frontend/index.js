/* eslint-disable */
let app = new Vue({
    el: '.app',
    data: {
        time: null,
        Class: null,
        data: require("../lit79.platform/db.json")
    }
});
setInterval(()=>{
    app.time = new Date();
}, 100);