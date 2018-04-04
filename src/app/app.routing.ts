import { Routes, RouterModule } from '@angular/router';
import{LinhaTempoComponent} from '../app/linha-tempo/linha-tempo.component';
import{ PaginaInputComponent } from '../app/pagina-input/pagina-input.component';

const APP_ROUTES: Routes =[
    {path:"", redirectTo:"/linhaTempo",pathMatch:"full"},
    {path:"linhaTempo", component:LinhaTempoComponent},
    {path:"Postar", component: PaginaInputComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);