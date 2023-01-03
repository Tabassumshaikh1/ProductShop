import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LifeComponent } from './component/life/life.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MydataComponent } from './component/mydata/mydata.component';
import { NavComponent } from './component/nav/nav.component';
import { AddprodComponent } from './component/addprod/addprod.component';
import { UpdateprodComponent } from './component/updateprod/updateprod.component';
import { AddtocartitemsComponent } from './components/addtocartitems/addtocartitems.component';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './component/search/search.component';
import { LoginComponent } from './component/login/login.component';
import { RegisComponent } from './component/regis/regis.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './component/view/view.component';
// import { AddtocartitemsComponent } from './components/addtocartitems/addtocartitems.component';
// import { AddtocartComponent } from './component/addtocart/addtocart.component';
// import { AddtocartComponent } from './component/addtocart/addtocart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthGuard } from './guards/auth.guard';
import { AdminauthGuard } from './guards/adminauth.guard';
import { FrontComponent } from './component/front/front.component';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ParentComponent,
    ChildComponent,
    MydataComponent,
    NavComponent,
    AddprodComponent,
    UpdateprodComponent,
    AddtocartitemsComponent,
    SearchComponent,
    LoginComponent,
    RegisComponent,
    ViewComponent,
    FrontComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [AuthGuard, AdminauthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
