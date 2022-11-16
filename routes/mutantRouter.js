const express = require('express');
const MutantService = require('../services/mutantService');
const { createMutantSchema, updateMutantSchema, getMutantSchema } = require('../schemas/mutantSchema');
const validatorHandler = require('../middlewares/validatorHandler');
const router = express.Router();

const service = new MutantService();


router.get('/', async(req, res) => {
    try {
        const mutants = await service.find();
        res.json(mutants);
    } catch (error) {
        throw new Error('Boom');
    }

});

router.get('/:id',
    validatorHandler(getMutantSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const mutant = await service.findOne(id);
            res.json(mutant);
        } catch (error) {
            next(error);
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