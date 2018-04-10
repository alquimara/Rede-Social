import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostService } from  '../post/post.service'
import { PostModelo } from '../post/post-modelo';
import { LinhaTempoComponent } from '../linha-tempo/linha-tempo.component';


@Component({
  selector: 'app-pagina-input',
  templateUrl: './pagina-input.component.html',
  styleUrls: ['./pagina-input.component.css']
  
})
export class PaginaInputComponent implements OnInit {
 

  constructor(private PostService:PostService) { }
 

  ngOnInit() {
    
  }

  postEnviado(post){
    this.PostService.inserirPost(post)
      .subscribe((data) => {
        console.log(data);
      },
        (error) => console.log(error));
    
  }

}
