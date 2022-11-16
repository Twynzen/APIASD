const boom = require('@hapi/boom');
const faker = require('faker');


class MutantService {
    constructor() {
        this.mutants = [
            { id: faker.datatype.uuid(), name: 'Batman', age: 40, vehicle: 'Advanced military car', isAlive: true, insidePrision: false, placeOperation: 'Gothic City' },
            { id: faker.datatype.uuid(), name: 'Punisher', age: 42, vehicle: 'Van', isAlive: true, insidePrision: false, placeOperation: 'Rusia' },
        ];
    }
    async create(data) {
        const newMutant = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.mutants.push(newMutant);
        return newMutant;

    }
    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.mutants)
            }, 1000);
        });
        return this.mutants;
    }
    async findOne(id) {
        const mutant = this.mutants.find((item => item.id === id));

        if (!mutant) {
            throw boom.notFound('Mutant not found');
        }
        return mutant;
    }
    async update(id, changes) {
        const index = this.mutants.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('Mutant not found');
        }
        const mutant = this.mutants[index];
        this.mutants[index] = {
            ...mutant,
            ...changes
        }
        return this.mutants[index];
    }
    async delete(id) {
        try {
            const index = this.mutants.findIndex(item => item.id === id);
            if (index === 1) {
                throw boom.notFound('Mutant not found');
            }
            this.mutants.splice(index, 1);
            return { id };
        } catch (error) {
            console.error(error);
        }

    }


}
module.exports = MutantService;