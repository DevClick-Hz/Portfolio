<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#about">About</b-nav-item>
        <b-nav-item href="#skills">Skills</b-nav-item>
        <b-nav-item href="#projects">Projects</b-nav-item>
        <b-nav-item href="#contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  mounted() {
    const navbars = document.querySelector(".bg-dark");
    const navOff = navbars.offsetTop;
    window.document.onscroll = () => {
      if (window.scrollY > navOff) {
        navbars.classList.add("sticky");
        document.body.style.paddingTop = navbars.offsetHeight + "px";
      } else {
        navbars.classList.remove("sticky");
        document.body.style.paddingTop = 0;
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.sticky {
  position: fixed !important;
  top: 0;
  width: 100%;
  z-index: 9999;
  box-shadow: 0 5px 5px black;
  a {
    letter-spacing: 2px;
    font-size: 1.2rem !important;
    margin: 0 2rem !important;
    transition: all 0.5s ease-in-out;
  }
}
.bg-dark {
  background: #222831 !important;
  justify-content: center;
  .navbar-nav {
    flex-wrap: wrap;
    a {
      color: white;
      font-size: 1.4rem;
      margin: 0 4rem;
      letter-spacing: 1px;
      transition: all 0.5s ease-in-out;
      &:hover {
        color: #ee6f57;
      }
      &:focus {
        color: white;
      }
    }
  }
}
.active a {
  color: #ee6f57 !important;
}
@media screen and (max-width: 575.98px) {
  .bg-dark {
    display: none;
  }
}
@media screen and(min-width: 576px) and(max-width: 767px) {
  .bg-dark {
    .navbar-nav {
      flex-wrap: wrap;
      a {
        color: white;
        font-size: 1.2rem;
        margin: 0 1rem;
        &:hover {
          color: #ee6f57;
        }
        &:focus {
          color: white;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) and(max-width: 991.98px) {
  .bg-dark {
    .navbar-nav {
      flex-wrap: wrap;
      a {
        color: white;
        font-size: 1.4rem;
        margin: 0 2rem;
        &:hover {
          color: #ee6f57;
        }
        &:focus {
          color: white;
        }
      }
    }
  }
}
</style>
