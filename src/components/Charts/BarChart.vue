<template>
  <div class="chart">
    <chart :chartdata="this.chartdata"></chart>
  </div>
</template>

<script>
import Chart from "./BarChart.js";
export default {
    components: {
        Chart
    },
    props: {
        chartdata: {
            type: Object,
            default: null
        },
    },
};
</script>

<style>
</style>