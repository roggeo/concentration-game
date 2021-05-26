import { cardsOptions } from "../src/services/cards";
import { getCardsMatrix, getPairsOfCards } from "../src/services/CardTransform";


test('Get pairs of cards', () => {

    const sizeCards = cardsOptions().length;

    expect(sizeCards * 2).toBe(getPairsOfCards().length);
});

test('Transfrom cards into matrix', () => {
    
    const cardsMatrix = getCardsMatrix(4, 8);
    const lengthMatrix = cardsMatrix[0].length;

    expect(lengthMatrix).toBe(4);
});
