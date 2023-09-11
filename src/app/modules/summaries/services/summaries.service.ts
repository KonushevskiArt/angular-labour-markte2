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
      expectedSalary: {
        value: 750,
        currency: '$' 
      },
      createdBy: 'Artem',
      id: '4324asdf2344523asdfasgd2',
      workExperience: [
        'one year there, one year here and so on...',
        'one year there, one year here and so on...'
      ],
      name: 'Artem',
      surname: 'Ivanow',
      birthDate: '02.02.1994',
      location: 'Minsk',
      targetVacancy: 'Frontend developer (Angular, React)',
      employment: 'fulltime',
    },
    {
      contactNumber: '+375-29-555-55-33',
      expectedSalary: {
        value: 650,
        currency: '$' 
      },
      createdBy: 'Artem',
      id: '4324asdf2344523asdfasgd2',
      workExperience: [
        'one year there, one year here and so on...',
        'one year there, one year here and so on...'
      ],
      name: 'Gala',
      surname: 'Ivanowa',
      birthDate: '02.02.1994',
      location: 'Minsk',
      targetVacancy: 'Frontend developer (Angular, React)',
      employment: 'partTime',
    },
    {
      contactNumber: '+375-29-555-55-33',
      expectedSalary: {
        value: 950,
        currency: '$' 
      },
      createdBy: 'Dima',
      id: '4324asdf2344523asdfasgd2',
      workExperience: [
        'one year there, one year here and so on...',
        'one year there, one year here and so on...'
      ],
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
  getOneById = (id: string) => {
    return this.summaries.find((el) => {
      return el.id === id
    })
  }
}
