
export interface App {
  id: string
  name: string
  description: string
  accentColor: string
  appStoreURL: string
  isDark: boolean
}

export const MyChefMateApp: App = {
  id: 'mychefmate',
  name: 'MyChefMate',
  description: 'MyChefMate is your smart kitchen companion: plan meals, discover new recipes, and manage your nutrition with ease.',
  accentColor: '#EB8777',
  isDark: false,
  appStoreURL: 'https://apps.apple.com/es/app/mychefmate-meal-planner/id6741718529',
}

export const MyBodyMateApp: App = {
  id: 'mybodymate',
  name: 'MyBodyMate',
  description: 'MyBodyMate helps you track your fitness journey, monitor progress, and stay motivated to reach your health goals.',
  accentColor: '#FF9E5E',
  isDark: true,
  appStoreURL: "",
}

export const MyFoodMateApp: App = {
  id: 'myfoodmate',
  name: 'MyFoodMate',
  description: 'MyFoodMate helps you scan, track, and understand what you eat with instant food recognition and smart analysis.',
  accentColor: '#A87BD3',
  appStoreURL: "",
  isDark: true,
}

export const TheMateClubApp: App = {
  id: 'themateclub',
  name: 'TheMateClub',
  description: 'TheMateClub is your all-in-one hub for health and wellness apps, offering personalized solutions to help you achieve your fitness and nutrition goals.',
  accentColor: '#A87BD3',
  appStoreURL: "",
  isDark: true,
}

export const developApps: App[] = [
  MyChefMateApp,
  MyBodyMateApp,
  // MyFoodMateApp,
]
