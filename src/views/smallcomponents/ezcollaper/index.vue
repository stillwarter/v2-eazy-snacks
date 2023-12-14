<script>
export default {
  data() {
    return {
      ishow: 1,
    };
  },
  methods: {
    opena(i) {
      // 获取需要的元素
      const itemdom = this.$refs.item1;
      const contentdom = this.$refs.expendcontent1;
      const titledom = this.$refs.title;
      const titleicondom = this.$refs.titleicon;

      // 获取高度
      const ihe = itemdom.clientHeight;
      const che = contentdom.clientHeight;
      const the = titledom.clientHeight;

      // 计算展开高度
      const aimh = ihe + che;
      // 若当前状态允许展开
      if (i) {
        itemdom.style = `height:${aimh}px`;
        titleicondom.style = 'transform: rotate(90deg);';
        contentdom.style = 'opacity: 1;' + `top:30px`;
      } else {
        itemdom.style = `height:30px`;
        titleicondom.style = 'transform: rotate(0deg);';
        contentdom.style = 'opacity: 0;' + `top:30px`;
      }

      this.ishow = !this.ishow;
    },
  },
};
</script>

<template>
  <div class="ezcollaperlayout">
    <div class="box">
      <div class="item" ref="item1">
        <div ref="title" class="title" @click="opena(ishow)">
          <p ref="titleicon" class="titleicon">➡️</p>
          展开标题
        </div>
        <div ref="expendcontent1" class="expendcontent">
          <p>展开内容</p>
          <p>展开内容</p>
          <p>展开内容</p>
          <p>展开内容</p>
          <p>展开内容</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// layuot

.box {
  .item {
    width: 100%;
    height: 30px;
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 100;
    overflow: hidden;

    .title {
      width: 100%;
      background: #fff;
      position: absolute;
      z-index: 101;
      cursor: pointer;
      .titleicon {
        transition: all 0.3s ease-in-out;
        display: inline-block;
      }
    }

    .expendcontent {
      position: absolute;
      transition: all 0.3s ease-in-out;
      top: 30px;
      z-index: -1;
      opacity: 1;
    }
  }
}
</style>
