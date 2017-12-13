export default class HeroService {
  heroesUrl = 'http://localhost:3000/heroes'
  getHeroes (v) {
    return v.$http.get(this.heroesUrl)
  }
  getHero (v) {
    return v.$http.get(`${this.heroesUrl}/${v.id}`)
  }
  put (v, hero) {
    return v.$http.put(`${this.heroesUrl}/${hero.id}`, hero)
  }
  delete (v, hero) {
    return v.$http.delete(`${this.heroesUrl}/${hero.id}`)
  }
}
