import{Injectable} from '@angular/core';
import{PostModelo} from "./post-modelo";
import { post } from 'selenium-webdriver/http';

@Injectable()

export class PostService{

    private posts = [
        new PostModelo(1, "Alquimara", "nao gosto disto", 0),
        new PostModelo(2, "Adonai", "nem eu", 0),
    ];
    getPost(){
        return this.posts;
    }
    Curtidas(post){
        post.qtdCurtidas = post.qtdCurtidas +=1;
        
    }
    excluir(id){
        for(let i of this.posts){
            if (i.id == id){
                var index = this.posts.indexOf(i);
                if (index > -1) {
                    this.posts.splice(index, 1);
                }
            }
        }   

    }
    inserirPost(post){
        this.posts.push(post);
        console.log(this.posts);
    }
    buscarPost(post){
        for(let i of this.posts){
              if (i == post){
                  return i.id;
              }
          }

    }



}