<template>
  <headerComponent />
  <!-- home page html  -->
  <div class="containers">
    <div class="container_content">
      <div class="container_content_inner">
        <div class="title">
          <h1 class="h1">Smart Learning</h1>
        </div>
        <div class="par">
          <p class="p">
            AR system for Kids, classroom education can be extraordinary and
            more interactive, as AR can enable teachers to show virtual examples
            of concepts and add gaming elements to provide textbook material
            support. This will enable students to learn faster and memorize
            information.
          </p>
        </div>
      </div>
    </div>
    <!--  
    ../assets/img/home_img.jpg 
    -->
    <div class="container_outer_img">
      <div class="img-inner">
        <img
          src="https://i.pinimg.com/originals/77/29/c3/7729c3395007be06ca06c35ccd799138.png"
          alt=""
          style="filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))"
          class="container_img rounded"
        />
      </div>
    </div>
  </div>
  <div class="overlay"></div>
  <!-- home page html ends -->
  <div id="Menu" class="container-fluid">
    <br /><br /><br />
    <hr style="border: 1.8px solid; border-color: yellow" />

    <div
      class="team-founder animated fadeInDown"
      style="
        text-align: center;
        color: white;
        font-family: 'Oswald', sans-serif;
        font-size: 100px;
      "
    >
      ___The Menu___
    </div>
    <br />
    <div class="row">
      <div class="col-md-1">&nbsp;</div>
      <div class="col-md">
        <div class="flip">
          <div class="front" style="background-color: #ffeed5">
            <h1
              class="h1"
              style="color: #bf307f; font-family: 'Oswald', sans-serif"
            >
              Alphabets
            </h1>
          </div>
          <div class="back">
            <router-link to="/alphabets">
              <h2 style="color: #ffeed5; font-family: 'Oswald', sans-serif">
                Content Alphabets
                <i
                  class="bi bi-link-45deg"
                  style="font-size: 15px; position: relative; top: -15px"
                ></i>
              </h2>
            </router-link>
            <p
              style="
                font-family: EB Garamond;
                font-size: 27px;
                color: turquoise;
              "
            >
              A set of symbols in a fixed order used to represent the basic set
              of letters from A to Z.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md">
        <div class="flip">
          <div class="front" style="background-color: #ffeed5">
            <h1
              class="h1"
              style="color: #bf307f; font-family: 'Oswald', sans-serif"
            >
              Animals
            </h1>
          </div>
          <div class="back">
            <router-link to="/animals">
              <h2 style="color: #ffeed5; font-family: 'Oswald', sans-serif">
                Content Animals
                <i
                  class="bi bi-link-45deg"
                  style="font-size: 15px; position: relative; top: -15px"
                ></i>
              </h2>
            </router-link>
            <p
              style="
                font-family: EB Garamond;
                font-size: 27px;
                color: turquoise;
              "
            >
              An animal is a living creature such as a dog, lion, or rabbit
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-1">&nbsp;</div>
      <div class="col-md">
        <div class="flip">
          <div class="front" style="background-color: #ffeed5">
            <h1
              class="h1"
              style="color: #bf307f; font-family: 'Oswald', sans-serif"
            >
              Flowers
            </h1>
          </div>
          <div class="back">
            <router-link to="/flowers">
              <h2 style="color: #ffeed5; font-family: 'Oswald', sans-serif">
                Content Flowers
                <i
                  class="bi bi-link-45deg"
                  style="font-size: 15px; position: relative; top: -15px"
                ></i>
              </h2>
            </router-link>
            <p
              style="
                font-family: EB Garamond;
                font-size: 27px;
                color: turquoise;
              "
            >
              A flower, sometimes known as a bloom or blossom, is the flowering
              plants.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md">
        <div class="flip">
          <div class="front" style="background-color: #ffeed5">
            <h1
              class="h1"
              style="color: #bf307f; font-family: 'Oswald', sans-serif"
            >
              Vehicles
            </h1>
          </div>
          <div class="back">
            <router-link to="/vehicles">
              <h2 style="color: #ffeed5; font-family: 'Oswald', sans-serif">
                Content Vehicles
                <i
                  class="bi bi-link-45deg"
                  style="font-size: 15px; position: relative; top: -15px"
                ></i>
              </h2>
            </router-link>
            <p
              style="
                font-family: EB Garamond;
                font-size: 25px;
                color: turquoise;
              "
            >
              A thing used for transporting people or goods, especially on land
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerComponent />
</template>



<script>
import headerComponent from "../components/header.vue";
import footerComponent from "../components/footer.vue";
export default {
  components: { headerComponent, footerComponent },
  name: "MainComponent",
};
</script>
<style>
.team-founder {
  font-size: 80px;
}

.profile-icons2 {
  font-size: 50px;
  text-align: center;
  color: white;
  padding-top: 20px;
  margin-bottom: -50px;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
}

/* teams card css start*/

.flip {
  position: relative;
}

.flip > .front,
.flip > .back {
  display: block;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;
}

.flip > .front {
  transform: rotateY(0deg);
}

.flip > .back {
  position: absolute;
  opacity: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: rotateY(-180deg);
}

.flip:hover > .front {
  transform: rotateY(180deg);
}

.flip:hover > .back {
  opacity: 1;
  transform: rotateY(0deg);
}

.flip.flip-vertical > .back {
  transform: rotateX(-180deg);
}

.flip.flip-vertical:hover > .front {
  transform: rotateX(180deg);
}

.flip.flip-vertical:hover > .back {
  transform: rotateX(0deg);
}

.flip {
  position: relative;
  display: inline-block;
  margin-right: 2px;
  margin-bottom: 1em;
  width: 30vw;
}

.flip > .front,
.flip > .back {
  display: block;
  color: white;
  width: inherit;
  background-size: cover !important;
  background-position: center !important;
  height: 220px;
  padding: 1em 2em;
  background: #313131;
  border-radius: 10px;
}

.flip > .front p,
.flip > .back p {
  font-size: 0.9125rem;
  line-height: 160%;
  color: #999;
}

.text-shadow {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04),
    3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04),
    0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04),
    7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04),
    9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04),
    11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04),
    13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04),
    0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04),
    17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04),
    19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
}

/* teams card end*/

@media (max-width: 767px) {
  .team-founder {
    font-size: 50px;
  }
  .flip {
    width: 80vw;
  }
}

/* for 370px less devices */

@media (max-width: 330px) {
  .logo {
    position: relative;
    left: 13%;
  }
}

.esoc-logo {
  display: block;
  max-height: 30vw;
  max-width: 30vw;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  height: 75%;
}

/*img- slideshow start here*/

/*img slideshow end here*/

/*  dont change body tag*/

.transparent {
  background: transparent !important;
}

.wrap {
  max-width: 90%;
  min-width: 200px;
  margin: 0 auto;
  position: relative;
}

.wrap.sticky {
  margin-top: 150px;
  /* set height from header */
}

.fluid .wrap {
  max-width: 100% !important;
}

@media (max-width: 728px) {
  section.cards .card {
    width: 100%;
    display: block;
    margin: 10px 0 0 0 !important;
    padding: 0;
  }
  .wrapper {
    padding: 50px 10px 100px 10px !important;
  }
}

.wrapper {
  transform-origin: center bottom 0px;
  transition: all 0.5s ease 0s;
  box-shadow: 0px 22px 54px rgba(0, 0, 0, 0.5);
  background: #111317;
  padding: 50px 50px 100px 50px;
}

/* team card desgin start */

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
}

.profile-card-2 {
  max-width: 320px;
  background-color: #fff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  background-position: center;
  overflow: hidden;
  position: relative;
  margin: 10px auto;
  cursor: pointer;
  border-radius: 10px;
}

.profile-card-2 img {
  transition: all linear 0.25s;
}

.profile-card-2 .profile-name {
  position: absolute;
  left: 30px;
  bottom: 70px;
  font-size: 30px;
  color: #fff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  transition: all linear 0.25s;
}

.profile-card-2 .profile-liner {
  opacity: 0;
  position: absolute;
  left: 30px;
  bottom: 130px;
  font-size: 20px;
  color: #fff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  transition: all linear 0.25s;
}

.profile-card-2:hover .profile-liner {
  opacity: 1;
}

.profile-card-2 .profile-icons {
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: #fff;
  transition: all linear 0.25s;
}

.profile-card-2 .profile-username {
  position: absolute;
  bottom: 50px;
  left: 30px;
  color: #fff;
  font-size: 13px;
  transition: all linear 0.25s;
}

.profile-card-2 .profile-icons .fa {
  margin: 5px;
}

.profile-card-2:hover img {
  filter: grayscale(100%);
}

.profile-card-2:hover .profile-name {
  bottom: 80px;
}

.profile-card-2:hover .profile-username {
  bottom: 60px;
}

.profile-card-2:hover .profile-icons {
  right: 40px;
}

/* team card design end */

/* text reveal animation start*/

.text {
  color: #eee;
}

.has-animation {
  position: relative;
}

.has-animation p,
.has-animation img {
  opacity: 0;
}

.has-animation.animate-in p,
.has-animation.animate-in img {
  animation: textHidden 0.1s 1.1s forwards;
}

.has-animation.animate-in:before,
.has-animation.animate-in:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 10;
}

.has-animation.animate-in:before {
  background-color: #eee;
}

.has-animation.animate-in:after {
  background-color: #baff00;
  animation-delay: 0.5s;
}

.has-animation.animation-ltr.animate-in:before {
  animation: revealLTR 1.8s ease;
}

.has-animation.animation-ltr.animate-in:after {
  animation: revealLTR 1s 0.6s ease;
}

.has-animation.animation-rtl.animate-in:before {
  animation: revealRTL 1.8s ease;
}

.has-animation.animation-rtl.animate-in:after {
  animation: revealRTL 1s 0.6s ease;
}

@keyframes revealRTL {
  0% {
    width: 0;
    right: 0;
  }
  65% {
    width: 100%;
    right: 0;
  }
  100% {
    width: 0;
    right: 100%;
  }
}

@keyframes revealLTR {
  0% {
    width: 0;
    left: 0;
  }
  65% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes textHidden {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomInDown {
  -webkit-animation-name: zoomInDown;
  animation-name: zoomInDown;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

/* revel animation end*/

@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

/* fade in down animation start used for the founders , */

@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

/* fadein down animation end*/
</style>
