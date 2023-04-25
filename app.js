import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";
  //this.template.querySelector('div');

  empresa = "Sony"
  cnpj = "12.345.678/0001-00"
  endereco = "Rua X, Número 123"
  produto = "PS5"
  descricao = "Console"
  preco = 5000
  promocao = 4600
  oferta1 = 4570
  oferta2 = 4500

  visibleDiv1 = true
  visibleDiv2 = true
  visibleDiv3 = true
  visibilidadeImgOculta = true
  visibilidadeImgResp = false

  visibilidadeDiv () {
    this.visibleDiv2 = !this.visibleDiv2
    this.visibleDiv3 = !this.visibleDiv3
  }

  verificarImg() {
    this.visibilidadeImgOculta = !this.visibilidadeImgOculta
    this.visibilidadeImgResp = !this.visibilidadeImgResp
  }
}
