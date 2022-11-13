const express = require('express');
const MutantService = require('../services/mutantService');

const router = express.Router();

const service = new MutantService();


router.get('/', async(req, res) => {
    const mutants = await service.find();
    res.json(mutants);
});




router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const mutant = await service.findOne(id);
        res.json(mutant);
    } catch (error) {
        console.error(error);
    }

});

router.patch('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const mutant = await service.update(id, body);
        res.json(mutant);
    } catch (error) {
        console.error(error);;
    }
});

router.post('/', async(req, res) => {
    const body = req.body;
    const newMutant = await service.create(body);
    res.status(201).json(newMutant);
});

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
});

module.exports = router;