
export interface App {
  id: string
  name: string
  accentColor: string
  appStoreURL: string
  isDark: boolean
}

export const MyChefMateApp: App = {
  id: 'mychefmate',
  name: 'MyChefMate',
  accentColor: '#EB8777',
  isDark: false,
  appStoreURL: 'https://apps.apple.com/app/id6741718529',
}

export const MyBodyMateApp: App = {
  id: 'mybodymate',
  name: 'MyBodyMate',
  accentColor: '#FF9E5E',
  isDark: true,
  appStoreURL: "https://apps.apple.com/app/id6747906886",
}

export const MyFoodMateApp: App = {
  id: 'myfoodmate',
  name: 'MyFoodMate',
  accentColor: '#A87BD3',
  appStoreURL: "https://apps.apple.com/app/id6748889525",
  isDark: true,
}

export const MyHeadshotApp: App = {
  id: 'myheadshot',
  name: 'MyHeadshot',
  accentColor: '#005B8F',
  appStoreURL: "https://apps.apple.com/app/id6749377385",
  isDark: true,
}

export const MyScannerApp: App = {
  id: 'myscanner',
  name: 'MyScanner',
  accentColor: '#007C91',
  appStoreURL: "https://apps.apple.com/app/id6749808333",
  isDark: true,
}

export const MyBananaApp: App = {
  id: 'mybanana',
  name: 'MyBanana',
  accentColor: '#FFD84D',
  appStoreURL: "https://apps.apple.com/app/id6752826869",
  isDark: true,
}

export const TheMateClubApp: App = {
  id: 'themateclub',
  name: 'TheMateClub',
  accentColor: '#A87BD3',
  appStoreURL: "",
  isDark: true,
}

export const developApps: App[] = [
  MyChefMateApp,
  MyBodyMateApp,
  MyFoodMateApp,
  MyHeadshotApp,
  MyScannerApp,
  MyBananaApp,
]
