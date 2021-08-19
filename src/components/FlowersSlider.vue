<template>
  <div class="slider">
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
  props: ["flowerNumber"],
  data() {
    return {
      Flowersimages: [
        require("../assets/img/FLOWERS/aloe.jpg"),
        require("../assets/img/FLOWERS/bluebonet.jpg"),
        require("../assets/img/FLOWERS/bunch_of_purple.jpg"),
        require("../assets/img/FLOWERS/bunch_of_yellow.jpg"),
        require("../assets/img/FLOWERS/daffodil.jpg"),
        require("../assets/img/FLOWERS/daisy.jpg"),
        require("../assets/img/FLOWERS/Hibiscus.jpg"),
        require("../assets/img/FLOWERS/rose.jpg"),
        require("../assets/img/FLOWERS/sunflower.jpg"),
      ],
      FlowersTitle: [
        "Aloe",
        "Blue Bonet",
        "Bunch of Purple",
        "Bunch of Yellow",
        "Dafodil",
        "Daisy",
        "Hibiscus",
        "Rose",
        "Sunflower",
      ],
      FlowersimageData: [
        "Aloea is a plant with thick thorny leaves that contain a lot of water, the juice found in the leaves is used in medicines and cosmetics",
        "Blue Bonet is a name given to bunch of blue flowers",
        "There are so many different types of blooms that share the shade of Purple",
        "There are so many different types of blooms that share the shade of Yellow",
        "Dafodil is the stem bears one large yellow blossom with a corolla deeply cleft into six lobes and a central bell-shaped crown, or corona, that is frilled at its edges.",
        "Daisy, any of several species of flowering plants belonging to the aster family",
        "Hibiscus is a genus of flowering plants in the mallow family, Malvaceae.",
        "Rose is the king of flowers.",
        "Sunflower is a very tall plant with large yellow flowers, often grown for its seeds and their oil, which is used in cooking",
        "Tulips are plants that bloom in early spring. The flowers are cup-shaped and very colorful.",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.Flowersimages[this.flowerNumber];
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
      return this.FlowersimageData[this.flowerNumber];
    },
    currentImg: function () {
      return this.Flowersimages[this.flowerNumber];
    },
    currentTitle: function () {
      return this.FlowersTitle[this.flowerNumber];
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
.slider {
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