import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import{PostService} from '../post/post.service';
import { PostModelo } from '../post/post-modelo';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent  {
  @Output() envioPosts = new EventEmitter();
  nome: string = "";
  publicacao:string = "";
  id:number;
  qtdCurtidas:number;


  constructor(private PostService:PostService) {}

  adicionarPost($event){
    event.preventDefault();   
    this.envioPosts.emit(
      new PostModelo(this.id,this.nome, this.publicacao, this.qtdCurtidas));
  }

}
