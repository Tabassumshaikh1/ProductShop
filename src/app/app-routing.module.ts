import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddprodComponent } from './component/addprod/addprod.component';
import { FrontComponent } from './component/front/front.component';
import { LoginComponent } from './component/login/login.component';
// import { AddtocartComponent } from './component/addtocart/addtocart.component';
// import { AddtocartComponent } from './component/addtocart/addtocart.component';
import { MydataComponent } from './component/mydata/mydata.component';
import { NavComponent } from './component/nav/nav.component';
import { RegisComponent } from './component/regis/regis.component';
import { UpdateprodComponent } from './component/updateprod/updateprod.component';
import { ViewComponent } from './component/view/view.component';
import { AddtocartitemsComponent } from './components/addtocartitems/addtocartitems.component';
import { AdminauthGuard } from './guards/adminauth.guard';
import { AuthGuard } from './guards/auth.guard';

// AddprodComponent
// MydataComponent
const routes: Routes = [
  {path:'', component:FrontComponent},
  {path:'home', component:MydataComponent},
  {path:'addprod', component:AddprodComponent,canActivate:[AuthGuard,AdminauthGuard]},
  {path:'updateprod/:id',component:UpdateprodComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisComponent},
  {path:'view/:id',component:ViewComponent , canActivate:[AuthGuard]},
  {path:'mydata',component:MydataComponent},
  // {path:'view1',component:ViewComponent},
  
  {path:'addtocartitems',component:AddtocartitemsComponent},
  
  // {path:'addtocart',component:AddtocartComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
