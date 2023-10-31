<template>
  <nav>
    <div
      class="logo"
      @mouseover="kike = '/svg/vv/navbar/kike-hover.svg'"
      @mouseleave="kike = '/svg/vv/navbar/kike.svg'"
    >
      <NuxtLink to="/">
        <img :src="kike" alt="kike-image" class="logo-img">
        <p>Kike</p>
      </NuxtLink>
    </div>
    <div class="nav-items">
      <ul>
        <NuxtLink to="/projects/value-villages/" :class="{'green' : getCurrentRoute === '/projects/value-villages/'}">
          <li
            class="about"
            @mouseover="about = '/svg/vv/navbar/about-hover.svg'"
            @mouseleave="about = '/svg/vv/navbar/about.svg'"
          >
            <img class="a" :src=" getCurrentRoute === '/projects/value-villages/' ? '/svg/vv/navbar/about-hover.svg' : about" alt="">
            <p>About</p>
          </li>
        </NuxtLink>
        <NuxtLink to="/projects/value-villages/design" :class="{'pink' : getCurrentRoute === '/projects/value-villages/design'}">
          <li
            class="design"
            @mouseover="design = '/svg/vv/navbar/design-hover.svg'"
            @mouseleave="design = '/svg/vv/navbar/design.svg'"
          >
            <img class="b" :src="getCurrentRoute==='/projects/value-villages/design' ? '/svg/vv/navbar/design-hover.svg' : design" alt="">
            <p>Design</p>
          </li>
        </NuxtLink>
        <NuxtLink to="/projects/value-villages/features" :class="{'orange':getCurrentRoute==='/projects/value-villages/features'}">
          <li
            class="features"
            @mouseover="features = '/svg/vv/navbar/features-hover.svg'"
            @mouseleave="features = '/svg/vv/navbar/features.svg'"
          >
            <img class="b" :src=" getCurrentRoute==='/projects/value-villages/features'?'/svg/vv/navbar/features-hover.svg':features" alt="">
            <p>Features</p>
          </li>
        </NuxtLink>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>

const router = useRouter()

const kike = ref('/svg/vv/navbar/kike.svg')
const about = ref('/svg/vv/navbar/about.svg')
const design = ref('/svg/vv/navbar/design.svg')
const features = ref('/svg/vv/navbar/features.svg')

const getCurrentRoute = computed(() => {
  return router.currentRoute.value.fullPath
})
</script>

<style lang="scss" scoped>
.about {
  border-bottom: 2px solid white;
  &:hover {
    color: $branding-green;
    border-bottom: 2px solid $branding-green;
  }
}
.green {
  color: $branding-green;
  li {
    border-bottom: 2px solid $branding-green;
  }
}
.design {
  border-bottom: 2px solid white;
  &:hover {
    color: $branding-pink;
    border-bottom: 2px solid $branding-pink;
  }
}
.pink {
  color: $branding-pink;
  li {
    border-bottom: 2px solid $branding-pink;
  }
}
.features {
  border-bottom: 2px solid white;
  &:hover {
    color: $branding-orange;
    border-bottom: 2px solid $branding-orange;
  }
}
.orange {
  color: $branding-orange;
  li {
    border-bottom: 2px solid $branding-orange;
  }
}

* {
    font-family: $nunito-regular;
    background-color: white;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  top: 0;
  color: rgba(0, 165, 210, 1);
  position: fixed;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.3);
  background-color: white;
  z-index: 10;

  & .logo {
    margin: 0rem 1rem;
    font-size: 12px;
    padding: 0rem 1rem;
    padding-top: 9px;
    border-bottom: 2px solid white;
    cursor: pointer;
    &:hover
     {
      color: #f7941d;
      border-bottom: 2px solid #f7941d;
    }

    & .logo-img {
      width:  27px;
      // padding-top: 5px;
      margin: 0 auto;
    }
  }

  & .nav-items {
    display: inline-flex;
    text-align: center;
    font-weight: 400;

    ul {
      display: flex;
      align-items: flex-end;

      li {
        padding: 0rem 1rem;
        display: inline-block;
        align-items: center;
        gap: 2rem;
        cursor: pointer;

        img {

          &.a{
            width: 19px;
            height: 37px;
          }

          &.b {
            width: 25px;
            height: 37px;
          }

          padding-top: 5px;
          margin: 0 auto;

        }

        // border-bottom: 2px solid white;
        // &:hover,
        // &.active {
        //   color: $branding-green;
        //   border-bottom: 2px solid $branding-green;
        // }

        p {
          font-size: 0.8rem;
          letter-spacing: 0.05em;
        }

        & .features {
          &:hover,
          &.active {
            color: #f7941d;
            border-bottom: 2px solid #f7941d;
          }
        }
        & .manuals {
          padding: 0;
          margin-left: -2rem;
          margin-right: -3rem;

          &:hover,
          &.active {
            color: #a97c50;
            border-bottom: 2px solid #a97c50;
          }

          & img {
            width: 10%;

            &:hover,
              &.active {
              background-color: #a97c50;

              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: "Nunito" !important;
              }
            }
          }
        }
    }
    }

    & a {
      text-decoration: none;
    }

    nav {
      display: flex;
      color: #00a3d2;
      box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.3);
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 0 -1rem;
      position: fixed;
      top: 0;
      background-color: #212b36;

      .menu {
        padding-left: 20px;

        a.kike:hover {
          border-bottom: 2px solid orange;
        }

        a {
          list-style-type: none;
          text-decoration: none;
          text-align: center;

          img {
            height: 25px;
          }
        }
      }
    }
  }
}
</style>
