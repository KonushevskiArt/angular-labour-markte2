export interface Location {
  city: string,
  street: string,
  house: string
}
export interface VacancyModel {
  title: string,
  date: string,
  description: string,
  workExperience : string,
  requirements: string[],
  contactNumber: string,
  location: Location,
  salary: string,
  createdBy: string,
  id: string
}