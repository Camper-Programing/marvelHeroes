import HeroModel from '../modeller/heroModel.js';
const heroModel = new HeroModel();

// Get hero data by name
exports.getHeroData = async (req, res) => {
    const heroName = req.params.name.toLowerCase();
    try {
        const heroData = heroModel.getHeroByName(heroName); // Use the new method to get hero by name
        if (heroData) {
            res.status(200).json(heroData);
        } else {
            res.status(404).json({ message: 'Hero not found.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'An error occurred while fetching the hero data.' });
    }
};

// Get hero data by ID
exports.getHeroDataById = async (req, res) => {
    const heroID = parseInt(req.params.id, 10);
    const hero = heroModel.getHeroById(heroID); // Fetch the hero by ID
    if (hero) {
        res.status(200).json(hero);
    } else {
        res.status(404).json({ message: 'Hero not found.' });
    }
};

// Update hero data
exports.updateHeroData = async (req, res) => {
    const heroID = parseInt(req.params.id, 10);
    const updatedHero = heroModel.updateHero(heroID, req.body); // Update hero data
    if (updatedHero) {
        res.status(200).json(updatedHero);
    } else {
        res.status(404).json({ message: 'Hero not found.' });
    }
};

// Delete hero data
exports.deleteHeroData = async (req, res) => {
    const heroID = parseInt(req.params.id, 10);
    const deletedHero = heroModel.deleteHero(heroID); // Delete hero by ID
    if (deletedHero) {
        res.status(200).json(deletedHero);
    } else {
        res.status(404).json({ message: 'Hero not found.' });
    }
};

// Create a new hero
exports.createHeroData = async (req, res) => {
    const newHero = heroModel.createHero(req.body); // Create a new hero
    res.status(201).json(newHero);
};

// Add a method to get a hero by name
HeroModel.prototype.getHeroByName = function (name) {
    return this.heroes.find(hero => hero.name.toLowerCase() === name);
};
