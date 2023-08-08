<template>
   <div class="card">
      <Chart type="line" :data="chartData" :options="chartOptions" class="h-18rem w-full bg-white p-4 chart-card" />
   </div>
</template>

<script>
export default {
   props: {
      selectedCity: {
         type: Object
      }
   },
   data() {
      return {
         chartData: null,
         chartOptions: null
      };
   },
   mounted() {
      this.updateChartData();
   },
   watch: {
      selectedCity(newCity) {
         this.updateChartData();
      }
   },
   methods: {
      updateChartData() {
         const documentStyle = getComputedStyle(document.documentElement);
         const currentDate = new Date();
         const currentMonth = currentDate.getMonth();
         const currentYear = currentDate.getFullYear();

         let labels = [];
         let daysInPeriod = 0;

         if (this.selectedCity === 7) {
            labels = Array.from({ length: 7 }, (_, index) => currentDate.getDate() - index).reverse();
            daysInPeriod = 7;
         } else if (this.selectedCity === 30) {
            labels = Array.from({ length: 30 }, (_, index) => currentDate.getDate() - index).reverse();
            daysInPeriod = 30;
         }

         const min = 0;
         const max = 90;

         this.chartData = {
            labels: labels,
            datasets: [
               {
                  data: Array.from({ length: daysInPeriod }, () => Math.floor(Math.random() * (max - min + 1)) + min),
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--cyan-300'),
                  tension: 0.4,
                  pointRadius: 0,
                  borderWidth: 2.5,
                  hidden: false
               }
            ]
         };

         this.chartOptions = this.setChartOptions();
      },
      setChartOptions() {
         const documentStyle = getComputedStyle(document.documentElement);
         const textColor = documentStyle.getPropertyValue('--text-color-success');
         const textColorSecondary = documentStyle.getPropertyValue('--white-900');
         const surfaceBorder = documentStyle.getPropertyValue('--black');

         return {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
               legend: {
                  display: false,
                  labels: {
                     color: textColor
                  }
               },
               tooltip: {
                  intersect: false
               }
            },
            scales: {
               x: {
                  ticks: {
                     color: surfaceBorder
                  },
                  grid: {
                     display: false,
                     color: surfaceBorder
                  }
               },
               y: {
                  display: false,
                  ticks: {
                     color: textColorSecondary
                  },
                  grid: {
                     display: false,
                     color: surfaceBorder
                  }
               }
            }
         };
      },
   }
};
</script>

<style lang="scss">
.chart-card {
   border-radius: 0.5rem;
}
</style>