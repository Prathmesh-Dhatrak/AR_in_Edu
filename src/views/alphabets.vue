<template>
  <div style="position: relative">
    <headerComponent />
    <div class="alphabetscards-list container">
      <div @click="onSlideShow(0)" class="alphabetscard 1">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>A</p>
        </div>
      </div>

      <div @click="onSlideShow(1)" class="alphabetscard 2">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>B</p>
        </div>
      </div>

      <div @click="onSlideShow(2)" class="alphabetscard 3">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>C</p>
        </div>
      </div>

      <div @click="onSlideShow(3)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>D</p>
        </div>
      </div>
      <div @click="onSlideShow(4)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>E</p>
        </div>
      </div>
      <div @click="onSlideShow(5)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>F</p>
        </div>
      </div>
      <div @click="onSlideShow(6)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>G</p>
        </div>
      </div>
      <div @click="onSlideShow(7)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>H</p>
        </div>
      </div>
      <div @click="onSlideShow(8)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>I</p>
        </div>
      </div>
      <div @click="onSlideShow(9)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>J</p>
        </div>
      </div>
      <div @click="onSlideShow(10)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>K</p>
        </div>
      </div>
      <div @click="onSlideShow(11)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>L</p>
        </div>
      </div>
      <div @click="onSlideShow(12)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>M</p>
        </div>
      </div>
      <div @click="onSlideShow(13)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>N</p>
        </div>
      </div>
      <div @click="onSlideShow(14)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>O</p>
        </div>
      </div>
      <div @click="onSlideShow(15)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>P</p>
        </div>
      </div>
      <div @click="onSlideShow(16)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>Q</p>
        </div>
      </div>
      <div @click="onSlideShow(17)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>R</p>
        </div>
      </div>
      <div @click="onSlideShow(18)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>S</p>
        </div>
      </div>
      <div @click="onSlideShow(19)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>T</p>
        </div>
      </div>
      <div @click="onSlideShow(20)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>U</p>
        </div>
      </div>
      <div @click="onSlideShow(21)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>V</p>
        </div>
      </div>
      <div @click="onSlideShow(22)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>W</p>
        </div>
      </div>
      <div @click="onSlideShow(23)" class="alphabetscard 4">
        <div class="alphabetscard_image"></div>
        <div class="alphabetscard_title alphabetstitle-white">
          <p>X</p>
        </div>
      </div>
      <div class="d-flex">
        <div @click="onSlideShow(24)" class="alphabetscard 4 mx-1">
          <div class="alphabetscard_image"></div>
          <div class="alphabetscard_title alphabetstitle-white">
            <p>Y</p>
          </div>
        </div>
        <div @click="onSlideShow(25)" class="alphabetscard 4 mx-1">
          <div class="alphabetscard_image"></div>
          <div class="alphabetscard_title alphabetstitle-white">
            <p>Z</p>
          </div>
        </div>
      </div>
    </div>
    <!-- *********************************************** -->
    <div>
      <AlphabetSliderComponent
        @click="on"
        v-bind:class="{ alphabetactive: isActive }"
        :alphabetNumber="alphabetsNumber"
      >
      </AlphabetSliderComponent>
    </div>
    <footerComponent />
  </div>
</template>
<script>
import AlphabetSliderComponent from "../components/AlphabetSlider.vue";
import headerComponent from "../components/header.vue";
import footerComponent from "../components/footer.vue";

export default {
  components: { headerComponent, footerComponent, AlphabetSliderComponent },
  name: "alphabetsComponent",
  methods: {
    onSlideShow(num) {
      this.alphabetsNumber = num;
      this.isActive = true;
    },
    on() {
      this.isActive = false;
    },
  },
  props: {
    alphabetNumber: Number,
  },
  data() {
    return {
      alphabetsNumber: 0,
      isActive: false,
    };
  },
};

// -------------------------------
</script>
<style lang="scss">
// **********************************
.alphabetactive {
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
.alphabetscards-list {
  z-index: 0;
  width: 50% !important;
  display: flex;
  justify-content: center !important;
  flex-wrap: wrap;
}

.alphabetscard {
  margin: 30px auto !important;
  width: 100px !important;
  height: 100px !important;
  border-radius: 10px !important;
  background-image: url("https://i.redd.it/b3esnz5ra34y.jpg");
  background-size: cover;
  background-blend-mode: normal;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.3s;
}

.alphabetscard .alphabetscard_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.alphabetscard .alphabetscard_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.alphabetscard .alphabetscard_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-size: 50px;
  margin-top: -90px;
  height: 40px;
}

.alphabetscard:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.alphabetstitle-white {
  color: #ffeed5;
  /* color: #111317; */
}

.alphabetstitle-black {
  color: #111317;
}

@media all and (max-width: 500px) {
  .alphabetscard-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: row;
    width: 100% !important;
  }
}
</style>