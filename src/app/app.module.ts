import { AngularMaterialModule }            from './angular-material/angular-material.module';
import { AppRoutingModule }                 from './app-routing.module';
import { BrowserModule }                    from '@angular/platform-browser';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }                 from '@angular/common/http';
import { HttpClientInMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { NgModule }                         from '@angular/core';

import { DisableControlDirective }  from './directive/enable-disable-directive';

import { InMemoryDataService } from './service/in-memory-data.service';

import { AppComponent }             from './app.component';
import { CreateProjectComponent }   from './create-project/create-project.component';
import { NavigationBarComponent }   from './navigation-bar/navigation-bar.component';
import { MessagesComponent }        from './messages/messages.component';

import { ComponentDialogComponent }          from './component-dialog/component-dialog.component';
import { ComponentLoadingComponent } from './component-loading/component-loading.component';
import { FieldAutocompleteComponent } from './field-autocomplete/field-autocomplete.component';
import { FieldDaterangeComponent }  from './field-daterange/field-daterange.component';
import { FieldInputComponent } from './field-input/field-input.component';
import { FieldTextComponent } from './field-text/field-text.component';

import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { Ebiosrm11Component } from './ebiosrm1/ebiosrm11.component';
import { Ebiosrm12Component } from './ebiosrm1/ebiosrm12.component';
import { Ebiosrm13Component } from './ebiosrm1/ebiosrm13.component';
import { Ebiosrm14Component } from './ebiosrm1/ebiosrm14.component';
import { Ebiosrm21Component } from './ebiosrm2/ebiosrm21.component';
import { Ebiosrm22Component } from './ebiosrm2/ebiosrm22.component';
import { Ebiosrm23Component } from './ebiosrm2/ebiosrm23.component';
import { Ebiosrm31Component } from './ebiosrm3/ebiosrm31.component';
import { Ebiosrm32Component } from './ebiosrm3/ebiosrm32.component';
import { Ebiosrm33Component } from './ebiosrm3/ebiosrm33.component';
import { Ebiosrm41Component } from './ebiosrm4/ebiosrm41.component';
import { Ebiosrm42Component } from './ebiosrm4/ebiosrm42.component';
import { Ebiosrm51Component } from './ebiosrm5/ebiosrm51.component';
import { Ebiosrm52Component } from './ebiosrm5/ebiosrm52.component';
import { Ebiosrm53Component } from './ebiosrm5/ebiosrm53.component';
import { EbiosrmObjectifComponent } from './ebiosrm/ebiosrm-objectif.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDialogComponent,
    ComponentLoadingComponent,
    MessagesComponent,

    FieldAutocompleteComponent,
    FieldDaterangeComponent,
    FieldInputComponent,
    FieldTextComponent,
    
    DisableControlDirective,

    NavigationBarComponent,
    DashboardUserComponent,
    CreateProjectComponent,

    EbiosrmObjectifComponent,
    Ebiosrm11Component,Ebiosrm12Component,Ebiosrm13Component,Ebiosrm14Component,
    Ebiosrm21Component,Ebiosrm22Component,Ebiosrm23Component,
    Ebiosrm31Component,Ebiosrm32Component,Ebiosrm33Component,
    Ebiosrm41Component,Ebiosrm42Component,
    Ebiosrm51Component,Ebiosrm52Component,Ebiosrm53Component, TodoComponent, LoginComponent, DashboardAdminComponent,        
  ],
  entryComponents:[],
  //Peut-etre ajouter DialogComp dans entry
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,

    //The HttpClientInMemoryWebApiModule module intercepts http requests
    //and returns simulated server responses.
    //Remove it when a real server is ready to receive requests
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
