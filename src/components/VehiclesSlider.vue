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
  props: ["vehicleNumber"],
  data() {
    return {
      Vehiclesimages: [
        require("../assets/img/Vehicles/Airplane.jpg"),
        require("../assets/img/Vehicles/Boat.jpg"),
        require("../assets/img/Vehicles/ClassicRaceCar.jpg"),
        require("../assets/img/Vehicles/FireTruck.jpg"),
        require("../assets/img/Vehicles/PoliceCar.jpg"),
        require("../assets/img/Vehicles/SchoolBus.jpg"),
        require("../assets/img/Vehicles/SedanCar.jpg"),
        require("../assets/img/Vehicles/Train.jpg"),
        require("../assets/img/Vehicles/Truck.jpg"),
        require("../assets/img/Vehicles/Van.jpg"),
      ],
      VehiclesTitle: [
        "Airplane",
        "Boat",
        "Classic Race Car",
        "Fire Truck",
        "Police car",
        "School Bus",
        "Sedan car",
        "Train",
        "Truck",
      ],
      VehiclesimageData: [
        "An airplane or aeroplane (informally plane) is a fixed-wing aircraft that is propelled forward by thrust from a jet engine",
        "A boat is a watercraft of a large range of types and sizes, but generally smaller than a ship, which is distinguished by its larger size, shape, cargo or passenger capacity, or its ability to carry boats.",
        "a car designed to travel at high speed for taking part in motor car races",
        "A fire truck is a large vehicle which carries firefighters and equipment for putting out fires.",
        "A police car is a ground vehicle used by police for transportation during patrols and to enable them to respond to incidents and chases.",
        "A school bus is a type of bus owned, leased, contracted to, or operated by a school or school district. It is regularly used to transport students to and from school or school-related activities",
        "A passenger car with four doors and a separate trunk. sedan is a luxuary Car ",
        "Truck is a large, heavy road vehicle used for carrying goods, materials, or troops. It has more than 8 Wheels ",
        "Train is large vehicle which runs on a rail. It carries mores 500 people at time. It has a specific rule ",
        "Van is 4 wheel car which looks similar to bus. Basically it is use for family touring ",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.Vehiclesimages[this.vehicleNumber];

    // this.startSlide();
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
      return this.VehiclesimageData[this.vehicleNumber];
    },
    currentImg: function () {
      return this.Vehiclesimages[this.vehicleNumber];
    },
    currentTitle: function () {
      return this.VehiclesTitle[this.vehicleNumber];
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