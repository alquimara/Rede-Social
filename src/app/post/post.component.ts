import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostModelo } from './post-modelo';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  @Input() posts: PostModelo;
  @Output() recebeuLike = new EventEmitter();
  @Output() foiExcluido = new EventEmitter();
  @Output() verificado = new EventEmitter();
 
  

  onClick(){
    this.recebeuLike.emit(this.posts);
  }
  excluirPost(){
    this.foiExcluido.emit(this.posts);
  }
  buscar(){
    this.verificado.emit(this.posts);
  }
}
