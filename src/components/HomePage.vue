<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" alt="robot" aria-hidden="true">
    </div>
    <div class="get-started">
      <router-link :to="{name: 'Build'}">Get Started</router-link> and build a robot!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  text-align: center;

}
.robot {
  height: 300px;
}
.get-started {
  text-align: center;
}
</style>
