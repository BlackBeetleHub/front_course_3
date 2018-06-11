<template>
  <div class="hello">
      <br/>
    <row>
      <i-col span="12"> <img src="../assets/logo.png" height="42" width="42"/> </i-col>
      <i-col span="12">
         <h3 class="h3"><a href="#/signup">{{ $t("please_create_new_user") }}</a> </h3>
      </i-col>
     </row>
    <row type="flex" justify="center" align="middle" >
        <form action="login" method="post">
        <i-col span="100" class="reg-box">
                <row><h2 class="h2-how">{{ $t("login") }}</h2></row>
                <br>
                <row>
                    <row>
                        <i-input class="login" v-model='username' v-bind:placeholder="$t('username')" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-input class="login" v-model='password' v-bind:placeholder="$t('password')" style="width: 300px"/>
                    </row>
                    <br>
                    <row>
                        <i-button type="success" @click='login'>{{ $t("continue") }}</i-button>
                    </row>
                </row>
        </i-col>
        </form>
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
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: async function() {
      let data = new FormData();
      data.append("username", this.username);
      data.append("password", this.password);
      let resp = await Api.loginUser(data);
      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("id", resp.data.id);
      localStorage.setItem("email", resp.data.email);
      localStorage.setItem("username", this.username);
      resp = await Api.check({ params: {} });
      console.log(resp.data);
      this.$router.push("/personal");
    },
    setLang: function(lang) {
      if (lang in this.$i18n.messages) {
        this.$i18n.locale = lang;
      } else {
        console.log("Error");
      }
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
