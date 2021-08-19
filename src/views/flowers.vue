<template>
  <div style="position: relative">
    <headerComponent />
    <div class="flowerscards-list container">
      <div @click="onSlideShow(0)" class="flowerscard 1">
        <div class="flowerscard_image"></div>
        <div class="flowerscard_title flowerstitle-white">
          <p>Aloe</p>
        </div>
      </div>
      <div @click="onSlideShow(1)" class="flowerscard 1">
        <div class="flowerscard_image"></div>
        <div class="flowerscard_title flowerstitle-white">
          <p>Blue Bonet</p>
        </div>
      </div>
      <div @click="onSlideShow(2)" class="flowerscard 1">
        <div class="flowerscard_image"></div>
        <div class="flowerscard_title flowerstitle-white">
          <p>Bunch of Purple</p>
        </div>
      </div>
      <div @click="onSlideShow(3)" class="flowerscard 1">
        <div class="flowerscard_image"></div>
        <div class="flowerscard_title flowerstitle-white">
          <p>Bunch of Yellow</p>
        </div>
      </div>
      <div @click="onSlideShow(4)" class="flowerscard 1">
        <div class="flowerscard_image"></div>
        <div class="flowerscard_title flowerstitle-white">
          <p>Dafodil</p>
        </div>
      </div>
      <div @click="onSlideShow(5)" class="flowerscard 1">
        <div class="flowerscard_image"></div>
        <div class="flowerscard_title flowerstitle-white">
          <p>Daisy</p>
        </div>
      </div>
      <div @click="onSlideShow(6)" class="flowerscard 1">
        <div class="flowerscard_image"></div>
        <div class="flowerscard_title flowerstitle-white">
          <p>Hibiscus</p>
        </div>
      </div>
      <div @click="onSlideShow(7)" class="flowerscard 1">
        <div class="flowerscard_image"></div>
        <div class="flowerscard_title flowerstitle-white">
          <p>Rose</p>
        </div>
      </div>
      <div @click="onSlideShow(8)" class="flowerscard 1">
        <div class="flowerscard_image"></div>
        <div class="flowerscard_title flowerstitle-white">
          <p>Sunflower</p>
        </div>
      </div>
    </div>
    <!-- ----------------------------------------------- -->
    <div>
      <FlowersSliderComponent
        @click="on"
        v-bind:class="{ flowersactive: isActive }"
        :flowerNumber="flowersNumber"
      >
        <!-- <b-button-close></b-button-close> -->
      </FlowersSliderComponent>
    </div>
    <footerComponent />
  </div>
</template>
<script>
import FlowersSliderComponent from "../components/FlowersSlider.vue";
import headerComponent from "../components/header.vue";
import footerComponent from "../components/footer.vue";
export default {
  components: { headerComponent, footerComponent, FlowersSliderComponent },
  name: "flowersComponent",
  methods: {
    onSlideShow(num) {
      this.flowersNumber = num;
      this.isActive = true;
    },
    on() {
      this.isActive = false;
    },
  },
  props: {
    flowerNumber: Number,
  },
  data() {
    return {
      flowersNumber: 0,
      FlowersTitle: [
        "Aloe",
        "Blue Bonet",
        "Bunch of Purple",
        "Bunch of Yellow",
        "Dafodil",
        "Hibiscus",
        "Rose",
        "Star Bio",
        "Sunflower",
      ],
      isActive: false,
    };
  },
};
</script>
<style lang="scss">
// **********************************
.flowersactive {
  position: fixed; /* Sit on top of the page content */
  display: flex; /* Hidden by default */
  flex-direction: row;
  justify-content: space-around;
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 1rem;
  left: 0;
  right: 0;

  bottom: 0;
  background-color: rgba(235, 240, 220, 255);
  z-index: 3; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
.flowerscards-list {
  z-index: 0;
  width: 50% !important;
  display: flex;
  justify-content: center !important;
  flex-wrap: wrap;
}

.flowerscard {
  margin: 30px auto;
  width: 200px;
  height: 200px;
  border-radius: 10px !important;
  background-image: url("https://i.redd.it/b3esnz5ra34y.jpg");
  background-size: cover;
  background-blend-mode: normal;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.3s;
}

.flowerscard .flowerscard_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-size: 32px;
  margin-top: 90px;
  height: 40px;
}

.flowerscard:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.flowerstitle-white {
  color: #ffeed5;
  /* color: #111317; */
}

.flowerstitle-black {
  color: #111317;
}

@media all and (max-width: 500px) {
  .flowerscard-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: row;
    width: 100% !important;
  }
}
</style>