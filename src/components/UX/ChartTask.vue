<template>
  <div class="chart-container">
    <h2 class="chart-title">{{ title }}</h2>
    <div class="chart-content">
      <div v-for="item in items" :key="item.name" class="chart-item">
        <div class="chart-item-label">{{ item.name }}</div>
        <div class="chart-item-progress">
          <div class="chart-progress-bar" :style="{ width: item.progress + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    items: Array
  }
}
</script>

<style scoped>
.chart-container {
  padding: 20px;
}

.chart-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.chart-content {
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.chart-item {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chart-item-label {
  margin-bottom: 5px;
}

.chart-item-progress {
  flex: 0 0 300px;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
}

.chart-progress-bar {
  height: 100%;
  background-color: #42b983;
  transition: width 0.3s ease-in-out;
}
</style>
