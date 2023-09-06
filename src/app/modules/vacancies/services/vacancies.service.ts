import { Injectable } from '@angular/core';
import { VacancyModel } from '../models/vacancy';

@Injectable()
export class VacanciesService {

  constructor() { }

  vacancies: VacancyModel[] = [
    {
      title: 'Frontend developer',
      data: '06.09.2023',
      description: 'Our company seeking for experienced fronted developer with experience' ,
      workExperience: '1 year',
      requirements: 
      [
        'html',
        'js',
        'Angular',
        'english'
      ],
      contactNumber: '+375295555533',
      location: {
        city: 'Minsk',
        street: 'Nemiga',
        house: '10'
      },
      salary: '600$',
      createdBy: 'Artem',
      id: '4324asdf234gd2'
    },
    {
      title: 'driver',
      data: '04.09.2023',
      description: 'Taxi service seeking for driver who wanna earn big money' ,
      workExperience: '1 year',
      requirements: 
      [
        'driver license',
      ],
      contactNumber: '+375294445533',
      location: {
        city: 'Minsk',
        street: 'Voloha',
        house: '10'
      },
      salary: '500$',
      createdBy: 'Artem',
      id: '4324fghf234fdsd2'
    },
    {
      title: 'строитель',
      workExperience: 'без опыта работы',
      data: '05.09.2023',
      description: 'Нужен строитель на стройку',
      
      requirements: 
      [
        'хорошая физическая подготовка',
      ],
      contactNumber: '+37529222222',
      location: {
        city: 'Минск',
        street: 'Ванеева',
        house: '24'
      },
      salary: '1500br',
      createdBy: 'Artem',
      id: '43234gfdf2dfg4gddfg232'
    }
  ]

  getAll = () => {

  }

  getByKeyWord = () => {

  }
  
}
