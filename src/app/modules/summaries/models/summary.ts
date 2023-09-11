import { ISalary, Location } from "../../vacancies/models/vacancy";


export interface SummaryModel {
  name: string,
  surname: string,
  contactNumber: string,
  birthDate: string,
  location: string,

  targetVacancy: string,
  employment: string,

  workExperience : string[],
  expectedSalary: ISalary,

  createdBy: string,
  id: string
}