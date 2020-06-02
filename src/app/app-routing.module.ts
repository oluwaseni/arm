import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {path:'', redirectTo:'app/home', pathMatch:'full'},
  {path: 'app', component: AppComponent, children:[

    {path:'', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'blog', component: BlogComponent},
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
