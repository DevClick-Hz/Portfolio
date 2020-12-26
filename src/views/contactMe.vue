<template>
  <div id="contact">
    <h1>Reach out to me</h1>
    <div class="wrap">
      <div class="image">
        <img src="../assets/contact.svg" />
        <h5>zaytoun.hamza@hotmail.com</h5>
        <h5><i class="fas fa-map-marker-alt"></i> Sweden</h5>
      </div>
      <div class="info">
        <h2>Like what you see? Send me an email...</h2>
        <form name="contact" method="POST" data-netlify="true">
          <div class="name-form">
            <input type="text" name="name" required />
            <label for="name" class="label-name">
              <span class="content-name">Name</span>
            </label>
          </div>
          <div class="email-form">
            <input type="email" name="email" required />
            <label for="email" class="label-email">
              <span class="content-email">Email</span>
            </label>
          </div>
          <p>Message</p>
          <textarea></textarea>
          <button class="sub-btn" type="submit">
            Submit <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
#contact {
  background-color: #222831;
  padding: 50px;
  margin: 0;
  height: 100vh;
  color: #ee6f57;
  h1 {
    font-size: 5rem;
    margin: 0;
  }
  .wrap {
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 40px 0 0 0;
    .info,
    .image {
      width: 45%;
      overflow: hidden;
      img {
        max-height: 350px;
      }
    }
    .image {
      text-align: left;
      h5 {
        letter-spacing: 1px;
        margin: 10px 0;
      }
    }
    .info {
      text-align: left;
      form {
        width: 100%;
      }
      .name-form,
      .email-form {
        position: relative;
        text-align: left;
        margin: 40px 0;
      }
      input {
        width: 100%;
        height: 100%;
        padding-top: 20px;
        border: none;
        outline: none;
        margin: 0 !important;
        background: none;
        color: white;
        font-family: "Roboto Condensed", sans-serif;
      }
      label {
        margin: 0 !important;
        padding: 0 !important;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-bottom: 4px solid white;
      }
      label::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        bottom: -5px;
        border-bottom: 6px solid #ee6f57;
        transform: translateX(-100%);
        transition: all 0.5s ease-in-out;
      }
      .content-name,
      .content-email {
        position: absolute;
        bottom: 5px;
        left: 0;
        transition: all 0.5s ease-in-out;
      }
      input:focus + .label-name .content-name,
      input:valid + .label-name .content-name {
        transform: translateY(-150%);
        font-size: 1.2rem;
      }
      input:focus + .label-email .content-email,
      input:valid + .label-email .content-email {
        transform: translateY(-150%);
        font-size: 1.2rem;
      }
      input:focus + .label-name::after,
      input:valid + .label-name::after {
        transform: translateX(0%);
      }
      input:focus + .label-email::after,
      input:valid + .label-email::after {
        transform: translateX(0%);
      }
      p {
        text-align: left;
      }
      textarea {
        width: 100%;
        height: 200px;
        border: 4px solid white;
        resize: none;
        margin: 0;
        outline: none;
        font-family: "Roboto Condensed", sans-serif;
      }
      textarea:focus {
        border: 4px solid #ee6f57;
      }
      .sub-btn {
        border: 3px solid #ee6f57;
        background-color: white;
        outline: none;
        color: #ee6f57;
        padding: 10px 30px;
        margin: 15px 0;
        letter-spacing: 0.5px;
        border-radius: 0.25rem;
      }
      .sub-btn:hover {
        background-color: #ee6f57;
        color: white;
      }
    }
  }
}
@media screen and (max-width: 575.98px) {
  .wrap {
    gap: 30px;
  }
  #contact {
    height: 100%;
    padding: 50px 50px 100px 50px;
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
      text-align: center;
    }
    h5 {
      font-size: 1.1rem;
      text-align: center;
    }
    .info,
    .image {
      width: 100% !important;
      img {
        max-height: 150px !important;
      }
    }
    .image {
      text-align: center !important;
    }
  }
}
@media screen and(min-width: 576px) and(max-width: 767px) {
  .wrap {
    gap: 30px;
  }
  #contact {
    height: 100%;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 1.8rem;
      text-align: center;
    }
    h5 {
      font-size: 1.5rem;
      text-align: center;
    }
    .info,
    .image {
      width: 100% !important;
      img {
        max-height: 150px !important;
      }
    }
    .image {
      text-align: center !important;
    }
  }
}
@media screen and (min-width: 768px) and(max-width: 991.98px) {
  .wrap {
    gap: 30px;
  }
  #contact {
    height: 100%;
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 1.6rem;
      text-align: center;
    }
    h5 {
      font-size: 1.2rem;
    }
    .info,
    .image {
      width: 100% !important;
      img {
        max-height: 200px !important;
      }
    }
    .image {
      text-align: center !important;
    }
  }
}
@media screen and (min-width: 992px) and(max-width: 1199.98px) {
  #contact {
    height: 100%;
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 1.6rem;
    }
    h5 {
      font-size: 1.2rem;
    }
    .info,
    .image {
      img {
        max-height: 300px !important;
      }
    }
  }
}
</style>
