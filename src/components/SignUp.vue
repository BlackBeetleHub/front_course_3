<template>
  <div class="hello">
      <br/>
    <row>
      <i-col span="12"> <img src="../assets/logo.png" height="42" width="42"/> </i-col>
      <i-col span="12">
         <h3 class="h3"><a href="#/login"> {{ $t("login") }} </a> </h3>
      </i-col>
     </row>
    <row type="flex" justify="center" align="middle" >
        <i-col span="5" class="reg-box">
                <row><h2 class="h2-how">{{ $t("signup") }}</h2></row>
                <br>
                <row>
                    <row>
                        <i-input class="login" v-model='username' v-bind:placeholder="$t('username')" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-input class="email" v-model='email' v-bind:placeholder="$t('email')" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-input class="password" v-model='password' v-bind:placeholder="$t('password')" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-button type="success" @click="reg">{{ $t("get_started") }}</i-button>
                    </row>
                </row>
        </i-col>
    </row>
    <row type="flex" justify="center" align="middle" ><div>
    <Translate></Translate>
</div></row>
  </div>
</template>

<script>
import Api from "@/utils/Api";
import i18n from "@/assets/localization";
import Translate from "@/templates/Translate";

export default {
  name: "SignUp",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      username: "",
      password: "",
      email: ""
    };
  },
  methods: {
    show: function() {
      console.log("hello");
    },
    reg: async function() {
      let data = new FormData();
      data.append("email", this.email);
      data.append("password", this.password);
      data.append("username", this.username);
      const response = await Api.createUser(data);
      console.log(response.data);
      this.$router.push("/login");
    }
  },
  components: { Translate }
};
</script>

<style>
.reg-box {
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
