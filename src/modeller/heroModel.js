import fs from 'fs';
import path from 'path';

class HeroModel {
    constructor() {
        this.filePath = path.join(__dirname, '../heroes.json');
        this.heroes = this.readHeroesFromFile(); // Load heroes from the JSON file on initialization
    }

    // Læs helte fra JSON-filen
    readHeroesFromFile() {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }

    // Gem helte til JSON-filen
    saveHeroesToFile() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.heroes, null, 2));
    }

    // Hent alle helte
    getAllHeroes() {
        return this.heroes;
    }

    // Hent en helt efter ID
    getHeroById(id) {
        return this.heroes.find(hero => hero.id === id);
    }

    // Opret en ny helt
    createHero(newHero) {
        newHero.id = this.heroes.length ? this.heroes[this.heroes.length - 1].id + 1 : 1;
        this.heroes.push(newHero);
        this.saveHeroesToFile();
        return newHero;
    }

    // Opdater en eksisterende helt
    updateHero(id, updatedData) {
        const heroIndex = this.heroes.findIndex(hero => hero.id === id);
        if (heroIndex !== -1) {
            this.heroes[heroIndex] = { ...this.heroes[heroIndex], ...updatedData };
            this.saveHeroesToFile();
            return this.heroes[heroIndex];
        }
        return null;
    }

    // Slet en helt
    deleteHero(id) {
        const heroIndex = this.heroes.findIndex(hero => hero.id === id);
        if (heroIndex !== -1) {
            const removedHero = this.heroes.splice(heroIndex, 1);
            this.saveHeroesToFile();
            return removedHero;
        }
        return null;
    }
}

module.exports = HeroModel;
