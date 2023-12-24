export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutus",
  Projects = "projects",
  ContactUs = "contactus"
}

export interface CardType {
  title: string;
  description: string;
}

export interface ProjectType {
  name: string;
  description?: string;
  image: string
}