Vue.createApp({data:()=>({data:{},location:{},browser:{}}),mounted(){fetch("https://a.stomprocket.io/api/v1/ip").then((t=>t.json())).then((t=>{console.log(t),this.data=t,this.location=t.location,this.browser=t.browser}))}}).mount("#app");
//# sourceMappingURL=index.e5f00b38.js.map
