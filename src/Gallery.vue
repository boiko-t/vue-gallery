<template>
  <article id="app">
    <div class="content">
      <header id="galleryHeader">welcome to viseven <span class="highlighted">imagestock</span></header>
      <div class="test">1</div>
      <div class="test">2</div>
      <div class="test">3</div>
      <div class="test">4</div>
      <div class="test">5</div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/style/reset.css';
  @import 'assets/style/fonts.css';

  #app {
    width: 1024px;
    height: 768px;
    padding: 20px 20px 40px 20px;
    box-sizing: border-box;
    background: #f0f3f6;

  }

  #galleryHeader {
    margin: 0 0 15px 5px;
    color: #8499a7;
    font: 800 24px OpenSans;
    text-transform: uppercase;

    .highlighted {
      color: #21b8c6;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: auto;
  }

  .test {
    width: 1500px;
    height: 100px;
    border: 2px red solid;
    margin: 5px;
  }

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #d1dae3;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #21b8c6;
    border-radius: 10px;
  }
</style>
