import { Injectable } from '@angular/core';
import { SummaryModel } from '../models/summary';

@Injectable({
  providedIn: 'root'
})
export class SummariesService {

  constructor() { }

  private summaries: SummaryModel[] = [
    {
      contactNumber: '+375-29-555-55-33',
      expectedSalary: '600$',
      createdBy: 'Artem',
      id: '4324asdf2344523asdfasgd2',
      workExperience: 'one yesr there, one year here and so on...',
      name: 'Artem',
      surname: 'Ivanow',
      birthDate: '02.02.1994',
      location: 'Minsk',
      targetVacancy: 'Frontend developer (Angular, React)',
      employment: 'fulltime',
    },
    {
      contactNumber: '+375-29-555-55-33',
      expectedSalary: '700$',
      createdBy: 'Artem',
      id: '4324asdf2344523asdfasgd2',
      workExperience: 'one yesr there, one year here and so on...',
      name: 'Gala',
      surname: 'Ivanowa',
      birthDate: '02.02.1994',
      location: 'Minsk',
      targetVacancy: 'Frontend developer (Angular, React)',
      employment: 'partTime',
    },
    {
      contactNumber: '+375-29-555-55-33',
      expectedSalary: '200$',
      createdBy: 'Dima',
      id: '4324asdf2344523asdfasgd2',
      workExperience: 'one yesr there, one year here and so on...',
      name: 'Artem',
      surname: 'Ivanow',
      birthDate: '02.02.1994',
      location: 'Minsk',
      targetVacancy: 'Frontend developer (Angular, React)',
      employment: 'projectWork',
    }
  ]

  getAll = () => {
    return this.summaries;
  }

  getByKeyWord = () => {

  }
}
