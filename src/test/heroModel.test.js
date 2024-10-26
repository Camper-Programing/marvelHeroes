import { expect } from 'chai'; // Use import instead of require
import HeroModel from '../modeller/heroModel.js'; // Adjust the path accordingly

describe('HeroModel', () => {
    let model;

    before(() => {
        model = new HeroModel();
    });

    it('should fetch all heroes', () => {
        const heroes = model.getAllHeroes();
        expect(heroes).to.be.an('array');
        expect(heroes).to.have.lengthOf.at.least(1);
    });

    it('should get a hero by ID', () => {
        const hero = model.getHeroById(1);
        expect(hero).to.be.an('object');
        expect(hero).to.have.property('name', 'Captain America');
    });

    it('should create a new hero', () => {
        const newHero = { name: 'Black Widow', alias: 'Natasha Romanoff', powers: ['Martial arts', 'Espionage'] };
        const createdHero = model.createHero(newHero);
        expect(createdHero).to.have.property('id');
        expect(createdHero.name).to.equal('Black Widow');
    });

    it('should update an existing hero', () => {
        const updatedHero = model.updateHero(1, { alias: 'Steve Rogers (updated)' });
        expect(updatedHero).to.have.property('alias', 'Steve Rogers (updated)');
    });

    it('should delete a hero', () => {
        const deletedHero = model.deleteHero(1);
        expect(deletedHero[0]).to.have.property('name', 'Captain America');
    });
});
