<template>
  <div class="home">
    <section class="container" :aria-busy="loadingJokes === true">
      <template v-if="loadingJokes">
        <div class="loader" aria-label="Loading jokes"></div>
      </template>
      <template v-else>
        <div class="categories">
          <button
            v-for="cat in categories"
            :key="cat.title"
            class="category"
            :style="{ 'background-color': cat.color }"
            aria-controls="jokes"
            @click="activeCategory = cat"
          >
            {{ cat.title }}
          </button>
          <button
            class="category category--all"
            @click="activeCategory = { title: 'all', color: null }"
          >
            View All
            <img src="@/assets/icons/arrow-down.svg" alt="" aria-hidden="true">
          </button>
        </div>

        <div class="jokes">
          <div
            class="active-joke row jcc aic"
            :style="{ 'background-color': activeCategory.color || '#d1bb91' }"
          >
            {{ activeCategory.title }}
          </div>
          <div class="jokes-container">
            Hello Bro
          </div>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {},
  data: () => ({
    activeCategory: {
      title: 'all',
      color: null,
    },
    categories: [
      {
        title: 'adult jokes',
        color: '#ff5b5b',
      },
      {
        title: 'dad jokes',
        color: '#ff915b',
      },
      {
        title: 'christmas jokes',
        color: '#ffbe5b',
      },
      {
        title: 'job jokes',
        color: '#ffdf5b',
      },
      {
        title: 'birthday jokes',
        color: '#8fe360',
      },
      {
        title: 'social jokes',
        color: '#57e690',
      },
      {
        title: 'puns',
        color: '#57dbe6',
      },
    ],
    currentPage: 0,
    loadingJokes: true,
    perPage: 20,
  }),
  computed: {
    ...mapState('jokes', ['jokes']),
  },
  mounted() {
    this.getAllJokes();
  },
  methods: {
    ...mapActions('jokes', ['fetchJokes']),
    getAllJokes() {
      this.loadingJokes = true;
      this.fetchJokes().then(() => {
        this.loadingJokes = false;
        this.$toast.error('Something went wrong, please refresh');
      }).catch(() => {
        this.loadingJokes = false;
        this.$toast.error('Something went wrong, please refresh');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 40px 0;

  @media screen and (min-width: 768px) {
    padding: 80px 0;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .loader {
    width: 100px;
    height: 100px;
    margin: 20px auto;
    border-radius: 50%;
    border: 5px solid #ddd;
    border-top-color: #d1bb91;
    animation: spin 1s linear infinite;
  }

  .categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;

    .category {
      color: #FFF;
      min-height: 45px;
      border-radius: 2px;
      border: none;
      font-weight: 600;
      text-transform: uppercase;

      &:focus {
        outline: 1px solid #5e5e5e;
        color: #5e5e5e;
      }

      &--all {
        background-color: transparent;
        border: 1px solid #d1bb91;
        color: #d1bb91;
        position: relative;

        img {
          position: absolute;
          right: 15px;
        }

        &:focus {
          outline: 1px solid #5e5e5e;
          color: #5e5e5e;
        }
      }
    }
  }

  .jokes {
    margin: 30px 0;
    padding-top: 30px;
    border-top: 1px solid #ecebe9;
    position: relative;

    .active-joke {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 15px;
      padding: 5px 20px;
      font-size: .8rem;
      font-weight: 600;
      color: #FFF;
      text-transform: uppercase;
    }
  }

  .jokes-container {
    margin: 20px 0;
  }
}
</style>
