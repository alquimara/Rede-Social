import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { PostComponent } from './post/post.component';
import { LinhaTempoComponent } from './linha-tempo/linha-tempo.component';
import { PostInputComponent } from './post-input/post-input.component';
import { routing } from './app.routing';
import {PostService} from '../app/post/post.service';
import { FormsModule } from '@angular/forms';
import { PaginaInputComponent } from './pagina-input/pagina-input.component'
import{HttpModule} from '@angular/http';






@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavegadorComponent,
    PostComponent,
    LinhaTempoComponent,
    PostInputComponent,
    PaginaInputComponent,
    

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
