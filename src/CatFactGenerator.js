import CatFactsArray from './CatFactsArray.js';

export default class CatFactGenerator
{
    static getRandomFact() {
        let facts = CatFactsArray;
        return facts[Math.floor(Math.random() * facts.length)];
    }
}