// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// ng2-Charts
import { ChartsModule } from 'ng2-charts';
// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
// Modulos
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoCircularComponent } from '../components/grafico-circular/grafico-circular.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoCircularComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule,
  ]
})
export class PagesModule { }
