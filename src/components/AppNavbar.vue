<template>
  <nav class="nav">
    <div class="container">
      <div class="row jcb aic">
        <router-link to="/">
          <img src="@/assets/icons/logo.svg" alt="Vehiculum logo">
        </router-link>
        <ul
          id="nav"
          class="nav-items row aic"
          :class="showNav ? 'nav-items--open' : null"
        >
          <li class="nav-items__link"><a href="#">SO FUNKTIONIERT’S</a></li>
          <li class="nav-items__link"><a href="#">SONDERANGEBOTE</a></li>
          <li class="nav-items__dropdown">
            <button
              type="button"
              class="nav-items__dropdown__title aic row"
              aria-expanded="false"
              aria-controls="nav-dropdown"
              @click="handleDropdownClick"
            >
              <div class="row aic">
                <img src="@/assets/icons/user.svg" aria-hidden="true" alt="" class="mr-1">
                Mein Bereich
              </div>
              <img
                src="@/assets/icons/caret-down.svg"
                aria-hidden="true"
                alt=""
                class="nav-items__dropdown__icon"
              >
            </button>
            <ul class="nav-items__dropdown__menu" id="nav-dropdown">
              <li><a href="#">My published jokes</a></li>
              <li><a href="#">My saved jokes</a></li>
              <li><a href="#">Account Information</a></li>
              <li><a href="#" class="text--primary text-weight-medium">Publish new joke</a></li>
            </ul>
          </li>
        </ul>
        <button
          aria-controls="nav"
          class="nav__toggle"
          :class="showNav ? 'nav__toggle--open' : null"
          @click="toggleNav"
        >
          <div />
          <div />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    showNav: false,
  }),
  methods: {
    handleDropdownClick() {
      const button = document.querySelector('.nav-items__dropdown__title');
      const isOpen = button.getAttribute('aria-expanded') === 'true' || false;
      document.querySelector('.nav-items__dropdown').classList.toggle('open');
      console.log(isOpen);
      button.setAttribute('aria-expanded', !isOpen);
    },
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: #303030;
  padding: 15px 0;
  color: #FFF;

  ul {
    list-style-type: none;
    padding-left: 0;

    a {
      color: #FFF;
      text-decoration: none;
    }
  }

  .nav-items {
    margin: 0;
    display: none;

    @media screen and (max-width: 992px) {
      &--open {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        background-color: #303030;
        top: 60px;
        height: 100%;
        left: 0;
        z-index: 1;

        li {
          margin: 20px;
        }
      }
    }

    @media screen and (min-width: 993px) {
      display: flex;
    }

    &__link {
      margin: 0 10px;
    }

    &__dropdown {
      position: relative;

      &.open {
        .nav-items__dropdown__menu {
          opacity: 1;
          transform: rotateX(0);
          visibility: visible;
        }
      }

      &__title {
        background-color: #cfb995;
        min-height: 50px;
        color: #FFF;
        border: none;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        padding: 0 20px;
      }

      &__icon {
        margin-left: 20px;
      }

      &__menu {
        background-color: #FFF;
        border-radius: 4px;
        padding: 10px;
        color: #303030;
        position: absolute;
        width: 100%;
        box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.15);
        margin-top: 15px;

        transform: rotateX(-90deg);
        transform-origin: top center;
        opacity: 0.3;
        visibility: hidden;
        transition: .1s all .15s ease-in;

        &::after {
          content: '';
          position: absolute;
          border-bottom: 10px solid #FFF;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          top: 0;
          right: 10px;
          transform: translateY(-100%);
        }

        li {
          margin-bottom: 2px;
          padding: 5px;
        }

        li:not(:last-child) {
          border-bottom: 1px solid rgba(48, 48, 48, 0.2);
        }

        a {
          color: #303030;
        }
      }
    }
  }

  &__toggle {
    border: none;
    background-color: transparent;

    @media screen and (min-width: 993px) {
      display: none;
    }

    div {
      width: 30px;
      height: 2px;
      background-color: #FFF;
      margin: 7px 0;
      transition: transform .2s ease;
      /* transform-origin: 50%; */
    }

    &--open {
      div:first-child {
        transform: rotate(45deg);
        top: 4px;
        left: 1px;
        position: relative;
      }
      div:last-child {
        transform: rotate(-45deg);
        top: -5px;
        position: relative;
      }
    }
  }
}
</style>
