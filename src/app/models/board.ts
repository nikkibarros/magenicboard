import { CardsList } from './cards-list';

export class Board {
    public name: string;
    public cardsLists: CardsList[];

    constructor (
        name: string
    ) {
        this.name = name;
    }
}
