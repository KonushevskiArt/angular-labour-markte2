import { SummaryModel } from "../../summaries/models/summary"
import { VacancyModel } from "../../vacancies/models/vacancy"

export const mockSummaries: SummaryModel[] = [
  {
    contactNumber: '+375-29-555-55-33',
    expectedSalary: {
      value: 1600,
      currency: '$'
    },
    createdBy: 'Artem',
    id: '4324asdf2344523asdfasgd2',
    workExperience: [
      'first i worked there',
      'then in another place',
      'and as result i finished here'
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
      value: 900,
      currency: '$'
    },
    createdBy: 'Artem',
    id: '4324asdf2344523asdfasgd2',
    workExperience: [
      'first i worked there',
      'then in another place',
      'and as result i finished here'
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
      value: 200,
      currency: '$'
    },
    createdBy: 'Dima',
    id: '4324asdf2344523asdfasgd2',
    workExperience: [
      'first i worked there',
      'then in another place',
      'and as result i finished here'
    ],
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
    description: [
      'Our company seeking for experienced fronted developer with experience',
      'Our company seeking for experienced fronted developer with experience',
      'Our company seeking for experienced fronted developer with experience',
      'Our company seeking for experienced fronted developer with experience'
    ],
    workExperience: 1,
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
    salary: {
      value: 600,
      currency: '$'
    },
    createdBy: 'Artem',
    id: '4324asdf234gd2'
  },
  {
    title: 'driver',
    date: '04.09.2023',
    description: [
      'Our company seeking for experienced fronted developer with experience',
      'Our company seeking for experienced fronted developer with experience',
      'Our company seeking for experienced fronted developer with experience',
      'Our company seeking for experienced fronted developer with experience'
    ],
    workExperience: 2,
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
    salary: {
      value: 500,
      currency: '$'
    },
    createdBy: 'Artem',
    id: '4324fghf234fdsd2'
  },
  {
    title: 'строитель',
    workExperience: 0,
    date: '05.09.2023',
    description: [
      'Our company seeking for experienced fronted developer with experience',
      'Our company seeking for experienced fronted developer with experience',
      'Our company seeking for experienced fronted developer with experience',
      'Our company seeking for experienced fronted developer with experience'
    ],
    
    requirements: 
    [
      'хорошая физическая подготовка',
      'без вредных привычек'
    ],
    contactNumber: '+375-29-222-22-02',
    location: {
      city: 'Минск',
      street: 'Ванеева',
      house: '24'
    },
    salary: {
      value: 1600,
      currency: 'BR'
    },
    createdBy: 'Artem',
    id: '43234gfdf2dfg4gddfg232'
  }
]