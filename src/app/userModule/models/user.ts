import { Report } from './report';
export class User {

    public contraseña? : string;
    public correo? : string;

    constructor(
        public nombre? : string,
        public id? : string,
        public report? : Report
    ){
        
    }
}
