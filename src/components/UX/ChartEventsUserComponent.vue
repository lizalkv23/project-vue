<template>
   <div class="card">
      <Chart type="line" :data="chartData" :options="chartOptions" class="h-18rem w-full bg-white p-4 chart-card" />
   </div>
</template>

<script>
export default {
   props: {
      selectedDays: {
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
      selectedDays(Days) {
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

         if (this.selectedDays && this.selectedDays.name === '1-7') {
            labels = this.getLabels(7, currentDate);
            daysInPeriod = 7;
         } else if (this.selectedDays && this.selectedDays.name === '1-30') {
            labels = this.getLabels(30, currentDate).filter((day) => (day + 2) % 3 === 0);
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
               },
               {
                  data: Array.from({ length: daysInPeriod }, () => Math.floor(Math.random() * (max - min + 1)) + min),
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--red-300'),
                  tension: 0.4,
                  pointRadius: 0,
                  borderWidth: 2.5,
                  hidden: false
               }
            ]
         };

         this.chartOptions = this.setChartOptions();
      },
      getLabels(days, currentDate) {
         const labels = [];
         const currentDay = currentDate.getDate();
         const currentMonth = currentDate.getMonth();
         const currentYear = currentDate.getFullYear();

         if (currentDay >= days) {
            for (let i = days - 1; i >= 0; i--) {
               labels.push(currentDay - i);
            }
         } else {
            const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
            const prevMonthStartIndex = prevMonthLastDay - (days - currentDay) + 1;

            for (let i = prevMonthStartIndex; i <= prevMonthLastDay; i++) {
               labels.push(i);
            }

            for (let i = 1; i <= currentDay; i++) {
               labels.push(i);
            }
         }

         return labels
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