<template>
  <div class="home">
    <navbar></navbar>
    <div id="header-container">
      <header>
        <div class="row p-0 m-0">
          <div id="salutation" class="col m-0 p-0">
            <div class="row h-100"></div>
          </div>
          <div class="col-9 p-0">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              img-width="738"
              img-height="480"
            >
              <b-carousel-slide
                caption="First slide"
                img-src="https://picsum.photos/738/480/?image=10"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Second Slide"
                img-src="https://picsum.photos/738/480/?image=12"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Third Slide"
                img-src="https://picsum.photos/738/480/?image=22"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </header>
    </div>
    <section></section>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../../components/public/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped></style>
