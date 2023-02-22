<template>
  <div>
    <div class="navbar">
      <div class="menu">
        <a href="#"><img src="~assets/svg/kike.svg" alt="kike image" class="kike"></a>
        <p>Kike</p>
      </div>

      <div class="icons">
        <div class="about">
          <a href="#"><img src="~assets/svg/about.svg" alt="about"></a>
          <p>about</p>
        </div>
        <div class="design">
          <a href="#"><img src="~assets/svg/design.svg" alt="design"></a>
          <p>design</p>
        </div>
        <div class="features">
          <a href="#"><img src="~assets/svg/features.svg" alt="features"></a>
          <p>features</p>
        </div>
        <div class="manuals">
          <a href="#"><img src="~assets/svg/manuals.svg" alt="manuals"></a>
          <p>manuals</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  overflow: hidden;
  color: rgba(0, 165, 210, 1);
  box-shadow: 0 1px 3px rgb(27, 26, 26);

  & .menu {
    margin-left: 3rem;

    & .kike {
      width: 10%;

      &:hover {
        color: orange;
        border-bottom: 2px solid orange;
      }
    }
  }

  & .icons {
    display: inline-flex;
    //flex-direction: row;
    //margin-left: 1rem;
    text-align: center;
    margin-left: 23rem;

    & .about {
      padding: 0;
      margin-right: -1rem;

      &:hover {
        color: #63b910;
        border-bottom: 2px solid #63b910;
      }

      & img {
        width: 10%;
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
        }
      }
    }
  }

  & a {
    text-decoration: none;
  }

}
</style>
