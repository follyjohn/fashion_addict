<template>
  <div>
    <Navbar></Navbar>
    <section>
      <div class="container pt-50">
        <h1>Categorie de Djourag</h1>
        <div class="row py-4">
          <div class="col-lg-3">
            <div id="add-btn" class="card c-card rounded-25">
              <div class="card rounded-25 h-100 m-0 p-0">
                <span id="symbole-verticale"></span>
                <span id="symbole-horizontale"></span>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
          <div class="col-lg-3">
            <div class="card c-card rounded-25"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../../components/admin/Navbar.vue";

export default {
  components: {
    Navbar
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "cat1",
          description: "une cat",
          color: "#745dd",
          image: "https://picsum.photos/200/300"
        },
        {
          id: 2,
          name: "cat1",
          description: "une cat",
          color: "#745dd",
          image: "https://picsum.photos/200/300"
        },
        {
          id: 3,
          name: "cat1",
          description: "une cat",
          color: "#745dd",
          image: "https://picsum.photos/200/300"
        },
        {
          id: 4,
          name: "cat1",
          description: "une cat",
          color: "#745dd",
          image: "https://picsum.photos/200/300"
        },
        {
          id: 5,
          name: "cat1",
          description: "une cat",
          color: "#745dd",
          image: "https://picsum.photos/200/300"
        },
        {
          id: 6,
          name: "cat1",
          description: "une cat",
          color: "#745dd",
          image: "https://picsum.photos/200/300"
        },
        {
          id: 7,
          name: "cat1",
          description: "une cat",
          color: "#745dd",
          image: "https://picsum.photos/200/300"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.c-card {
  width: 15rem;
  height: 15rem;
}
#add-btn {
  width: 15rem;
  height: 15rem;
  padding: 1.5rem;
  border: 1px solid #555 !important;
  .card {
    border: 1px solid #555 !important;
  }
}

.rounded-25 {
  border-radius: 2.2rem;
}

#symbole-verticale {
  width: 80%;
  height: 1px;
  margin: auto;
  display: block;
  background: #555;
}
#symbole-horizontale {
  width: 80%;
  height: 1px;
  display: block;
  margin: auto 0;
  background: #555;
  margin: 0 auto;
  transform: rotate(90deg) translate(1px, 1px);
  position: relative;
  top: -6rem;
}
</style>
