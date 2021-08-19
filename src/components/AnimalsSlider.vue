<template>
  <div class="Animalsslider">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <div class="d-flex">
          <div class="px-1 w-100 flex-grow-1">
            <img :src="currentImg" />
          </div>
          <div class="px-1 w-50 d-flex flex-column align-self-center">
            <h1
              v-text="currentTitle"
              class="text-center text-uppercase header_slide"
            ></h1>
            <hr class="hr_slide" />
            <p
              v-text="currentData"
              class="p_slide text-left text-uppercase"
            ></p>
          </div>
        </div>
      </div>
    </transition-group>
    <button
      type="button"
      class="btn-close btn-close-white bg-white"
      aria-label="Close"
    ></button>
  </div>
</template>
<script>
export default {
  props: ["animalNumber"],
  data() {
    return {
      Animalsimages: [
        require("../assets/img/Animals/Reindeer.jpg"),
        require("../assets/img/Animals/Rabbit.jpg"),
        require("../assets/img/Animals/Lion.jpg"),
        require("../assets/img/Animals/Kangaroo.jpg"),
        require("../assets/img/Animals/Horse.jpg"),
        require("../assets/img/Animals/goat.jpg"),
        require("../assets/img/Animals/Elephants.jpg"),
        require("../assets/img/Animals/doggy.jpg"),
        require("../assets/img/Animals/Cow.jpg"),
        require("../assets/img/Animals/bear.jpg"),
      ],
      AnimalsTitle: [
        "Reindeer",
        "Rabbits",
        "Lions",
        "Kangaroo",
        "Horse",
        "Goat",
        "Elephants",
        "Dog",
        "Cow",
        "Bear",
      ],
      AnimalsimageData: [
        "The reindeer is a species of deer who are situated around or inhabiting one of the earth's poles.",
        "Rabbits are crepuscular, which means they generally sleep during the day and night and are most active at dusk and dawn.",
        "Lions are the kings of the jungle because of their raw power and strength.",
        "Kangaroo have large feet and powerful hind legs",
        "The horse has evolved over the past 45 to 55 million years from a small multi-toed creature",
        "Goat is a small animal with horns which lives in mountain areas or is kept on farms for its milk and meat",
        "Elephants are the largest existing land animals.",
        "Dog is the only, absolute and best friend that a man has",
        "Cow is a large female animal that is kept on farms to produce milk",
        "Bear is a large, heavy wild animal with thick fur and sharp teeth",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.Animalsimages[this.animalNumber];
  },

  methods: {
    on: function () {
      this.$refs.slide.style.display = "block";
    },
    off: function () {
      this.$refs.slide.style.display = "none";
    },
  },

  computed: {
    currentData: function () {
      return this.AnimalsimageData[this.animalNumber];
    },
    currentImg: function () {
      return this.Animalsimages[this.animalNumber];
    },
    currentTitle: function () {
      return this.AnimalsTitle[this.animalNumber];
    },
  },
};
</script>
<style lang="scss">
.header_slide {
  color: #ff4411 !important;
  font-size: 48px !important;
  font-weight: bold;
  font-family: "Signika", sans-serif !important;
}
.p_slide {
  font-family: "Inder", sans-serif;
  line-height: 28px;
  color: #666;
  text-align: justify !important;
}
.hr_slide {
  padding-top: 0px;
  border: 2px solid black !important;
}
.Animalsslider {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 600px;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: relative;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>