<template>
  <div>
    <barchart v-bind:chartdata="this.chartdata"></barchart>
  </div>
</template>

<script>
import BarChart from "./BarChart.js";
export default {
    components: {
        'barchart':BarChart,
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