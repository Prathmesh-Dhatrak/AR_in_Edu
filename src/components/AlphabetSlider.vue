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
        "Apple a Day Keeps Doctor Away. Apples are a good source of vitamin C and fiber. Apples Support a Healthy Immune System. One medium apple has about: 100 calories.",
        "Balloons are used for decoration purposes. Ballons are filled with air. Ballons fly in the air",
        "King Lives in a Castle. Castle is a large building with high walls and towers that was built in the past to defend people against attack",
        "Dainosors are big animals. they throw fire fom their mouth. Dainosors lived 1000 years ago",
        "Elf is cartoon.It is a funny character which dance in a circus ",
        "Fish is an animal that lives and breathes in water and swims",
        "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes, used for making wine, jam, grape juice.",
        "A house is a single-unit residential building, which may range in complexity from a rudimentary hut to a complex structure of wood, masonry, concrete or other material, outfitted with plumbing, electrical, and heating, ventilation, and air conditioning systems.",
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches.",
        "The jaguar is a large felid species and the only living member of the genus Panthera native to the Americas. Its distinctively marked coat features pale yellow to tan colored fur covered by spots that transition to rosettes on the sides.",
        "A kite consists of wings, tethers and anchors. Kites often have a bridle and tail to guide the face of the kite so the wind can lift it.",
        "The lemon is a species of small evergreen tree in the flowering plant and The tree's ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, which has both culinary and cleaning uses.",
        "Mountain, landform that rises prominently above its surroundings, generally exhibiting steep slopes, a relatively confined summit area, and considerable local relief. Mountains generally are understood to be larger than hills, but the term has no standardized geological meaning.",
        "A necklace is jewelry you wear around your neck. ... A necklace can be a simple gold or silver chain, a length of beads or gems, or a pendant hanging from a cord. As long as it's worn around the neck, it's a necklace.",
        "orange is a round fruit with a thick skin that is divided into sections (segments) inside and is a colour between red and yellow",
        "Parrot is a type of tropical bird with a curved beak and usually with very bright feathers. Parrots that are kept as pets can be trained to copy what people say.",
        "Queue a line of people, cars, etc. that are waiting for something or to do something",
        "Rain is liquid water in the form of droplets that have condensed from atmospheric water vapor and then become heavy enough to fall under gravity.",
        "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light, ultraviolet light, and infrared radiation.",
        "Tomato is a soft red fruit that is often eaten without being cooked in salads, or cooked as a vegetable.",
        "Umbrella is an object that you open and hold over your head to protect yourself from the rain or from the hot sun.",
        "Violin is a musical instrument with strings, that you hold under your chin and play with a long thin object.",
        "Windmills are the tall building or structure with long parts (sails) that turn in the wind. In past times windmills were used for making flour from grain, but now they are used mainly for producing electricity.",
        "A Christmas tree is a decorated tree, usually an evergreen conifer, such as a fir, spruce, or pine, or an artificial tree of similar appearance, associated with the celebration of Christmas, originating in Germany associated with Saint Boniface.",
        "A yacht is a sailing or power vessel used for pleasure, cruising, or racing. There is no standard definition, so the term applies to such vessels that have a cabin with amenities that accommodate overnight use.",
        "Zebra is an African wild animal that looks like a horse, with black and white lines (stripes) all over its body.",
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