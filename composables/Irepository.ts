import { Team } from '~~/types/data_model'

export interface Irepository {
     getAllTeams: () => Team[];
     // getAllAuthenications: () => Authenication[];
}
