<template>
  <div class="hello">
    <row>
      <i-col span="12"> <img src="../assets/logo.png" height="42" width="42"/> </i-col>
      <i-col span="12">
         <router-link to="signup"><i-button type="info">Sign up</i-button></router-link>
         <router-link to="login"><i-button type="warning">Log In</i-button></router-link>
      </i-col>
    </row>
    <row>
      <carousel loop>
        <carousel-item>
            <img src="../assets/preview/1.jpg" width="100%" height="650"/>
        </carousel-item>
        <carousel-item>
            <img src="../assets/preview/2.jpeg" width="100%" height="650"/>
        </carousel-item>
        <carousel-item>
            <img src="../assets/preview/3.jpg" width="100%" height="650"/>
        </carousel-item>
        <carousel-item>
            <img src="../assets/preview/4.jpg" width="100%" height="650"/>
        </carousel-item>
        <carousel-item>
            <img src="../assets/preview/5.jpg" width="100%" height="650"/>
        </carousel-item>
        <carousel-item>
            <img src="../assets/preview/6.jpg" width="100%" height="650"/>
        </carousel-item>
        <carousel-item>
            <img src="../assets/preview/7.jpg" width="100%" height="650"/>
        </carousel-item>
        <carousel-item>
            <img src="../assets/preview/8.jpg" width="100%" height="650"/>
        </carousel-item>
    </carousel>
    </row>
    <row class="box">
      <h2 class="h2-how">How it works</h2>
    </row>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    show: function () {
      console.log('hello')
    },
    sign_up: function () {
      location.href = '#signup'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.h2-how {
  font-size: 36px;
  color: #464c5b;
  font-weight: bold;
}

.box {
  box-shadow: 0.4em 0.4em 5px rgba(122,122,122,0.5);
}

.botton{
    transition: 0.07s all ease-in-out, 0.06s transform cubic-bezier(0.42, 0, 0.57, 0.96);
    padding: 8px 16px;
    font-weight: bold;
    font-size: 13px;
    font-family: Museo-sans, Helvetica, Arial, sans-serif;
    text-decoration: none;
    letter-spacing: 0.2px;
    color: white;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    display: inline-block;
    background-color: #aaafb5;
    box-shadow: 0 5px 4px -5px rgba(0,0,0,0.2);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.button.m-blue {
    background-color: #31ABED;
}

</style>
