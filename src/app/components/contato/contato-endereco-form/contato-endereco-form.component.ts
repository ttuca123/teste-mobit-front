import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Contato } from 'src/app/dto/contato';
import { Endereco } from 'src/app/dto/endereco';
import { ContatoService } from 'src/app/services/contato.service';
import { GeoService } from 'src/app/services/geo.service';
import { PageForm } from 'src/app/utils/page-form';
import { View } from 'src/app/utils/view';

@Component({
  selector: 'app-contato-endereco-form',
  templateUrl: './contato-endereco-form.component.html',
  styleUrls: ['./contato-endereco-form.component.scss']
})
export class ContatoEnderecoFormComponent extends View implements OnInit  {

  endereco: Endereco;  
  page: PageForm = new PageForm();  
  @ViewChild(MatTable) table: MatTable<Endereco>;  
  @Input('contato') contato: Contato;  

  displayedColumns: string[] = ['cep', 'logradouro', 'bairro', 'cidade', 'uf', 'tipo', 'remover'];

constructor(    
    private geoService: GeoService,
    public override loading: MatDialog,
    public contatoService: ContatoService
  ) {
    super('Cadastro de Enderecos', loading);
  }


  ngOnInit() {
    this.novoEndereco(); 
    if(this.contato.codigo!=undefined){
      alert('contato existe');
    }
    
  }

  novoEndereco() {    
    this.endereco = {
        cep: '',
        bairro: '',
        logradouro: '',
        cidade: '',
        uf: '',
        tipo: ''
      }
  }

  remover(endereco){
    console.log(endereco);
    if(this.endereco.id!=null){
      this.removerEnderecoServer(this.endereco.id);

    }
    this.contato.enderecos = this.contato.enderecos.filter(e => e != endereco);    
    this.table.renderRows();
  }


  removerEnderecoServer(id: number) {

    this.exibirLoading('Removendo Endereço');
    this.contatoService.removerEndereco(id)
    .subscribe(_ => {
      this.fecharLoading();
      alert('Endereço removido com sucesso.')
    }, err=> {
      console.error(err);
      alert('Oocrreu um erro.')
    })
  }

  addEndereco() {    
        
    this.endereco.cep.replaceAll('.', '').replaceAll('-', '');
    this.contato.enderecos.push(this.endereco);
    this.table.renderRows();
    this.novoEndereco();    
  }

  preencherEndereco(payload) {
    this.endereco.logradouro = payload.logradouro;
    this.endereco.bairro = payload.bairro;
    this.endereco.cidade = payload.localidade;
    this.endereco.uf = payload.uf;
  } 

  

  buscarCep(cep: string){
    
    if(cep.length==8){
      this.exibirLoading('Carregando dados de Endereço');
      this.subscription=this.geoService.findEnderecoByCep(cep)
      .subscribe(payload => {
        this.fecharLoading();   
        this.preencherEndereco(payload);        
      }, err=> {
        console.error(err);
        this.fecharLoading();
      });
    }

  }

}
