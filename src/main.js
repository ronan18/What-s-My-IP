Vue.createApp({
    data() {
      return {
        data: {},
        location: {},
        browser:{}
      }
    },
    mounted() {
        fetch("https://a.stomprocket.io/api/v1/ip") .then(response => response.json()).then(data => {
            console.log(data)
          
            this.data = data
            this.location = data.location
            this.browser = data.browser
     })
    }
  }).mount('#app')