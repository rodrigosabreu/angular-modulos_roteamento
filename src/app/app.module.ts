import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router'; modulo de roteamento foi separado
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
//import { MenuComponent } from './navegacao/menu/menu.component';
//import { HomeComponent } from './navegacao/home/home.component';
//import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
//import { rootRouterConfig } from './app.routes'; modulo de roteamento foi separado
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    //MenuComponent,
    //HomeComponent,
    //FooterComponent,    
    SobreComponent,
    CadastroComponent   
  ],
  imports: [
    NavegacaoModule,//modulo separado
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    //[RouterModule.forRoot(rootRouterConfig, { useHash: false})]
    AppRoutingModule//modulo de roteamento separado
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
