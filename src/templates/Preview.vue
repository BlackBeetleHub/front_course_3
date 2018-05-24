<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <pre>
                        {{ preview }} 
                    </pre>
                </div>
            </el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {},
  methods: {
    loadPreview: function(params) {
        
    }
  }
};
</script>
<style>
</style>
