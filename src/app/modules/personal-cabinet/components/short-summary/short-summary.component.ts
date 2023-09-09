import { Component, Input } from '@angular/core';
import { SummaryModel } from 'src/app/modules/summaries/models/summary';

@Component({
  selector: 'app-short-summary',
  templateUrl: './short-summary.component.html',
  styleUrls: ['./short-summary.component.css']
})
export class ShortSummaryComponent {

  @Input() data: SummaryModel

}
