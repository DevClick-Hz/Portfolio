<template>
  <div class="wrap">
    <div class="sec" id="skills">
      <h1 class="skill-word">
        <q cite="https://www.mozilla.org/en-US/about/history/details/">
          Skills
        </q>
      </h1>
      <div class="skill-row">
        <div class="skill-card">
          <p>
            I'm a <span class="highlight">self-taught</span> front-end web
            developer. I usually learn the same skill from multiple
            <span class="highlight"> famous and trusted</span> online academies
            such as Codecademy, Freecodecamp, Udacity, and LinkedIn Learning to
            make sure I get the most of what I'm learning. I also read articles
            daily on many websites such as medium and Vue developers to stay
            <span class="highlight">updated with the latest technology</span>
            in the web development. I'm a
            <span class="highlight">fast learner</span> and within less than 8
            months I was able to learn the following skills:
            <span class="highlight2">HTML5</span> |
            <span class="highlight2">CSS3</span> |
            <span class="highlight2">JavaScript</span> |
            <span class="highlight2">Bootstrap4</span> |
            <span class="highlight2">Vuejs</span> |
            <span class="highlight2">Vue Router</span> |
            <span class="highlight2">Vuex</span> |
            <span class="highlight2">Bootstrap-Vue</span> |
            <span class="highlight2">Sass</span> |
            <span class="highlight2">Git</span>
          </p>
        </div>
        <div class="skill-img">
          <img src="../assets/skills.svg" />
        </div>
      </div>
    </div>

    <!----------------------------------------------Projects--------------------------------------------------------->
    <div class="sec" id="projects">
      <h1 class="pro-word">
        <q cite="https://www.mozilla.org/en-US/about/history/details/">
          Projects
        </q>
      </h1>
      <div class="pro-row">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          indicators
          :interval="3000"
          img-width="1024"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide>
            <template v-slot:img>
              <div class="slide-cont">
                <div class="slide-txt">
                  <h1>Electronic-X</h1>
                  <p>
                    A full stack e-commerce website. Used tools:
                    Vuejs,Vuex,Vue-router,Bootstrap-vue,CSS3, Firebase.
                  </p>
                  <a
                    href="https://electrnoic-x.firebaseapp.com/"
                    target="_blank"
                    ><button class="know-More">Visit website</button></a
                  >
                  <a
                    href="https://github.com/DevClick-Hz/Electronic-X"
                    target="_blank"
                    ><button class="know-More">Source code</button></a
                  >
                </div>
                <div class="pro-img">
                  <img src="../assets/vue1.jpg" alt="" height="350" />
                </div>
              </div>
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template v-slot:img>
              <div class="slide-cont">
                <div class="slide-txt">
                  <h1>TNA</h1>
                  <p>
                    A website uses the NewYork Times API to display the top
                    articles. Used tools: Vuejs, Scss, NYT api.
                  </p>
                  <a
                    href="https://top-nyt-articles.firebaseapp.com/"
                    target="_blank"
                    ><button class="know-More">Visit website</button></a
                  >
                  <a href="https://github.com/DevClick-Hz/TNA" target="_blank"
                    ><button class="know-More">Source code</button></a
                  >
                </div>
                <div class="pro-img">
                  <img src="../assets/TNA.jpg" alt="" height="350" />
                </div>
              </div>
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.sec {
  text-align: left;
  height: 100vh;
  padding: 100px 30px;
  width: 95%;
  margin: 0 auto;
  .skill-word,
  .pro-word {
    color: #ee6f57;
    font-size: 5rem;
    letter-spacing: 5px;
    width: 50%;
    padding: 0 40px;
    border-bottom: 3px solid rgb(212, 212, 212);
    position: relative;
  }
  .skill-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 20px;
    .skill-img {
      width: 45%;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .skill-card {
      width: 45%;
      background-color: #222831;
      color: white;
      padding: 30px;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 1.1rem;
      p {
        margin: 0;
      }
      .highlight {
        color: #ee6f57;
      }
      .highlight2 {
        background-color: #ee6f57;
        margin: 3px;
        padding: 0 5px;
      }
    }
  }
  .pro-row {
    .carousel {
      padding: 50px 0;
    }
    .pro-img {
      width: 45%;
      box-shadow: 0 0 15px rgb(170, 170, 170);
    }
    .pro-img img {
      height: 100%;
      width: 100%;
      display: block;
    }
    .slide-txt {
      width: 45%;
      height: 100%;
      float: left;
      text-align: left;
      text-shadow: none;
      color: rgb(75, 75, 75);
      font-family: "Roboto Condensed", sans-serif;
    }

    .know-More {
      color: white;
      background: #ee6f57;
      border: none;
      outline: none;
      padding: 5px 10px;
      margin: 0 10px 0 0;
      font-family: "Roboto Condensed", sans-serif;
    }
    .slide-cont {
      background-color: white !important;
      color: rgb(36, 36, 36);
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
    }
  }
}

@media screen and (max-width: 575.98px) {
  .sec {
    height: 100%;
    margin: 0;
    width: 100%;
    padding: 50px 5px;
  }
  .skill-word,
  .pro-word,
  .skill-img,
  .skill-card,
  .carousel,
  .pro-img,
  .slide-txt {
    width: 100% !important;
  }
  .skill-word,
  .pro-word {
    font-size: 2.6rem !important;
  }
  .skill-row,
  .pro-row {
    gap: 20px;
    height: 100%;
    padding: 50px 10px !important;
    flex-direction: column-reverse;
  }
  .slide-cont {
    padding: 0 !important;
  }
}
@media screen and(min-width: 576px) and(max-width: 767px) {
  .sec {
    height: 100%;
    margin: 0;
    width: 100%;
    padding: 50px 5px;
  }
  .skill-word,
  .pro-word,
  .skill-img,
  .skill-card,
  .carousel,
  .pro-img,
  .slide-txt {
    width: 100% !important;
  }
  .skill-word,
  .pro-word {
    font-size: 4rem !important;
    transform: rotate(0deg) !important;
  }
  .skill-row,
  .pro-row {
    gap: 40px;
    height: 100%;
    padding: 100px 10px;
    flex-direction: column-reverse;
  }
  .pro-desc {
    .pro-txt {
      h3 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
}
@media screen and (min-width: 768px) and(max-width: 991.98px) {
  .sec {
    height: 100%;
    margin: 0;
    width: 100%;
    padding: 50px 5px;
  }
  .skill-word,
  .pro-word,
  .skill-img,
  .skill-card,
  .carousel,
  .pro-img,
  .slide-txt {
    width: 100% !important;
  }
  .skill-word,
  .pro-word {
    font-size: 4rem !important;
    transform: rotate(0deg) !important;
  }
  .skill-row,
  .pro-row {
    gap: 40px;
    height: 100%;
    padding: 100px 10px;
    width: 90%;
    margin: 0 auto;
    flex-direction: column-reverse;
  }
}
@media screen and (min-width: 992px) and(max-width: 1199.98px) {
  .skill-word,
  .pro-word {
    font-size: 4rem !important;
  }
  .skill-row,
  .pro-row {
    gap: 40px;
    height: 100%;
    padding: 100px 10px;
    margin: 0 auto;
    flex-direction: column-reverse;
  }
}
</style>

<style>
.carousel-indicators li {
  background-color: #ee6f57 !important;

  height: 5px !important;
  width: 33px !important;
  border: none;
  outline: none;
}
.carousel-control-prev,
.carousel-control-next {
  z-index: 1000 !important;
}
</style>
