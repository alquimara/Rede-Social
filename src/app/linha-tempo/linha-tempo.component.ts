import { Component, OnInit, Input } from '@angular/core';
import { PostModelo } from '../post/post-modelo';
import {PostService} from '../post/post.service';
import { error } from 'protractor';

@Component({
  selector: 'app-linha-tempo',
  templateUrl: './linha-tempo.component.html',
  styleUrls: ['./linha-tempo.component.css'],
})
export class LinhaTempoComponent implements OnInit {

 posts:PostModelo[];
  constructor(private postservice:PostService) {}

  ngOnInit(){
    this.fillTable();

  }
  fillTable() {
    this.postservice.getPost()
      .subscribe((data) => {
        this.posts = data;
      },
        (error) => console.log(error));
  }
  

  likeRecebido(dado){
    dado.qtdCurtidas = dado.qtdCurtidas+1
    this.postservice.Curtidas(dado)
    .subscribe((data) => {
      
    },
    (error) => console.log(error));

  }
  postExcluido(dado){
    this.postservice.excluir(dado)
    .subscribe((data) => {
      this.fillTable();
    },
    (error) => console.log(error));
  }
  
  buscar(dado){
    console.log(this.postservice.buscarPost(dado));
  }



}
