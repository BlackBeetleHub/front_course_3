<template>
    <div class="layout">
        <Layout>
            <Header>
                <NavBar></NavBar>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}" width="425">
                    <Menu active-name="1" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                All paths
                            </template>
                            <MenuItem name="3-1">
                                <ListPaths :list="allPaths" :map="map"></ListPaths>
                            </MenuItem>
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
import Api from "@/utils/Api";
import NavBar from "@/templates/HeaderBar"
import ListPaths from "@/templates/ListPaths"

export default {
  name: "Personal",
  data() {
    return {
      map: "",
      path_name: "",
      curCreatingPath: [],
      allPaths:[]
    };
  },
  async mounted() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
    L.mapquest.key = "yOjPR23630BKlGLZHfJVBGKzIUtEi2Ue";
    this.map = L.mapquest.map("map", {
      center: [50.002327786606195, -323.632080084607],
      layers: L.mapquest.tileLayer("map"),
      zoom: 12
    });
    L.DomEvent.addListener(this.map, "click", this.addMarker);
    var todayData = Statistics.createEmptyStatistics();
    todayData.data.labels = [];
    let respStatistics = await Api.getStatistics({params: {}});
    respStatistics = respStatistics.data
    console.log(respStatistics)
    let humidityToday = []
    let noiseToday = []
    for(let i = 0; i < respStatistics.length;i++) {
        humidityToday.push(Number(respStatistics[i].humidity))
        noiseToday.push(Number(respStatistics[i].noise))
        let timeTodayLast = new Date(respStatistics[respStatistics.length - 1].time)
    }
    let timeTodayFirst = new Date(respStatistics[0].time)
    console.log(timeTodayFirst)
    let timeTodayLast = new Date(respStatistics[respStatistics.length - 1].time)
    todayData.data.labels.push(timeTodayFirst.getHours() + ":" + timeTodayFirst.getMinutes())
    todayData.data.labels.push(timeTodayLast.getHours() + ":" + timeTodayLast.getMinutes())
    todayData.data.datasets = [
      {
        label: "humidity",
        borderColor: "rgb(255, 99, 132)",
        data: humidityToday
      },
      {
        label: "noise",
        borderColor: "rgb(132, 99, 255)",
        data: noiseToday
      }
    ];
    var myLineChart = new Chart(
      document.getElementById("todayChart"),
      todayData
    );
    let resp = await Api.getAllNamePath({params: {}});
    this.allPaths = resp.data
  },
  methods: {
    showPath: function (name) {
        console.log(name)
    },
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
      this.map.remove();
      this.map = L.mapquest.map("map", {
        center: [50.002327786606195, -323.632080084607],
        layers: L.mapquest.tileLayer("map"),
        zoom: 12
      });
      L.DomEvent.addListener(this.map, "click", this.addMarker);
      this.curCreatingPath = [];
      this.path_name = "";
    },
    createPath: async function(params) {
      let data = new FormData();
      data.append("points", JSON.stringify(this.curCreatingPath));
      data.append("name", this.path_name);
      let resp = await Api.createPath(data);
      if (resp.data === "ok") {
        this.$Message.success("Way was saved");
      } else {
        this.$Message.error("Name already use in your profile");
      }
    }
  },
  components: {NavBar, ListPaths}
};
</script>
<style>
@import url("https://api.mqcdn.com/sdk/mapquest-js/v1.3.1/mapquest.css");
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>