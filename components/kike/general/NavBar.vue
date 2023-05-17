<template>
  <nav :class="{ 'bottom-gradient': scrollTop / 100 > 1, 'padding-0': isNavbarExpanded }">
    <div v-if="!isMobileMenuVisible" class="nav-item">
      <NuxtLink to="/" class="logo-link">
        <img src="~assets/img/kk/logo.png" alt="">
      </NuxtLink>
      <div id="mobile-menu" class="link-items">
        <ul>
          <li>
            <NuxtLink to="/" :class="{'active':isLinkActive('/')}">
              // Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-us" :class="{'active':isLinkActive('/about-us')}">
              // About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#about" :class="{'active':isLinkActive('/#about')}">
              //  Work
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#footer" :class="{'active':isLinkActive('/#footer')}">
              // Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div v-else-if="!isNavbarExpanded" class="nav-item">
      <NuxtLink to="/" class="logo-link">
        <img src="~assets/svg/kk/logo-mobile.svg" alt="">
      </NuxtLink>
      <button
        type="button"
        data-cy="navbar-open"
        class="button-toggle"
        aria-controls="mobile-menu"
        aria-expanded="false"
        @click="toggleNavbar"
      >
        <img class="w-22" src="~assets/svg/kk/menu.svg" alt="">
      </button>
      <div v-if="isNavbarExpanded" :style="{ backgroundImage: 'url(/img/background.png)' }" class="link-items expanded">
        <NuxtLink to="/" class="logo-link">
          <img src="~assets/svg/kk/logo-mobile.svg" alt="">
        </NuxtLink>
      </div>
    </div>
    <div v-else class="nav-item expanded">
      <div class="flex w-full items-center justify-between">
        <NuxtLink to="/" class="logo-link">
          <img src="~assets/svg/kk/logo-mobile.svg" alt="">
        </NuxtLink>
        <button
          type="button"
          class="button-toggle"
          aria-controls="mobile-menu"
          aria-expanded="false"
          @click="toggleNavbar"
        >
          <img class="w-22" src="~assets/svg/kk/close.svg" alt="">
        </button>
      </div>
      <div class="link-items">
        <ul>
          <li @click="visitLink">
            <NuxtLink to="/" aria-current="page" :class="{'active':isLinkActive('/')}">
              // Home
            </NuxtLink>
          </li>
          <li @click="visitLink">
            <NuxtLink to="/about-us" :class="{'active':isLinkActive('/about-us')}">
              // About
            </NuxtLink>
          </li>
          <li @click="visitLink">
            <NuxtLink to="/#about" :class="{'active':isLinkActive('/#about')}">
              //  Work
            </NuxtLink>
          </li>
          <li @click="visitLink">
            <NuxtLink to="/about-us/#footer" :class="{'active':isLinkActive('/#footer')}">
              // Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="opacity-0">
        .
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
function isLinkActive (path: string) {
        if (route.hash) {
          return route.hash === path.slice(1)
        } else {
          return route.path === path
        }
    }
const isNavbarExpanded = ref(false)

const scrollTop = ref(0)
const isMobileMenuVisible = ref(false)

const toggleNavbar = () => {
  isNavbarExpanded.value = !isNavbarExpanded.value
}

const visitLink = () => {
  isNavbarExpanded.value = false
}
function setScrollTop () {
  scrollTop.value = document.scrollingElement!.scrollTop
}

function handleResize (): void {
  if (window.innerWidth >= 800) {
    isMobileMenuVisible.value = false
  } else {
    isMobileMenuVisible.value = true
  }
}

onBeforeMount(() => {
  window.addEventListener('scroll', setScrollTop)
  window.addEventListener('resize', handleResize)
  setScrollTop()
  handleResize()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', setScrollTop)
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
.active {

  color: $font-color !important;
}
.padding-0 {
  padding: 0 !important;
}

nav {
  @apply w-full fixed z-30 top-0 px-4 py-8;
      background-color: #131212;
  color: #595959;

  .nav-item {
    @apply max-w-6xl flex flex-wrap justify-between items-center mx-auto ;

    .logo-link {
      img {
        @apply py-1.5 h-10;
      }
    }

    .link-items {
      @apply w-full block md:w-auto;
      width: 500px;

      ul {
        @apply flex flex-col justify-between mt-4 md:flex-row md:mt-0 md:text-sm items-center;
        li {
          @apply block text-base font-medium md:bg-transparent md:p-0 tracking-wider;
          color: white;
          font-family: "Source Code Pro SemiBold";
          font-style: italic;
          a {
            @apply cursor-pointer;
            &:hover {
              color: $font-color;
            }
          }

          &:active {
            color: #00E1DD;
          }
        }
      }
    }

    .button-toggle {
      @apply p-2 cursor-pointer h-3 flex items-center text-lg font-bold;

      img {
        @apply ml-3 w-5 h-5;
      }
    }
    .phone{
      @apply flex items-center gap-5 px-4;
      a {
        @apply pb-1;
        font-family: 'Mulish Bold';
      }
      span {
        @apply text-base uppercase text-left;
        color: #E65928;
      }
  }
  }

  .expanded {
    @apply h-screen items-start;
    padding: 0.5rem 1rem;

    .link-items {
      @apply px-2 w-full;

      ul {
        @apply flex flex-col justify-between h-full mb-8;

        li {
          @apply h-full lg:text-4xl text-5xl w-full py-4 mb-8;

          @media (max-width: 550px) {
            font-size: 2rem;
          }

          @media (max-width: 450px) {
            @apply py-2;
            font-size: 1.6rem;
          }

          @media (max-width: 380px) {
            font-size: 1.3rem;
          }

        }
      }
    }
  }
  .phone,
  .email {
      @apply flex items-center gap-5 px-4;
      a {
        @apply pb-1;
        font-family: 'Mulish Bold';
      }
      span {
        @apply text-base uppercase text-left;
        color: #E65928;
      }
  }
  .mobile {
    @apply flex-col;
    .phone {
      @apply flex-col items-start gap-5 px-4;
      a {
        @apply pb-1;
        font-family: 'Mulish Bold';
      }
      span {
        @apply text-base uppercase text-left;
        color: #E65928;
      }
    }
    .email {
      @apply flex-col gap-3 items-start px-4 my-8;
      span {
          @apply text-base uppercase text-left;
          color: #E65928;
        }
    }
    img {
     @apply px-4 my-4;
    }
  }
}
</style>
