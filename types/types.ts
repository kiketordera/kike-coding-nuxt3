export interface WhatsAppState {
  show: boolean;
  messageVisible: boolean;
  notificationVisible: boolean;
}

export interface Project {
  id: number
  name: string
  mainImg: string
  img: string
  logo: string
  url: string
  client: string
  intro: string[]
  coverImg: string
  link: string
  slogan: string
  service: Array<string>
  duration: string
  introText: string
  firstGroupImages: string[]
  secondGroupImages: string[]
  section: Array<string>
  backgroundColor: string
}
