<template>
  <div class="hello">
    <row>
      <i-col span="12"> <img src="../assets/logo.png" height="42" width="42"/> </i-col>
      <i-col span="12">
         <router-link to="signup"><i-button type="info">Sign up</i-button></router-link>
         <router-link to="login"><i-button type="warning">Log In</i-button></router-link>
      </i-col>
    </row>
    <br/>
    <row>
      <i-col class="check" span="15" offset="5">
          <row v-for="post in posts">
             <Preview :data=post></Preview>
             <br/>
          </row>
      </i-col>
    </row>
  </div>
</template>

<script>
import Preview from "@/templates/Preview.vue";

export default {
  name: "Posts",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      posts: [ // limit preview text = 1000 symbols
        {
          date: "12.02.2017 16:20",
          title: "Музеи нового Харькова",
          text:
            "В Харькове, несмотря на огромные разрушения во время войны, больше, чем в любом другом городе, сохранившихся памятников архитектуры в стиле конструктивизма. \
             Самым старым сохранившимся зданием города является Покровский собор в стиле барокко, ныне одноимённого монастыря, освящённый в 1689 году и впоследствии давший название монастырю, основанному в XVIII веке.\
             Самым старым храмом города является Успенский собор в стиле барокко,построенный в 1657 году. Колокольня собора XIX века на момент постройки была одной из самых высоких в России (выше колокольни Ивана Великого в Москве); сейчас — высочайшая в Харьковской епархии, одна из самых высоких на Украине.Высота колокольни 89,5 метра. \
             Самым старым складским зданием является двухэтажный «провиантский магазин» (склад продовольствия для города), построенный в 1787 году в стиле русский классицизм в переулке, потом названном по архитектору этого здания Ярославским (на площади Поэзии); в 2005 интерьер был уничтожен фирмой «Домотехника», открывшей в памятнике архитектуры магазин.",
          img_url: "http://mykharkov.info/wp-content/uploads/2012/11/0_98eb4_cb4b73ca_XXL.jpeg",
          likes: 10,
          comments: 12,
          views: 65
        },
        {
          date: "12.02.2017 16:22",
          title: "new post",
          text:
            " How you fell better? \
          asdHow you fell better?How you fell better?How you fell better?How you fell better?How you fell better?How you fell better? \
          How you fell better?How you fell better?How you fell better?How you fell better?How you fell better?How you fell better?How you fell better?\
          How you fell better?How you fell better?How you fell better?How you fell better?",
          img_url: "http://www.relatably.com/m/img/jojo-memes/i8atq.jpg",
          likes: 10,
          comments: 12,
          views: 65
        }
      ]
    };
  },
  methods: {
    show: function() {
      console.log("hello");
    },
    sign_up: function() {
      location.href = "#signup";
    }
  },
  components: { Preview }
};
</script>

<style>
.check {
}
</style>
