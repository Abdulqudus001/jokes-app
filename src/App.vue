<template>
  <main id="app">
    <app-navbar />
    <app-hero />
    <router-view/>
    <app-footer />
    <button
      aria-label="Scroll to top"
      class="scroll-top row aic jcc"
      @click="scrollToTop"
    >
      <img src="@/assets/icons/arrow-down.svg" alt="" aria-hidden="true">
    </button>
  </main>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppHero from '@/components/AppHero.vue';

export default {
  components: { AppNavbar, AppHero, AppFooter },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
* {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  color: #303030;
  background-color: #f9f9f9;
  margin: 0;
}

.container {
  width: 1366px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}

.row {
  display: flex;
}

.jcc {
  justify-content: center;
}

.jcb {
  justify-content: space-between;
}

.aic {
  align-items: center;
}

.d-none {
  display: none;
}

.d-md-flex {
  @media screen and (min-width: 768px) {
    display: flex;
  }
}

.mr-1 {
  margin-right: .75rem;
}

.text--primary {
  color: #cfb995 !important;
}

.text-weight-bold {
  font-weight: 700;
}

.text-weight-medium {
  font-weight: 600;
}
</style>

<style lang="scss" scoped>
.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #cfb995;
  background-color: #FFF;
  img {
    transform: rotate(180deg);
  }
}
</style>
