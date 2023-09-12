import { Injectable } from '@angular/core';
import { mockSummaries, mockVacancies } from './mock';

@Injectable({
  providedIn: 'root'
})
export class PersonalCabinetService {

  constructor() { }

  user = {
    email: 'string@gmial.com',
    nickname: 'vasa',
    contactNumber: '+375 29 545 54 67',
    vacancies: [],
    summaries: [],
  }

  getUserVacancies =  () => {
    return mockVacancies;
  }

  getUserSummaries =  () => {
    return mockSummaries;
  }
}
