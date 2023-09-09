import { Component, OnInit } from '@angular/core';
import { PersonalCabinetService } from '../../services/personal-cabinet.service';
import { UserModel } from '../../models/user';
import { VacancyModel } from 'src/app/modules/vacancies/models/vacancy';
import { SummaryModel } from 'src/app/modules/summaries/models/summary';

@Component({
  selector: 'app-personal-cabinet-page',
  templateUrl: './personal-cabinet-page.component.html',
  styleUrls: ['./personal-cabinet-page.component.css']
})
export class PersonalCabinetPageComponent implements OnInit {

  constructor(private personalCabinetService: PersonalCabinetService) { }

  userData: UserModel;
  email: string;
  nickname: string;
  contactNumber: string;
  vacancies: VacancyModel[] = this.personalCabinetService.getUserVacancies();
  summaries: SummaryModel[];

  showingVacancies: boolean = true;
  showingSummaries: boolean;
  
  ngOnInit(): void {
    this.userData = this.personalCabinetService.user;
    this.email = this.userData.email;
    this.nickname = this.userData.nickname;
    this.contactNumber = this.userData.contactNumber;
  }


  showVacancies = async () => {
    this.vacancies = await this.personalCabinetService.getUserVacancies();
    this.showingVacancies = true;
    this.showingSummaries = false;
  }

  showSummaries = async () => {
    this.summaries = await this.personalCabinetService.getUserSummaries();
    this.showingSummaries = true;
    this.showingVacancies = false;
  }


}
