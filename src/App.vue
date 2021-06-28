<template>
  <div id="app">
    <app-navbar />
    <app-hero />
    <router-view/>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import AppHero from '@/components/AppHero.vue';

export default {
  components: { AppNavbar, AppHero },
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
