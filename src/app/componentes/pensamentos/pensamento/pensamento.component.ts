import { Component, Input, OnInit } from '@angular/core';

// Interface
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento() {
    if(this.pensamento.conteudo.length > 256){
      return 'pensamento-g'
    } else
      return 'pensamento-p'
  }

}
