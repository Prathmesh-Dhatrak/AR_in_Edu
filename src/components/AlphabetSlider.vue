<template>
  <div class="alphabetslider">
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
  props: ["alphabetNumber"],
  data() {
    return {
      Alphabetsimages: [
        require("../assets/img/alphabets/A.jpg"),
        require("../assets/img/alphabets/B.jpg"),
        require("../assets/img/alphabets/C.jpg"),
        require("../assets/img/alphabets/D.jpg"),
        require("../assets/img/alphabets/E.jpg"),
        require("../assets/img/alphabets/F.jpg"),
        require("../assets/img/alphabets/G.jpg"),
        require("../assets/img/alphabets/H.jpg"),
        require("../assets/img/alphabets/I.jpg"),
        require("../assets/img/alphabets/J.jpg"),
        require("../assets/img/alphabets/K.jpg"),
        require("../assets/img/alphabets/L.jpg"),
        require("../assets/img/alphabets/M.jpg"),
        require("../assets/img/alphabets/N.jpg"),
        require("../assets/img/alphabets/O.jpg"),
        require("../assets/img/alphabets/P.jpg"),
        require("../assets/img/alphabets/Q.jpg"),
        require("../assets/img/alphabets/R.jpg"),
        require("../assets/img/alphabets/S.jpg"),
        require("../assets/img/alphabets/T.jpg"),
        require("../assets/img/alphabets/U.jpg"),
        require("../assets/img/alphabets/V.jpg"),
        require("../assets/img/alphabets/W.jpg"),
        require("../assets/img/alphabets/X.jpg"),
        require("../assets/img/alphabets/Y.jpg"),
        require("../assets/img/alphabets/Z.jpg"),
      ],
      AlphabetsTitle: [
        "Apple",
        "Balloon",
        "Castle ",
        "Dinosaurs ",
        "Elf ",
        "Fish ",
        "Grapes ",
        "House ",
        "Ice cream",
        "Jaguar ",
        "Kite",
        "Lemon",
        "Mountain",
        "Necklace",
        "Orange",
        "Parrot",
        "Q",
        "Rain ",
        "Sun ",
        "Tomato ",
        "Umbrella ",
        "Violin ",
        "Windmill ",
        "X",
        "Yacht",
        "Zebra",
      ],
      AlphabetsimageData: [
        "Apple a Day Keeps Doctor Away",
        "Balloons Fly up in the air",
        "King Lives in a Castle",
        "Dinosaurs were alive 1000 years ago",
        "Elf is cartoon ",
        "Fish lives in a water ",
        "Grapes is a fruit ",
        "We live in a House ",
        "Ice cream is desert ",
        "Jaguar is wild animal",
        "Kite",
        "Lemon Juice is tasty ",
        "Mountain have trees",
        "Necklace is beautiful ",
        "Orange juice is tasty",
        "Parrot is a bird",
        "",
        "i love playing in Rain",
        "Sun comes in morning ",
        "Tomato is a vegetable ",
        "Umbrella is use in rainy season",
        "Violin is musical instrument",
        "Windmill is use to produce electricity",
        "",
        "Yacht is big boat",
        "Zebra is a wild animal",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.Alphabetsimages[this.alphabetNumber];
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
      return this.AlphabetsimageData[this.alphabetNumber];
    },
    currentImg: function () {
      return this.Alphabetsimages[this.alphabetNumber];
    },
    currentTitle: function () {
      return this.AlphabetsTitle[this.alphabetNumber];
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inder&display=swap");
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
.alphabetslider {
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
</style>