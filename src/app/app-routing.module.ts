import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InheritanceToolComponent } from './components/inheritance-tool/inheritance-tool.component';
import { NgxGraphToolComponent } from './components/ngx-graph-tool/ngx-graph-tool.component';
import { NgxGraphToolExampleComponent } from './components/ngx-graph-tool-example/ngx-graph-tool-example.component';
import { GeneralPurposeComponent } from './components/general-purpose/general-purpose.component';


const routes: Routes = [
  { path: 'inheritance-tool', component: InheritanceToolComponent },
  { path: 'ngx-graph-tool', component: NgxGraphToolComponent },
  { path: 'ngx-graph-tool-example', component: NgxGraphToolExampleComponent },
  { path: 'general-purpose', component: GeneralPurposeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
