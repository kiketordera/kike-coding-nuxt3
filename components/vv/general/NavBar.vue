<template>
  <nav>
    <div class="logo">
      <a href="#">
        <img src="~assets/svg/vv/kike.svg" alt="kike-image" class="logo-img">
      </a>
      <p>Kike</p>
    </div>
    <div class="nav-items">
      <ul>
        <NuxtLink to="/projects/value-villages/about">
          <li>
            <img class="a" src="~assets/svg/vv/about.svg" alt="">
            <p>About</p>
          </li>
        </NuxtLink>
        <NuxtLink to="/projects/value-villages/design">
          <li>
            <img class="b" src="~assets/svg/vv/design.svg" alt="">
            <p>Design</p>
          </li>
        </NuxtLink>
        <NuxtLink to="/projects/value-villages/features">
          <li>
            <img class="b" src="~assets/svg/vv/features.svg" alt="">
            <p>Features</p>
          </li>
        </NuxtLink>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
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
    padding-top: 9px;
    margin-bottom: 0.2rem;

    & .logo-img {
      width:  27px;
      padding-top: 5px;
      margin: 0 auto;

      &:hover {
        color: orange;
        border-bottom: 2px solid orange;
      }
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
        padding: 0;
        display: inline-block;
        align-items: center;
        gap: 2rem;
        padding-right: 1rem;
        cursor: pointer;

        img {

          &.a{
            max-width: 19px;
            max-height: 37px;
          }

          &.b {
            max-width: 25px;
            max-height: 40px;
          }

          padding-top: 5px;
          margin: 0 auto;

          &:hover {
            color: #63b910;
          }
        }

        &:hover {
          color: #63b910;
          border-bottom: 2px solid #63b910;
        }

        p {
          font-size: 0.8rem;
          letter-spacing: 0.05em;
        }

      }
    }

    & .design {
      &:hover {
        color: #ED037C;
        border-bottom: 2px solid #ED037C;
      }

      & img {
        width: 30%;
      }

    }

    & .features {
      &:hover {
        color: #f7941d;
        border-bottom: 2px solid #f7941d;
      }

      & img {
        width: 20%;
      }

    }

    & .manuals {
      padding: 0;
      margin-left: -2rem;
      margin-right: -3rem;

      &:hover {
        color: #a97c50;
        border-bottom: 2px solid #a97c50;
      }

      & img {
        width: 10%;

        &:hover {
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
