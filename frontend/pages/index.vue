<template>
  <section>
    <h1>Главная</h1>

    <img src="https://via.placeholder.com/150" alt="место для моего фото" />
    Потом вставлю своё фото


    <h2>Освоенные навыки</h2>
    <ul>
      <li v-for="(skill, index) in skills" :key="index">{{ skill.attributes.name }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [],
    }
  },
  created() {
    this.getSkills()
  },
  methods: {
    async getSkills() {
      const response = await this.$axios.$get('http://localhost:1337/api/my-skills')
      this.skills = response.data
    }
  }
}
</script>
