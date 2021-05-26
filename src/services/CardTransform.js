/**
 * Card Transform
 */

import { cardsOptions } from "./cards";


/**
 * Get index random from values
 * @param {Array} values 
 * @returns 
 */
export function getIndexRandomFromValues(values) {
    const indexRandom = Math.floor(Math.random() * values.length);
    
    if (values[indexRandom] == null) {
        return indexRandom;
    }

    return getIndexRandomFromValues(values);
}


/**
 * Get pairs of cards image
 * @returns {Array}
 */
export function getPairsOfCards(size=0, listCards = []) {
    const cardsImage = [];

    let i = 0;
    for (const card of listCards) {
        if (i == size) {
            break;
        }
        cardsImage.push(card);
        i++;
    }

    return cardsImage.concat(cardsImage);
}


/**
 * Get random of cards image
 * @returns {Array}
 */
export function getRandomPairsOfCards(size) {
    const pairs = getPairsOfCards(size, cardsOptions());
    const preparedRandom = new Array(pairs.length).fill(null);

    for (const cardImg of pairs) {
        const randomIndex = getIndexRandomFromValues(preparedRandom);
        preparedRandom[randomIndex] = cardImg;
    }

    return preparedRandom;
}


/**
 * 
 * @param {number} id 
 * @param {string} img 
 * @returns {Object}
 */
export function createCardOption(id=0, img='') {
    return {
        id,
        done: false,
        selected: false,
        image: img,
    }
}


/**
 * 
 * @param {number} lin 
 * @param {number} col 
 * @returns {Array}
 */
 export function getCardsMatrix(lin = 0, col = 0) {

    const size = Math.floor((lin * col) / 2)
    const cardsImage = getRandomPairsOfCards(size);
    const cardsPrepared = [];
    let linValues = [];

    let index = 0;
    let linLimit = 1;
    let idGenerated = 1;
    let sizeCardsImage = cardsImage.length;


    for (const imgCard of cardsImage) {

        if (linLimit > lin) {
            linLimit = 1;
            cardsPrepared.push(linValues);
            linValues = [];
        }

        if (linLimit <= lin) {
            linValues.push(createCardOption(idGenerated, imgCard));
            linLimit++;
        }
        
        idGenerated++;
        index++;

        if (index == sizeCardsImage) {
            cardsPrepared.push(linValues);
        }
    }
    
    return cardsPrepared;
}
