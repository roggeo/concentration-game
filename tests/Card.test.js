import { cardsOptions } from "../src/services/cards";
import { getCardsMatrix, getPairsOfCards } from "../src/services/CardTransform";


test('Get pairs of cards', () => {

    const sizeCards = cardsOptions().length;

    expect(sizeCards * 2).toBe(getPairsOfCards().length);
});

test('Transfrom cards into matrix 4 x 4', () => {
    
    const cardsMatrix = getCardsMatrix(4, 4);
    const widthMatrix = cardsMatrix[0].length;
    const heightMatrix = cardsMatrix.length;

    expect(widthMatrix).toBe(4);
    expect(heightMatrix).toBe(4);

});
