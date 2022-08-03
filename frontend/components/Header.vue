<template>
  <header>
    <nav>
      <nuxt-link class="navbar-brand" to="/">Визитка</nuxt-link>

      <div>
        <ul>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/about"
            >Обо мне</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/contacts"
            >Контакты</nuxt-link
            >
          </li>
        </ul>
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
