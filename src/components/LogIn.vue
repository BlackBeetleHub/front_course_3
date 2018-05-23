<template>
  <div class="hello">
    <row>
      <i-col span="12"> <img src="../assets/logo.png" height="42" width="42"/> </i-col>
      <i-col span="12">
         <i-button type="warning">Log In</i-button>
      </i-col>
     </row>
    <row type="flex" justify="center" align="middle" >
        <form action="login" method="post">
        <i-col span="5" class="reg-box">
                <row><h2 class="h2-how">Log In</h2></row>
                <br>
                <row>
                    <row>
                        <i-input class="login" placeholder="Username or email" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-input class="login" placeholder="Password" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-button type="success">Continue</i-button>
                    </row>
                </row>
        </i-col>
        </form>
    </row>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
</style>
