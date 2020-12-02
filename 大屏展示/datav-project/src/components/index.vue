<template>
  <div id="data-view">
      <dv-full-screen-container>
      <TopHeader />
      <div class="main-content">
          <Left />
          <WaterView />
      </div>
      </dv-full-screen-container>
      
  </div>
</template>

<script>
import TopHeader from './topHeader'
import Left from './left'
import WaterView from './waterContainer'
export default {
name: 'DataView',
components: {
    TopHeader,
    Left,
    WaterView
}
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  #dv-full-screen-container {
    background-image: url('img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}
}

</style>