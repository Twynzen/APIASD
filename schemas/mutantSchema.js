const Joi = require('joi');
const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const age = Joi.number().integer().min(5);
const vehicle = Joi.string().min(3).max(25);
const isAlive = Joi.boolean();
const insidePrision = Joi.boolean();
const placeOperation = Joi.string().min(3).max(35);

const createMutantSchema = Joi.object({
    name: name.required(),
    age: age.required(),
    vehicle: vehicle.required(),
    isAlive: isAlive.required(),
    insidePrision: insidePrision.required(),
    placeOperation: placeOperation.required()
});

const updateMutantSchema = Joi.object({
    name: name.required(),
    age: age.required(),
    vehicle: vehicle.required(),
    isAlive: isAlive.required(),
    insidePrision: insidePrision.required(),
    placeOperation: placeOperation.required()
});

const getMutantSchema = Joi.object({
    id: id.required()
});

module.exports = { createMutantSchema, updateMutantSchema, getMutantSchema }