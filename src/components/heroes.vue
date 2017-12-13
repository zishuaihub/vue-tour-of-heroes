<template>
  <div id="heroes">
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li v-for="hero in heroes"
          @click="onSelect(hero)"
          :class="{selected: hero===selectedHero}">
        <span class="badge">{{hero.id}}</span>
        <span>{{hero.name}}</span>
        <button class="delete"
                @click="deletehero(hero)">x</button>
      </li>
    </ul>
    <div v-if="selectedHero">
      <h2>
         {{selectedHero.name}}is my hero
      </h2>
      <button @click="gotoDetail(selectedHero)">View Details</button>
    </div>
    <div>
      <label>Hero name:</label> <input ref="heroName" />
      <button @click="add()">
        Add
      </button>
    </div>
  </div>
</template>

<script>
  import HeroService from '../service/hero.service'
  const heroesService = new HeroService()
  export default {
    name: 'heroes',
    data () {
      return {
        heroes: [],
        selectedHero: null
      }
    },
    mounted () {
      heroesService.getHeroes(this).then(res => { this.heroes = res.data })
      console.log(this.heroes)
    },
    methods: {
      onSelect (hero) {
        this.selectedHero = hero
      },
      deletehero (hero) {
        heroesService.delete(this, hero).then(
          () => {
            this.heroes = this.heroes.filter(h => h !== hero)
            if (this.selectedHero === hero) {
              this.selectedHero = null
            }
          }
        )
      },
      gotoDetail () {},
      add () {}
    }
  }
</script>

<style lang="stylus">
  #heroes
    selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    button.delete {
      float:right;
      margin-top: 2px;
      margin-right: .8em;
      background-color: gray !important;
      color:white;
    }
</style>
