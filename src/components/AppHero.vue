<template>
  <header class="header row jcc aic">
    <div class="container">
      <h1 class="header__title">The joke bible</h1>
      <p class="header__subtitle">
        Daily Laughs for you and yours
      </p>

      <div class="header__search">
        <input type="text" placeholder="How can we make you laugh today" aria-label="Search jokes">
      </div>
    </div>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(rgba($color: #000, $alpha: 0.3), rgba($color: #000, $alpha: 0.3)),
              url('~@/assets/header-img.png'),
              no-repeat;
  min-height: 300px;
  background-size: cover;
  color: #FFF;
  text-align: center;

  /* > div {
    max-width: 100%;
  } */

  &__title {
    color: #cfb995;
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: normal;
    margin: 0 10px;
  }

  &__subtitle {
    font-weight: 600;
    font-size: 1.3rem;
    margin: 5px 0 20px;
  }

  &__search {
    input {
      border: 1px solid #FFF;
      background-color: transparent;
      background-image: url('~@/assets/icons/search.svg');
      background-position: calc(100% - 16px) center;
      background-repeat: no-repeat;
      min-height: 50px;
      width: 450px;
      max-width: 100%;
      padding: 0 16px;
      border-radius: 4px;
      margin-top: 30px;

      &::placeholder {
        color: #b2b2b2;
      }
    }
  }
}
</style>
