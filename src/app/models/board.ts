import { CardsList } from './cards-list';

export class Board {
    public id: number;
    public name: string;
    public path: string;
    public cardsLists: CardsList[];

    constructor (
        name: string,
        path: string
    ) {
        this.name = name;
        this.path = path;
    }
}
