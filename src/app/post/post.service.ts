import{Injectable} from '@angular/core';
import{PostModelo} from "./post-modelo";
import { post } from 'selenium-webdriver/http';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()

export class PostService{
    url:string = "http://rest.learncode.academy/api/alquimara/posts";

    constructor(private http: Http){}

    posts:PostModelo[] = [];

    getPost(){
        return this.http.get(this.url)
        .map((response:Response) => {
            this.posts = [];
            for(let p of response.json()){
                this.posts.push(new PostModelo(p.id, p.nome, p.publicacao, p.qtdCurtidas))
            }
            return this.posts;

        })
        .catch((error: Response) => Observable.throw(error))
}

    Curtidas(post){
        console.log(post)
        return  this.http.put(this.url + '/' + post.id, {id:post.id, nome:post.nome, publicacao:post.publicacao, qtdCurtidas:post.qtdCurtidas})
        .map((response: Response) => response)
        .catch((error: Response) => Observable.throw(error));
  }
        
    excluir(posts:PostModelo){
        console.log(posts);
        return this.http.delete(this.url + "/" + posts.id)
            .map((response:Response) => response.text)
            .catch((error: Response) => Observable.throw(error)); 

    }
    inserirPost(post){
       
        post.id = "";
        return this.http.post(this.url, post)
        .map((response: Response) =>  response.json())
        .catch((error: Response) => Observable.throw(error));

    }
    buscarPost(post){
        for(let i of this.posts){
              if (i == post){
                  return i.id;
              }
          }

    }
}