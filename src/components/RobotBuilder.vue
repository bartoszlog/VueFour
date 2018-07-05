<template>
  <div>
    <button class="add-to-card" @click="addRobot">Add!</button>
    <div class="top-row">
      <div class="top part">
        <!-- <div>
          <div class="robot-name">{{selectedRobot.head.title}} <span v-if="selectedRobot.head.onSale" class="sale">sale!</span></div>
        </div> -->
        <PartSelector :parts="availableParts.heads"
        position="top"/>
      </div>
    </div>
    <div class="middle-row">
      <PartSelector 
      :parts="availableParts.arms"
      position="left"/>
      <PartSelector 
      :parts="availableParts.torsos"
      position="center"/>
      <PartSelector 
      :parts="availableParts.arms"
      position="right"/>
    </div>
    <div class="bottom-row">
      <PartSelector 
      :parts="availableParts.bases"
      position="bottom"/>
    </div>
    <div>
      <div >
        <h1>Cart</h1>
        <table class="table">
          <thead>
            <tr>
              <th>Robot</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(robot, index) in cart" :key="index">
              <td>{{robot.head.title}}</td>
              <td>{{robot.cost}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
</template>

<script>

import availableParts from '../parts.js'
import PartSelector from './PartSelector.vue'
export default {
  components: {PartSelector},
  data() {
    return {
      availableParts,
      cart: [],
      selectedrobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {}
      }
    }
  },
  methods: {
    addRobot() {
      const robot = this.selectedRobot
      const cost = robot.head.cost + robot.leftArm.cost + robot.torso.cost + robot.rightArm.cost + robot.base.cost
      this.cart.push(Object.assign({}, robot, {cost}))
    },   
  }   
}
</script>


<style lang="scss">
td {
  padding: 15px;
}
.robot-name {
  text-align: center;
  position: absolute;
  top: -23px;

  padding-bottom: 60px;
}
.sale {
  color: red;
}
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
} 
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;    
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;  
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;    
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
</style>
