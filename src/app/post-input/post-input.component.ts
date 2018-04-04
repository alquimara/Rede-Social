import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import{PostService} from '../post/post.service';
import { PostModelo } from '../post/post-modelo';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent  {
  @Output() envioPosts = new EventEmitter();
  nome: string = "";
  publicacao:string = "";
  

  constructor(private PostService:PostService) { }

  adicionarPost($event){
    event.preventDefault();
    this.envioPosts.emit(
      new PostModelo(this.PostService.getPost()[this.PostService.getPost().length - 1].id + 1
                    ,this.nome, this.publicacao, 0));
  }

}
