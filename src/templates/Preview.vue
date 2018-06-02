<template>
    <div class="preview_block">
        <row span="15" :gutter="10">
            <i-col span="6">
                <div class="date_title">{{ data.date }} </div>
            </i-col>
            <i-col span="12">
                <div class="preview_text"><a class="title_text">{{ data.title }} </a></div>
            </i-col>
        </row>
        <br/>
        <row :gutter="10">
            <i-col span="6">
                <img class="align-middle preview_size" :src="data.img_url">
            </i-col>
            <i-col span="18">
                <span><div class="preview_text">{{ data.text }}</div></span>
            </i-col>
        </row>
        <row :gutter="10">
            <i-col span="2">
                <Icon type="heart" size="16"></Icon> {{ data.likes }}
            </i-col>
            <i-col span="2">
                <Icon type="chatbox" size="16"></Icon> {{ data.comments }}
            </i-col>
            <i-col span="2">
                <Icon type="eye" size="21"></Icon> {{ data.views }}
            </i-col>
        </row>
    </div>
</template>
<script>
export default {
  props: ["data"],
  data() {},
  methods: {
    loadPreview: function(params) {}
  }
};
</script>
<style>
.preview_text {
  text-align: justify;
  text-justify: inter-word;
}
.preview_size {
  max-height: 100%;
  max-width: 100%;
}
.preview_block {
  margin: 5px;
  border-bottom: 1px solid #d5dddf;
}

.date_title {
  font-weight: 500;
  font-size: 28px;
  line-height: 36.4px;
  color: #5f5f5f;
}

.title_text {
  font-weight: 500;
  font-size: 28px;
  line-height: 36.4px;
  color: #487284;
}
</style>
