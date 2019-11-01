let app = new Vue(
    {
        el:"#app",
        data: {
            message: "WELCOME TO SHE-AFRICA!!!",
            light: "Don't be a fool"
        },
        methods: {
            sayHello: function () {
                console.log("Hello")
            }
        }
    })

