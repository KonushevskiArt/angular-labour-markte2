import { Component } from '@angular/core';
import { SummariesService } from '../../services/summaries.service';
import { ActivatedRoute } from '@angular/router';
import { SummaryModel } from '../../models/summary';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent {
  constructor(public route: ActivatedRoute, private summariesService: SummariesService) {}

  vacancyId: string;
  data: SummaryModel | undefined;

  name: string;
  surname: string;
  contactNumber: string;
  birthDate: string;
  location: string;
  targetVacancy: string;
  employment: string;
  workExperience : string;
  expectedSalary: string;
  createdBy: string;
  id: string

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.vacancyId = params['id'];
      this.data = this.summariesService.getOneById(this.vacancyId)

      if (this.data) {
        this.name = this.data.name;
        this.surname = this.data.surname;
        this.location = this.data.location;
        this.targetVacancy = this.data.targetVacancy;
        this.expectedSalary = this.data.expectedSalary;
        this.employment = this.data.employment;
        this.createdBy = this.data.createdBy
        this.workExperience = this.data.workExperience
        this.contactNumber = this.data.contactNumber
 
      }

      
    })
    
    
  }

}
