<template>
  <div class="mob-nav">
    <a href="#about" class="nav-link">
      <i class="fas fa-user"></i>
      <p>About</p>
    </a>
    <a href="#skills" class="nav-link">
      <i class="fas fa-cogs"></i>
      <p>Skills</p>
    </a>
    <a href="#projects" class="nav-link">
      <i class="far fa-window-restore"></i>
      <p>Projects</p>
    </a>
    <a href="#contact" class="nav-link">
      <i class="fas fa-envelope"></i>
      <p>Contact</p>
    </a>
  </div>
</template>
<style lang="scss" scoped>
.mob-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
  background-color: #ee6f57;
  z-index: 999999;
  padding: 5px 10px;
  display: none;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: white;
    padding: 0;
  }
}
@media screen and(max-width: 575.98px) {
  .mob-nav {
    display: flex;
  }
}
</style>
