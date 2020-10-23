<template>
  <div class="home">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light mx-4  p-4">
        <a class="navbar-brand text-uppercase" href="#">fashion addict</a>
        <button
          type="button"
          id="sidebarCollapse"
          class="btn navbar-btn mr-4 active p-0"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="navbar-nav ml-auto">
          <font-awesome-icon icon="search" />
        </ul>
      </nav>
    </div>
    <div id="header-container">
      <header>
        <div>
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              caption="First slide"
              img-src="https://picsum.photos/1024/480/?image=10"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Second Slide"
              img-src="https://picsum.photos/1024/480/?image=12"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Third Slide"
              img-src="https://picsum.photos/1024/480/?image=22"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
#sidebarCollapse {
  width: 30px;
  height: 40px;
  cursor: pointer;
}

#sidebarCollapse:focus {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
#sidebarCollapse span {
  width: 80%;
  height: 2px;
  margin: 0 auto;
  display: block;
  background: #555;
  transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375);
  transition-delay: 0.2s;
}

#sidebarCollapse span:first-of-type {
  transform: rotate(45deg) translate(2px, 2px);
}

#sidebarCollapse span:nth-of-type(2) {
  opacity: 0;
}

#sidebarCollapse span:last-of-type {
  transform: rotate(-45deg) translate(1px, -1px);
}

#sidebarCollapse.active span {
  transform: none;
  opacity: 1;
  margin: 5px auto;
}

#header-container {
  header {
    margin-left: 16.5rem;
  }
}
</style>
