import { filtering, orderAZ, orderZA, orderNumbers, search2} from '../src/data.js';
//import {allcharacters} from '../src/data.js';

describe('filtrarporgenero', () => {

    it('filtra segun el genero indicado', () => {

        const data = [
            {
                gender: 'Female'
            },
            {
                gender: 'Male'
            },
            {
                gender: 'n/a'
            },
        ];
        expect(filtering(data, 'gender', 'Male')).toStrictEqual([
            {
                gender: 'Male'
            },
        ]);
    });
})

describe("orderAZ ordena de la AZ", () => {
    it('ordena los nombres de la AZ', () => {

        const data = [
            {
                name: 'Pazu'
            },
            {
                name: 'Totoro'
            },
            {
                name: 'Abso'
            },
        ];
        expect(orderAZ(data, 'name')).toStrictEqual([
            {
                name: 'Abso'
            },
            {
                name: 'Pazu'
            },
            {
                name: 'Totoro'
            },
        ]);
    });
})

describe("orderZA ordena de la AZ", () => {
    it('ordena los nombres de la AZ', () => {

        const data = [
            {
                name: 'Pazu'
            },
            {
                name: 'Totoro'
            },
            {
                name: 'Abso'
            },
        ];
        expect(orderZA(data, 'name')).toStrictEqual([
            {
                name: 'Totoro'

            },
            {
                name: 'Pazu'
            },
            {
                name: 'Abso'
            },
        ]);
    });
})
describe("orderNumbers, organiza numeros de menor a mayor", () => {
    it('ordena los release_date de menor a mayor', () => {

        const data = [
            {
                release_date: '2004'
            },
            {
                release_date: '2014'
            },
            {
                release_date: '1986'
            },
        ];
        expect(orderNumbers(data, 'release_date')).toStrictEqual([
            {
                release_date: '1986'
            },
            {
                release_date: '2004'
            },
            {
                release_date: '2014'
            },
        ]);
    });
})

describe("orderAZ ordena de la AZ", () => {
    it('ordena los nombres de la AZ', () => {

        const data = [
            {
                name: 'Pazu'
            },
            {
                name: 'Totoro'
            },
            {
                name: 'Abso'
            },
        ];
        expect(orderAZ(data, 'name')).toStrictEqual([
            {
                name: 'Abso'
            },
            {
                name: 'Pazu'
            },
            {
                name: 'Totoro'
            },
        ]);
    });
})

describe("busca filtrando en la data", () => {
    it('muestra todo lo que concida con el valor dado', () => {

        const data = [
            {
                title: "The Secret World"
            },
            {
                title: "My Neighbors the Yamadas"
            },
            {
                title: 'Castle in the Sky'
            },
        ];
        expect(search2(data, 'a')).toStrictEqual([
            {
                title: "My Neighbors the Yamadas"
            },
            {
                title: 'Castle in the Sky'
            },
        ]);
    });
})
