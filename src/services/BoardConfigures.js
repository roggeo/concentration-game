/**
 * Board configures
 */


export function configureSelectionAllCards(cardsPlaying = [], selected = false) {
    const filterCards = [];

    cardsPlaying.forEach((cards) => {
        const filterCard = [];
        cards.forEach((card) => {
            const c = {...card};
            c.selected = selected;
            filterCard.push(c);
        });
        filterCards.push(filterCard);
    });

    return filterCards;
}


/**
 * 
 * @param {Array} cardsPlaying 
 * @param {number} id 
 * @returns {Array}
 */
export function configureSelectedCard(cardsPlaying, id) {
    const filterCards = [];

    cardsPlaying.forEach((cards) => {
        const filterCard = [];
        cards.forEach((card) => {
            const c = {...card};
            if (c.id == id) {
                c.selected = true;
            }
            filterCard.push(c);
        });
        filterCards.push(filterCard);
    });

    return filterCards;
}


/**
 * 
 * @param {Array} cardsPlaying 
 * @param {Array} ids 
 * @returns {Array}
 */
export function configureCardsMatched(cardsPlaying, ids = []) {
    const filterCards = [];

    cardsPlaying.forEach((cards) => {
        const filterCard = [];
        cards.forEach((card) => {
            const c = {...card};
            if (ids.includes(c.id)) {
                c.selected = false;
                c.done = true;
            }
            filterCard.push(c);
        });
        filterCards.push(filterCard);
    });

    return filterCards;
}


/**
 * 
 * @param {Array} cardsPlaying 
 * @param {Array} ids 
 * @returns {Array}
 */
export function restoreCards(cardsPlaying, ids = []) {
    const filterCards = [];

    cardsPlaying.forEach((cards) => {
        const filterCard = [];
        cards.forEach((card) => {
            const c = {...card};
            if (ids.includes(c.id)) {
                c.selected = false;
            }
            filterCard.push(c);
        });
        filterCards.push(filterCard);
    });

    return filterCards;
}