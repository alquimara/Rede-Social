export class PostModelo{
    id:number;
    nome:string;
    publicacao:string;
    qtdCurtidas:number;
    constructor(id,nome,publicacao,qtdCurtidas){
        this.id = id;
        this.nome = nome;
        this.publicacao = publicacao;
        this.qtdCurtidas = qtdCurtidas;

    }
}