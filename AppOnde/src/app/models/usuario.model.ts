export class UsuarioModel{
    id?: string;
    nombre: string;
    mail: string;
    genero: boolean;
    password: string;

    constructor(){
        this.id = "";
        this.nombre= "";
        this.mail = "";
        this.genero = true;
        this.password = "";
    }

    setName(name:string){
        this.nombre = name;
    }
}