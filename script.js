// divListaProduto.insertAdjacentHTML('afterbegin', '');

class MeuErro extends Error {
    constructor(message){
      super(message);
      this.name = "Meu Erro";
    }
  }


class Produto{
    constructor( Nome, Data_de_Cadastro, Descricao,Preco){
        this.Nome = Nome;
        this.Data_de_Cadastro = Data_de_Cadastro;
        this.Descricao = Descricao;
        this.Preco = Preco;
    }
    imprimir() {
    try {
        return this.imprimi();
      } catch (error) {
        return error
      }
    }

    imprimi(){
        if (this.Nome != "" && this.Preco != "" && this.Descricao != "" && this.Data_de_Cadastro != ""){
            return `
        <div class="card-body">
            <h5 class="card-title">${this.Nome}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${'R$ ' + this.Preco} </h6>
            <p class="card-text">${this.Descricao}</p>
            <p class="card-text">${this.Data_de_Cadastro}</p>
        </div>
        ` 
            }else {
            throw new MeuErro("Mensagem de erro");
          }
        }
    }



    // pt 2

class ProdutosDestaque extends Produto{

    constructor(Nome, Data_de_Cadastro, Descricao,Preco, imagem){
        super(Nome, Data_de_Cadastro, Descricao,Preco),
        this.imagem = imagem

    };

    imprimirDestaque() {
        try {
            return this.MostrarDestaque();
          } catch (error) {
            return error
          }
        }

    MostrarDestaque(){
        if (this.Nome != "" && this.Preco != "" && this.Descricao != "" && this.Data_de_Cadastro != "" && this.imagem != ""){
        return `
        
            <img src=${this.imagem} class="card-img-top" alt="Rubi">
             <div class="card-body">
                 <h5 class="card-title">${this.Nome}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">${'R$ '+this.Preco}</h6>
                 <p class="card-text">${this.Descricao}</p>
                 <h6 class="card-subtitle mb-2 text-muted">${this.Data_de_Cadastro}</h6>
            </div>
        `
    }else {
        throw new MeuErro("Mensagem de erro");
        }
    }
}



let produtodestaque = new ProdutosDestaque("Rubi","13/01/1503","O rubi estava associado ao calor e à paixão e era considerado valioso por manter a saúde do corpo e da alma.", 12000, "https://static3.depositphotos.com/1002927/153/i/600/depositphotos_1539009-stock-photo-red-ruby.jpg");
let divDestaque = document.getElementById("produto-destaque");
divDestaque.insertAdjacentHTML('afterbegin', produtodestaque.imprimirDestaque());

let divListaProduto = document.getElementById("lista-produtos");
let produto= new Produto("Diamante", "27/03/2011", "carbono puro cristalizado no sistema cúbico, us. para fins industriais em ferramentas de corte e perfuração e como abrasivo; por sua dureza, brilho e beleza é uma das gemas mais preciosas.", 63000);
divListaProduto.insertAdjacentHTML('afterbegin', produto.imprimir())

