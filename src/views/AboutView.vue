<template>
  <div class="card flex justify-content-center">
    <Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: null,
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true
            }
          }
        }
      }
    };
  },
  mounted() {
    this.chartData = this.setChartData();
  },
  methods: {
    setChartData() {
      const documentStyle = getComputedStyle(document.body);

      return {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [540, 325, 702],
            backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
          }
        ]
      };
    }
  }
};
</script>
