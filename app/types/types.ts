export interface WhatsAppState {
  show: boolean;
  messageVisible: boolean;
  notificationVisible: boolean;
}

export interface Project {
  id: number;
  name: string;
  logo: string;
  mainImg: string;
  client: string;
  color_bg_logo: string;
  color_bg_title: string;
  color_title: string;
  url: string;
  intro: {
      coverImg: string;
      services: string[];
      tech: string[];
      year: string;
      url: string;
  };
  imagesType: string;
  firstTitle: string;
  firstDescription: string[];
  firstGroupImages: string[];
  secondtitle: string;
  secondDescription: string[];
  secondGroupImages: string[];
  titleSEO: string;
  descriptionSEO: string;
}

export interface ProjectExperience {
  title: string;
  nameCompany: string;
  img: string;
  type: string;
  description: string[];
  skills: string[];
  place: string;
  startDate: string;
  endDate: string;
  durationMonths: string;
  modality: string;
  webLink: string;
}
