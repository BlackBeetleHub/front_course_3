<template>
    <div class="layout">
        <Layout>
            <Header>
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
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}" width="400">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Top
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                News
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                All paths
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <Input v-model="path_name" placeholder="Enter path name..." style="width: 300px"></Input>
                        <Button type="ghost" v-on:click="createPath">Save</Button>
                        <Button type="dashed" v-on:click="clearMap">Clear</Button>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <div id="map" style="width: 100%; height: 500px;">
                        </div>
                    </Content>
                </Layout>
                <Sider hide-trigger :style="{background: '#fff'}" width="400">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                Today
                            </template>
                            <MenuItem name="1-1">
                                <canvas id="todayChart" width="400" height="400"></canvas>
                            </MenuItem> 
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                Yesterday
                            </template>
                            <MenuItem name="2-1">
                                <canvas id="yesterdayChart" width="400" height="400"></canvas>
                            </MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                Month
                            </template>
                            <MenuItem name="3-1"><canvas id="monthChart" width="400" height="400"></canvas></MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import "@/utils/mapquest";
import Chart from "chart.js";
import Statistics from "@/utils/statistics.js";
import Api from '@/utils/Api'

export default {
  name: "Personal",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      email: "",
      map: "",
      path_name: "",
      curCreatingPath: []
    };
  },
  mounted() {
      console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token') === null) {
        this.$router.push('/login')
    }
    L.mapquest.key = "yOjPR23630BKlGLZHfJVBGKzIUtEi2Ue";
    this.map = L.mapquest.map("map", {
      center: [50.002327786606195, -323.632080084607],
      layers: L.mapquest.tileLayer("map"),
      zoom: 12
    });
    this.email = localStorage.getItem("email");
    L.DomEvent.addListener(this.map, "click", this.addMarker);
    var todayData = Statistics.createEmptyStatistics();
    todayData.data.labels = [
      "Red",
      "Blue",
      "Yellow",
      "Green",
      "Purple",
      "Orange"
    ];
    todayData.data.datasets = [
      {
        label: "humidity",
        borderColor: "rgb(255, 99, 132)",
        data: [12, 19, 3, 5, 2, 3]
      },
      {
        label: "noise",
        borderColor: "rgb(132, 99, 255)",
        data: [19, 12, 5, 3, 3, 2]
      }
    ];
    var myLineChart = new Chart(
      document.getElementById("todayChart"),
      todayData
    );
  },
  methods: {
    getLatLng: function(p1, p2, p3, p4) {
      return p1.latlng;
    },
    addMarker: function(params) {
      let latlng = this.getLatLng(params);
      L.marker(latlng, {
        icon: L.mapquest.icons.marker(),
        draggable: false
      }).addTo(this.map);
      this.curCreatingPath.push({
        lat: latlng.lat,
        lng: latlng.lng
      });
    },
    clearMap: function(params) {
      this.map.remove()
      this.map = L.mapquest.map("map", {
        center: [50.002327786606195, -323.632080084607],
        layers: L.mapquest.tileLayer("map"),
        zoom: 12
      });
      this.curCreatingPath = [];
    },
    createPath: async function(params) {
        let data = new FormData()
        data.append('points', JSON.stringify(this.curCreatingPath))
        data.append('name', this.path_name)
        let resp = await Api.createPath(data)
        console.log(resp.data)
    },
    logOut: function(params) {
        console.log("logOut")
        localStorage.setItem('token', '')
        localStorage.setItem('id', '')
        localStorage.setItem('email', '')
        localStorage.setItem('username', '')
        this.$router.push('/login')
    }
  }
};
</script>
<style>
@import url("https://api.mqcdn.com/sdk/mapquest-js/v1.3.1/mapquest.css");
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
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