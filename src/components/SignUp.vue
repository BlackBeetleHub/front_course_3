<template>
  <div class="hello">
    <row>
      <i-col span="12"> <img src="../assets/logo.png" height="42" width="42"/> </i-col>
      <i-col span="12">
         <h3 class="h3">Already have an account? <a href="#/login"> Log In </a> </h3>
      </i-col>
     </row>
    <row type="flex" justify="center" align="middle" >
        <i-col span="5" class="reg-box">
                <row><h2 class="h2-how">Sign Up</h2></row>
                <br>
                <row>
                    <row>
                        <i-input class="login" placeholder="Username" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-input class="login" placeholder="Email" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-input class="login" placeholder="Password" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-button type="success">Get Started</i-button>
                    </row>
                </row>
        </i-col>
    </row>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    show: function () {
      console.log('hello')
    }
  }
}
</script>

<style>
    .reg-box{
        margin-top: 15px;
        padding: 20px;
        box-shadow: 0 0 5px;
    }
    .h2-how {
        font-size: 36px;
        color: #464c5b;
        font-weight: bold;
    }
    .h3 {
        font-size: 20px;
        color: #464c5b;
        font-weight: bold;
    }
</style>
