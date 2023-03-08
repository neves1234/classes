class Ator{
    constructor(nome, nacionalidade){
        this.nome=nome;
        this.nacionalidade=nacionalidade;
    }
}

class Diretor{
    constructor(nome, nacionalidade){
        this.nome=nome;
        this.nacionalidade=nacionalidade;
    }
}

class filme{
    constructor(id, titulo, ano, genero, duraçao, sinopse, cartaz, direçao, elenco, classificaçao, avaliaçao){
        this.id=id;
        this.ano=ano;
        this.genero=genero;
        this.titulo=titulo;
        this.duraçao=duraçao;
        this.sinopse=sinopse;
        this.cartaz=cartaz;
        this.direçao=direçao;
        this.elenco=elenco;
        this.classificaçao=classificaçao;
        this.avaliaçao=avaliaçao;
    }
}
let filme1 = newfilme(1,"Vingadores: Ultimato", 2019, "Ação/Ficção científica","3h2m","Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
"https://www.elo7.com.br/cartaz-poster-vingadores-4-ultimato-filme-marvel-avengers/dp/F1E345","Anthony Russo, Joe Russo",12,4,7 );
console.log(filme1.toString());//titulo:Vingadores: Ultimato, Ano:2019, Genero:Ação/ficção cientifica, Duraçao:3h2m, sinopse: Apos thanos eliminar metade das criaturas vivas, os vingadores tem de lidar com a perda de amigos e entes queridos. Com tony stark vagando perdido no espaço sem agua e comida, steve rogers e natasha romanov lideram a resistencia contra o titã louco., direção:Anthony Russo, Joe Russo, elenco: Robert downey jr, chris evans, scarlett johansson, chris hemsworth, mark ruffalo, jeremy Renner, brie larson, paul rudd, don cheadle, elizabeth olsen, chadwick boseman, tom holland, classificaçao:12, Avaliaçao 4.7
