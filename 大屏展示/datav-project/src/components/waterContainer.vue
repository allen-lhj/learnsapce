<template>
  <div class="water-chart">
      <div class="water-level-chart-title">累计完成情况</div>

    <div class="water-level-chart-details">
      累计完成<span>235,680</span>元
    </div>

    <div class="chart-container">
      <dv-water-level-pond :config="config" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'WaterChart',
    data() {
        return {
            config: {
              data: [45],
              shape: 'round',
              waveHeight: 25,
              waveNum: 2
      }
        }
    }
}
</script>

<style lang="less">
.water-chart {
    width: 50%;
    box-sizing: border-box;
    margin: 0 auto;
    background-color: rgba(6, 30, 93, 0.5);
    border-top: 2px solid rgba(1, 153, 209, .5);
    display: flex;
    flex-direction: column;
    .chart-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>