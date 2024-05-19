<script setup lang="ts">
import { ElTable } from 'element-plus';
import htmlstudy from './components/HtmlStudy.vue'
import topHeaderBar from './components/widget/TopHeaderBar.vue'
import { ref,reactive } from 'vue';
import { GoodsFilled,Platform,Shop,Van,Avatar,HomeFilled } from '@element-plus/icons-vue';

const activeName = ref('Role')

</script>

<template>
  <topHeaderBar></topHeaderBar>
  <div id="app">
    <div style="width: 100%;">
      <el-tabs type="border-card" class="demo-tabs">
        
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><GoodsFilled /></el-icon>
              <span>大金融</span>
            </span>
          </template>
          Finance
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Platform /></el-icon>
              <span>科技</span>
            </span>
          </template>
          Technology
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Shop /></el-icon>
              <span>消费</span>
            </span>
          </template>
          Consume
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Van /></el-icon>
              <span>汽车</span>
            </span>
          </template>
          Car
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Avatar /></el-icon>
              <span>人工智能</span>
            </span>
          </template>
          Ai
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><HomeFilled /></el-icon>
              <span>房地产</span>
            </span>
          </template>
          House
        </el-tab-pane>
        
      </el-tabs>
  
    </div>
  </div>
  
</template>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
