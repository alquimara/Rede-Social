import { Component, OnInit, Input } from '@angular/core';
import { PostModelo } from '../post/post-modelo';
import {PostService} from '../post/post.service';

@Component({
  selector: 'app-linha-tempo',
  templateUrl: './linha-tempo.component.html',
  styleUrls: ['./linha-tempo.component.css'],
})
export class LinhaTempoComponent implements OnInit {

  posts:PostModelo[];
  constructor(private postservice:PostService) {}

  ngOnInit(){
    this.posts = this.postservice.getPost();
  }
  likeRecebido(dado){
    this.postservice.Curtidas(dado)
    console.log(dado);
  }
  postExcluido(dado){
    this.postservice.excluir(dado.id);

  }
  buscar(dado){
    console.log(this.postservice.buscarPost(dado));
  }



}
