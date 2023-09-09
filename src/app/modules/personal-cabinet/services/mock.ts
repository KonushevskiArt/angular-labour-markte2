import { SummaryModel } from "../../summaries/models/summary"
import { VacancyModel } from "../../vacancies/models/vacancy"

export const mockSummaries: SummaryModel[] = [
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

export const mockVacancies: VacancyModel[] = [
  {
    title: 'Frontend developer',
    date: '06.09.2023',
    description: 'Our company seeking for experienced fronted developer with experience' ,
    workExperience: '1 year',
    requirements: 
    [
      'html',
      'js',
      'Angular',
      'english'
    ],
    contactNumber: '+375-29-555-55-33',
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
    date: '04.09.2023',
    description: 'Taxi service seeking for driver who wanna earn big money' ,
    workExperience: '1 year',
    requirements: 
    [
      'driver license',
    ],
    contactNumber: '+375-29-444-55-33',
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
    date: '05.09.2023',
    description: 'Нужен строитель на стройку',
    
    requirements: 
    [
      'хорошая физическая подготовка',
    ],
    contactNumber: '+375-29-222-22-02',
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