<template>
<div>
    <a @click="setLang('en')">en</a>
    <a @click="setLang('ua')">ua</a>
</div>
</template>

<script>
import i18n from "@/assets/localization";
export default {
  data() {
    return {};
  },
  methods: {
    setLang: function(lang) {
      if (lang in this.$i18n.messages) {
        this.$i18n.locale = lang;
      } else {
        console.log("Error");
      }
    }
  }
};
</script>

<style>
</style>


