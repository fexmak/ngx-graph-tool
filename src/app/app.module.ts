import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { InheritanceToolComponent } from './components/inheritance-tool/inheritance-tool.component';
import { OrgchartModule } from '@dabeng/ng-orgchart';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxGraphToolComponent } from './components/ngx-graph-tool/ngx-graph-tool.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphToolExampleComponent } from './components/ngx-graph-tool-example/ngx-graph-tool-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    InheritanceToolComponent,
    NgxGraphToolComponent,
    NgxGraphToolExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    OrgchartModule,
    NgxGraphModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
