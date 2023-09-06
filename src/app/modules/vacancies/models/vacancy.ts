export interface VacancyModel {
  title: string,
  data: string,
  description: string,
  workExperience : string,
  requirements: string[],
  contactNumber: string,
  location: {
    city: string,
    street: string,
    house: string
  }
  salary: string,
  createdBy: string,
  id: string
}