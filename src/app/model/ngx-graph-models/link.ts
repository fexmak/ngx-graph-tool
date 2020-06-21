export class Link {

    constructor(id: string, source: string, target: string){
        this.id = id;
        this.source = source;
        this.target = target;
    }

    id: string;
    source: string;
    target: string;
    label: string;
}
