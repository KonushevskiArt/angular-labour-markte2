export interface Location {
  city: string,
  street: string,
  house: string
}

export interface ISalary {
  value: number,
  currency: string
}

export interface VacancyModel {
  title: string,
  date: string,
  description: string[],
  workExperience : number,
  requirements: string[],
  contactNumber: string,
  location: Location,
  salary: ISalary,
  createdBy: string,
  id: string
}