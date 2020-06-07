import { Report } from './report';
export class User {

    /*
    public contraseña? : string;
    public correo? : string;
    */

    constructor(
        public nombre?: string,
        public correo?: string,
        public contrasena?: string
        
        /*
        public id? : string,
        public report? : Report
        */){
    }
}
