<template>
  <div id="hero-detail">
    <div v-if="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input v-model="hero.name" placeholder="name"/>
        <button @click="goBack()">Back</button>
        <button @click="update(hero)">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
  import HeroService from '../service/hero.service'
  const heroesService = new HeroService()
  export default {
    name: 'hero-detail',
    data () {
      return {
        hero: null,
        id: null
      }
    },
    created () {
      this.id = this.$route.params.id
      heroesService.getHero(this).then(res => { this.hero = res.data })
      console.log(this.hero)
    },
    methods: {
      goBack () {
        history.go(-1)
      },
      update (hero) {
        heroesService.put(this, hero).then(alert('修改成功'))
      }
    }
  }
</script>

<style lang="stylus">

</style>
