<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Avatar icon="person"/>
                            {{ email }}
                        </MenuItem>
                        <MenuItem name="2">
                            <div @click='logOut'><Icon type="log-out" size="30" style="margin-top: 15px;"></Icon></div>
                        </MenuItem>
                    </div>
                </Menu>
</template>

<script>
export default {    
  data() {
      return {
        email: ''
      }
  },
  mounted(){
      this.email = localStorage.getItem('email')
  },
  methods: {
    logOut: function(params) {
      console.log("logOut");
      localStorage.setItem("token", "");
      localStorage.setItem("id", "");
      localStorage.setItem("email", "");
      localStorage.setItem("username", "");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
</style>