import type { Irepository } from './Irepository'

import type { Team } from '~/types/data_model'
import Teams from '~~/assets/data/team.json'
// import Authenications from '~/assets/data/authenications.json'
export class JSONRepository implements Irepository {
    getAllTeams (): Team[] {
        return Teams
    }

    // getAllAuthenications (): Authenication[] {
    //     return Authenications
    // }
}
