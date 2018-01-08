import { Card } from './card';

export class CardsList {
    public name: string;
    public cards: Card[];

    constructor (
        name: string
    ) {
        this.name = name;
    }
}
