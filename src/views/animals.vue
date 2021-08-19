<template>
  <div style="position: relative">
    <headerComponent />
    <div class="anlimalscards-list container">
      <div @click="onSlideShow(0)" class="anlimalscard 1">
        <div class="anlimalscard_image"></div>
        <div class="anlimalscard_title anlimalstitle-white">
          <p>Reindeer</p>
        </div>
      </div>
      <div @click="onSlideShow(1)" class="anlimalscard 1">
        <div class="anlimalscard_image"></div>
        <div class="anlimalscard_title anlimalstitle-white">
          <p>Rabbits</p>
        </div>
      </div>
      <div @click="onSlideShow(2)" class="anlimalscard 1">
        <div class="anlimalscard_image"></div>
        <div class="anlimalscard_title anlimalstitle-white">
          <p>Lions</p>
        </div>
      </div>
      <div @click="onSlideShow(3)" class="anlimalscard 1">
        <div class="anlimalscard_image"></div>
        <div class="anlimalscard_title anlimalstitle-white">
          <p>Kangaroo</p>
        </div>
      </div>
      <div @click="onSlideShow(4)" class="anlimalscard 1">
        <div class="anlimalscard_image"></div>
        <div class="anlimalscard_title anlimalstitle-white">
          <p>Horse</p>
        </div>
      </div>
      <div @click="onSlideShow(5)" class="anlimalscard 1">
        <div class="anlimalscard_image"></div>
        <div class="anlimalscard_title anlimalstitle-white">
          <p>Goat</p>
        </div>
      </div>
      <div @click="onSlideShow(6)" class="anlimalscard 1">
        <div class="anlimalscard_image"></div>
        <div class="anlimalscard_title anlimalstitle-white">
          <p>Elephants</p>
        </div>
      </div>
      <div @click="onSlideShow(7)" class="anlimalscard 1">
        <div class="anlimalscard_image"></div>
        <div class="anlimalscard_title anlimalstitle-white">
          <p>Dog</p>
        </div>
      </div>
      <div @click="onSlideShow(8)" class="anlimalscard 1">
        <div class="anlimalscard_image"></div>
        <div class="anlimalscard_title anlimalstitle-white">
          <p>Cow</p>
        </div>
      </div>
      <div @click="onSlideShow(9)" class="anlimalscard 1">
        <div class="anlimalscard_image"></div>
        <div class="anlimalscard_title anlimalstitle-white">
          <p>Bear</p>
        </div>
      </div>
    </div>
    <!-- ----------------------------------------->
    <div>
      <AnimalsSliderComponent
        @click="on"
        v-bind:class="{ anlimalsactive: isActive }"
        :animalNumber="animalsNumber"
      >
      </AnimalsSliderComponent>
    </div>
    <footerComponent />
  </div>
</template>
<script>
import AnimalsSliderComponent from "../components/AnimalsSlider.vue";
import headerComponent from "../components/header.vue";
import footerComponent from "../components/footer.vue";
export default {
  components: { headerComponent, footerComponent, AnimalsSliderComponent },
  name: "animalsComponent",
  methods: {
    onSlideShow(num) {
      this.animalsNumber = num;
      this.isActive = true;
    },
    on() {
      this.isActive = false;
    },
  },
  props: {
    animalNumber: Number,
  },
  data() {
    return {
      animalsNumber: 0,
      isActive: false,
    };
  },
};
</script>
<style lang="scss">
// **********************************
.anlimalsactive {
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
.anlimalscards-list {
  z-index: 0;
  width: 50% !important;
  display: flex;
  justify-content: center !important;
  flex-wrap: wrap;
}

.anlimalscard {
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

.anlimalscard .anlimalscard_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-size: 32px;
  margin-top: 90px;
  height: 40px;
}

.anlimalscard:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.anlimalstitle-white {
  color: #ffeed5;
  /* color: #111317; */
}

.anlimalstitle-black {
  color: #111317;
}

@media all and (max-width: 500px) {
  .anlimalscard-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: row;
    width: 100% !important;
  }
}
</style>