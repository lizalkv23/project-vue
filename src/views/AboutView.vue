<template>
  <div class="chart-col">
    <Card style="width: auto; background-color: rgba(95, 93, 93, 0.355)">
      <template #title>
        <div class="card flex justify-content-between">
          <div> Statystyki użytkownika </div>
          <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Number"
            class="w-full md:w-14rem" />
        </div>
      </template>
      <template #content>
        <ChartEventsUserComponent :selectedCity="selectedCity" />
      </template>
    </Card>
  </div>
</template>

<script>
import ChartEventsUserComponent from '@/components/UX/ChartEventsUserComponent.vue';

export default {
  components: {
    ChartEventsUserComponent
  },
  data() {
    return {
      selectedCity: null,
      cities: [
        { name: '1-7' },
        { name: '1-30' }
      ]
    };
  },
};
</script>

<style lang="scss">
.chart-col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.875rem;
}
</style>