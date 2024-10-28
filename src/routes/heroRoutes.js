const express = require('express');
const router = express.Router();

// Import heroController
const heroController = require('../controller/heroController');

// Middleware til validering af hero data
const validateHeroData = (req, res, next) => {
    const { name, alias, powers } = req.body;
    if (!name || !alias || !Array.isArray(powers)) {
        return res.status(400).json({ message: 'Invalid hero data.' });
    }
    next();
};

/**
 * @swagger
 * /heroes:
 *   get:
 *     summary: Retrieve a list of heroes
 *     responses:
 *       200:
 *         description: A list of heroes
 *       404:
 *         description: Heroes not found
 */
router.get('/heroes', heroController.getHeroData);

/**
 * @swagger
 * /heroes/{id}:
 *   get:
 *     summary: Retrieve a hero by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the hero
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A hero object
 *       404:
 *         description: Hero not found
 */
router.get('/heroes/:id', heroController.getHeroDataById);

/**
 * @swagger
 * /heroes:
 *   post:
 *     summary: Create a new hero
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               alias:
 *                 type: string
 *               powers:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Hero created
 *       400:
 *         description: Bad request
 */
router.post('/heroes', validateHeroData, heroController.createHeroData);

/**
 * @swagger
 * /heroes/{id}:
 *   put:
 *     summary: Update an existing hero
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the hero to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               alias:
 *                 type: string
 *               powers:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Hero updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Hero not found
 */
router.put('/heroes/:id', validateHeroData, heroController.updateHeroData);

/**
 * @swagger
 * /heroes/{id}:
 *   delete:
 *     summary: Delete a hero
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the hero to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Hero deleted
 *       404:
 *         description: Hero not found
 */
router.delete('/heroes/:id', heroController.deleteHeroData);

// Export routes
module.exports = router;
