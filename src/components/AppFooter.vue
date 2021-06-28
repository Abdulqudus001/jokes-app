<template>
  <header class="footer row aic">
    <div class="container">
      <h2 class="footer__title">
        Got jokes? Get paid for submitting!
      </h2>
      <a class="footer__subtitle" href="/">
        Submit joke
        <img src="@/assets/icons/arrow-right.svg" alt="" aria-hidden="true">
      </a>
    </div>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(rgba($color: #000, $alpha: 0.3), rgba($color: #000, $alpha: 0.3)),
              url('~@/assets/footer-img.webp'),
              no-repeat;
  min-height: 200px;
  background-size: cover;
  color: #FFF;
  text-transform: uppercase;

  &__title {
    font-weight: 600;
    font-size: 1rem;
    margin: 10px 0;
    max-width: 200px;
  }

  &__subtitle {
    color: #cfb995;
    font-weight: 600;
    font-size: 0.9rem;
    margin: 10px 0;
    text-decoration: none;
  }
}
</style>
