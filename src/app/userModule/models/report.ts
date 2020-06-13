export class Report {

    public likes?: number;
    public dislikes?: number;

    constructor(
        public id?: string,
        public titulo?: string,
        public nombre?: string,
        public fecha?,
        public descripcion?: string,
        public foto?
    ){}
}
