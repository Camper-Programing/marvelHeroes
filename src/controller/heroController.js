const heroModel = require ('../modeller/heroModel');

exports.getHeroData = async (req, res) => {
    const heroName = req.params.name.toLowerCase();
    try {
        const heroData = await heroModel.fetchHero(heroName)
        res.json(heroData);
    }catch (err){
        res.status(404).json({ message: 'hero not found.'})
    }

}

exports.getHeroDataById = async (req, res) => {}

exports.updateHeroData = async (req, res) => {}

exports.deleteHeroData = async (req, res) => {}

exports.createHeroData = async (req, res) => {}