import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-circular',
  templateUrl: './grafico-circular.component.html',
  styles: []
})
export class GraficoCircularComponent {

  @Input() chartLabels: string[] = [];
  @Input() chartData: number[] = [];
  @Input() chartType: string = '';
  @Input() leyenda: string = '';

  constructor() { }

}
