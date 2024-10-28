import fs from 'fs';
import path from 'path';

class HeroModel {
    constructor() {
        this.filePath = path.join(__dirname, '../heroes.json');
        this.heroes = this.readHeroesFromFile(); // Load heroes from the JSON file on initialization
    }

    // Read heroes from JSON file
    readHeroesFromFile() {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }

    // Save heroes to JSON file
    saveHeroesToFile() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.heroes, null, 2));
    }

    // Get all heroes
    getAllHeroes() {
        return this.heroes;
    }

    // Get a hero by ID
    getHeroById(id) {
        return this.heroes.find(hero => hero.id === id);
    }

    // Create a new hero
    createHero(newHero) {
        newHero.id = this.heroes.length ? this.heroes[this.heroes.length - 1].id + 1 : 1;
        this.heroes.push(newHero);
        this.saveHeroesToFile();
        return newHero;
    }

    // Update an existing hero
    updateHero(id, updatedData) {
        const heroIndex = this.heroes.findIndex(hero => hero.id === id);
        if (heroIndex !== -1) {
            this.heroes[heroIndex] = { ...this.heroes[heroIndex], ...updatedData };
            this.saveHeroesToFile();
            return this.heroes[heroIndex];
        }
        return null;
    }

    // Delete a hero
    deleteHero(id) {
        const heroIndex = this.heroes.findIndex(hero => hero.id === id);
        if (heroIndex !== -1) {
            const removedHero = this.heroes.splice(heroIndex, 1);
            this.saveHeroesToFile();
            return removedHero[0]; // Return the deleted hero
        }
        return null;
    }
}

module.exports = HeroModel;
