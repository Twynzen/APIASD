const express = require('express');
const MutantService = require('../services/mutantService');
const { createMutantSchema, updateMutantSchema, getMutantSchema } = require('../schemas/mutantSchema');
const validatorHandler = require('../middlewares/validatorHandler');
const { Boom } = require('@hapi/boom');
const router = express.Router();

const service = new MutantService();


router.get('/', async(req, res) => {
    try {
        const mutants = await service.find();
        res.json(mutants);
        res.sendStatus(200).json({
            message: 'wi',

        });
    } catch (error) {
        console.error(error);
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

router.post('/',
    validatorHandler(createMutantSchema, 'body'),
    async(req, res) => {
        try {
            const body = req.body;
            const newMutant = await service.create(body);
            res.status(201).json(newMutant);
        } catch (error) {
            res.json(Boom.badRequest('Invalid Request'));
        }

    });

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
});

module.exports = router;