<template>
  <div class="wrapper">
    <Header class="header" />
    <main class="content">
      <div class="container">
        <nuxt />
      </div>
    </main>
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}

.wrapper {
  position: relative;
  min-height: 100%;
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
