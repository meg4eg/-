<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/">LOGO</nuxt-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link exact-active-class="active" class="nav-link" to="/">Визитка</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link active-class="active" class="nav-link" to="/about"
              >Обо мне</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link active-class="active" class="nav-link" to="/contacts"
              >Контакты</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.active {
  background: lightblue;
}
</style>
