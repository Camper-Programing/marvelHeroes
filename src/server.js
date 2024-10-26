const express = require('express');
const HeroModel = require('./modeller/heroModel');


const app = express();
const port = 3000;
const heroModel = new HeroModel();

// Middleware til at håndtere JSON-data
app.use(express.json());

// GET: Hent alle helte
app.get('/heroes', (req, res) => {
    res.json(heroModel.getAllHeroes());
});

// GET: Hent en helt baseret på ID
app.get('/heroes/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const hero = heroModel.getHeroById(id);
    if (hero) {
        res.json(hero);
    } else {
        res.status(404).json({ message: 'Hero not found' });
    }
});

// POST: Opret en ny helt
app.post('/heroes', (req, res) => {
    const newHero = req.body;
    const createdHero = heroModel.createHero(newHero);
    res.status(201).json(createdHero);
});

// PUT: Opdater en eksisterende helt baseret på ID
app.put('/heroes/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedHero = heroModel.updateHero(id, req.body);
    if (updatedHero) {
        res.json(updatedHero);
    } else {
        res.status(404).json({ message: 'Hero not found' });
    }
});

// DELETE: Slet en helt baseret på ID
app.delete('/heroes/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deletedHero = heroModel.deleteHero(id);
    if (deletedHero) {
        res.json(deletedHero);
    } else {
        res.status(404).json({ message: 'Hero not found' });
    }
});

// Start serveren
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
