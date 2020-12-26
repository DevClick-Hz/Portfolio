<template>
  <div>
    <div class="wrap" id="about">
      <b-jumbotron>
        <h1>Hi!</h1>
        <h3>I'm <span class="highlight">Hamza</span></h3>
        <h1><span class="highlight">A front-end </span> web developer</h1>
        <h4>
          As a person who loves solving problems and technology, coding is the
          most <span class="highlight">fun and challenging</span> thing I do,
          and building stuff used by many people is one of my goals as it makes
          me proud.
        </h4>
        <a href="#skills"
          ><b-button variant="outline-primary"
            >Know More <i class="fas fa-arrow-down"></i></b-button
        ></a>
      </b-jumbotron>
      <img src="../assets/me.svg" />
    </div>
    <div class="social">
      <a
        href="https://www.linkedin.com/in/hamza-zaitoun-b88280102/"
        target="_blank"
        ><i class="fab fa-linkedin fa-2x"></i
      ></a>
      <a href="https://github.com/DevClick-Hz" target="_blank"
        ><i class="fab fa-github-square fa-2x"></i
      ></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "top"
};
</script>
<style lang="scss" scoped>
.wrap {
  background-color: #222831;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  img {
    max-height: 600px;
    max-width: 500px;
  }
}
.jumbotron {
  background: none;
  color: white;
  border-radius: 0;
  text-align: left;
  width: 60%;
  h1 {
    font-size: 4rem;
    letter-spacing: 3px;
  }
  h3 {
    font-size: 2.7rem;
    letter-spacing: 3px;
  }
  h4 {
    letter-spacing: 1px;
  }
  .highlight {
    color: #ee6f57;
  }
  .btn-outline-primary {
    background-color: #ffffff;
    color: #ee6f57;
    border: none;
    outline: none;
    box-shadow: none !important;
    border: 2px solid #ee6f57;
  }
  .btn-outline-primary:hover,
  .btn-outline-primary:focus,
  .btn-outline-primary:active {
    background: #ee6f57 !important;
    color: white;
    border: 2px solid #ee6f57;
  }
  .carousel-control-prev,
  .carousel-control-next {
    background-color: #222831;
  }
}
.social {
  position: fixed;
  right: 0;
  top: 45vh;
  display: flex;
  z-index: 10;
  flex-direction: column;
  padding: 0 10px;
  a {
    color: #ee6f57;
  }
}
@media screen and (max-width: 575.98px) {
  .jumbotron {
    width: 100%;
    margin: 0;
    padding: 1.5rem 0.5rem;
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
  .wrap {
    img {
      max-height: 200px;
      max-width: 200px;
    }
  }
  .social {
    top: 20vh;
  }
}
@media screen and(min-width: 576px) and(max-width: 767px) {
  .wrap {
    flex-direction: column-reverse;
    height: 80vh;
  }
  .jumbotron {
    width: 100%;
    margin: 0;
    padding: 1.5rem 0.5rem;
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
  .wrap {
    img {
      max-height: 200px;
      max-width: 200px;
    }
  }
  .social {
    top: 20vh;
  }
}
@media screen and (min-width: 768px) and(max-width: 991.98px) {
  .wrap {
    flex-direction: column-reverse;
    height: 100vh;
  }
  .jumbotron {
    width: 100%;
    margin: 0;
    padding: 1.5rem 0.5rem;
    h1 {
      font-size: 2.3rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 1.3rem;
    }
  }
  .wrap {
    img {
      max-height: 200px;
      max-width: 200px;
    }
  }
}
@media screen and (min-width: 992px) and(max-width: 1199.98px) {
  .wrap {
    height: 100vh;
  }
  .jumbotron {
    margin: 0;
    padding: 1.5rem 0.5rem;
    h1 {
      font-size: 2.3rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 1.3rem;
    }
  }
  .wrap {
    img {
      max-height: 300px;
      max-width: 300px;
    }
  }
}
</style>
