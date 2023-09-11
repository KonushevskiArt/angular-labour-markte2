import { Component, OnInit } from '@angular/core';
import { SummariesService } from '../../services/summaries.service';
import { SummaryModel } from '../../models/summary';

@Component({
  selector: 'app-summaries-page',
  templateUrl: './summaries-page.component.html',
  styleUrls: []
})
export class SummariesPageComponent implements OnInit {
  constructor(private summariesService: SummariesService) {}

  loading = true;

  summaries: Promise<SummaryModel[]>;

  ngOnInit(): void {
    this.summaries = Promise.resolve(() => 
      this.summariesService.getAll()
    )
    .then((data) => {
      setTimeout(() => {
        this.loading = false;       
      }, 1000)
      console.log(data());
      return data();
      
      // this.vacancies = data();
    });
  }

}
