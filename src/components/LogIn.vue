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
        <i-col span="100" class="reg-box">
                <row><h2 class="h2-how">Log In</h2></row>
                <br>
                <row>
                    <row>
                        <i-input class="login" v-model='username' placeholder="Username" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-input class="login" v-model='password' placeholder="Password" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-button type="success" @click='login'>Continue</i-button>
                    </row>
                </row>
        </i-col>
        </form>
    </row>
  </div>
</template>

<script>
import Api from '@/utils/Api'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: async function () {
      let data = new FormData()
      data.append('username', this.username)
      data.append('password', this.password)
      let resp = await Api.loginUser(data)
      localStorage.setItem('token', resp.data.token)
      localStorage.setItem('id', resp.data.id)
      localStorage.setItem('email', resp.data.email)
      localStorage.setItem('username', this.username)
      resp = await Api.check({params: {}})
      console.log(resp.data)
      this.$router.push('/personal')
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
