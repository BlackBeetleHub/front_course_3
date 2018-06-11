<template>
    <Table border :columns="columnsOptions" :data="list"></Table>
</template>

<script>
import "@/utils/mapquest";
import Api from "@/utils/Api";
export default {
  props: ["list", "map"],
  data() {
    return {
      columnsOptions: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Action",
          key: "action",
          width: 140,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "View"),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ]
    };
  },
  methods: {
    async show(index) {
      console.log(index);
      console.log(this.list[index].name)
      let resp = await Api.getPathByName({params: {path_name: this.list[index].name}})
      this.drawPath(resp.data)
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
    drawPath(points) {
        for(let i = 0; i < points.length; i++) {
            this.addMarker(points[i])
        }
    },
    addMarker: function(latlng) {
      L.marker(latlng, {
        icon: L.mapquest.icons.marker(),
        draggable: false
      }).addTo(this.map);
    }
  }
};
</script>

<style>
</style>
