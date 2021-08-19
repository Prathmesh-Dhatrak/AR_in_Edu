<template>
  <div style="position: relative">
    <headerComponent />
    <div class="vehiclescards-list container">
      <div @click="onSlideShow(0)" class="vehiclescard 1">
        <div class="vehiclescard_image"></div>
        <div class="vehiclescard_title vehiclestitle-white">
          <p>Airplane</p>
        </div>
      </div>
      <div @click="onSlideShow(1)" class="vehiclescard 1">
        <div class="vehiclescard_image"></div>
        <div class="vehiclescard_title vehiclestitle-white">
          <p>Boat</p>
        </div>
      </div>
      <div @click="onSlideShow(2)" class="vehiclescard 1">
        <div class="vehiclescard_image"></div>
        <div class="vehiclescard_title vehiclestitle-white">
          <p>Classic Race Car</p>
        </div>
      </div>
      <div @click="onSlideShow(3)" class="vehiclescard 1">
        <div class="vehiclescard_image"></div>
        <div class="vehiclescard_title vehiclestitle-white">
          <p>Fire Truck</p>
        </div>
      </div>
      <div @click="onSlideShow(4)" class="vehiclescard 1">
        <div class="vehiclescard_image"></div>
        <div class="vehiclescard_title vehiclestitle-white">
          <p>Police car</p>
        </div>
      </div>
      <div @click="onSlideShow(5)" class="vehiclescard 1">
        <div class="vehiclescard_image"></div>
        <div class="vehiclescard_title vehiclestitle-white">
          <p>School Bus</p>
        </div>
      </div>
      <div @click="onSlideShow(6)" class="vehiclescard 1">
        <div class="vehiclescard_image"></div>
        <div class="vehiclescard_title vehiclestitle-white">
          <p>Sedan car</p>
        </div>
      </div>
      <div @click="onSlideShow(7)" class="vehiclescard 1">
        <div class="vehiclescard_image"></div>
        <div class="vehiclescard_title vehiclestitle-white">
          <p>Train</p>
        </div>
      </div>
      <div @click="onSlideShow(8)" class="vehiclescard 1">
        <div class="vehiclescard_image"></div>
        <div class="vehiclescard_title vehiclestitle-white">
          <p>Truck</p>
        </div>
      </div>
    </div>
    <!-- -------------------------------- -->
    <div>
      <VehiclesSliderComponent
        @click="on"
        v-bind:class="{ vehiclesactive: isActive }"
        :vehicleNumber="vehiclesNumber"
      >
        <b-button-close></b-button-close>
      </VehiclesSliderComponent>
    </div>
    <footerComponent />
  </div>
</template>
<script>
import VehiclesSliderComponent from "../components/VehiclesSlider.vue";
import headerComponent from "../components/header.vue";
import footerComponent from "../components/footer.vue";
export default {
  components: { headerComponent, footerComponent, VehiclesSliderComponent },
  name: "vehiclesComponent",
  methods: {
    onSlideShow(num) {
      this.vehiclesNumber = num;
      this.isActive = true;
    },
    on() {
      this.isActive = false;
    },
  },
  props: {
    vehicleNumber: Number,
  },
  data() {
    return {
      vehiclesNumber: 0,
      isActive: false,
    };
  },
};
</script>
<style lang="scss">
// **********************************
.vehiclesactive {
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
.vehiclescards-list {
  z-index: 0;
  width: 50% !important;
  display: flex;
  justify-content: center !important;
  flex-wrap: wrap;
}

.vehiclescard {
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

.vehiclescard .vehiclescard_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-size: 32px;
  margin-top: 90px;
  height: 40px;
}

.vehiclescard:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.vehiclestitle-white {
  color: #ffeed5;
  /* color: #111317; */
}

.vehiclestitle-black {
  color: #111317;
}

@media all and (max-width: 500px) {
  .vehiclescard-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: row;
    width: 100% !important;
  }
}
</style>