import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {path:'template', component:TemplateComponent},
  {path:'**',pathMatch:'full',redirectTo:'template'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
