
import { Irepository } from './Irepository'

import { Authenication, Team } from '~/types/data_model'
import Teams from '~/assets/data/teams.json'
import Authenications from '~/assets/data/authenications.json'
export class JSONRepository implements Irepository {
    getAllTeams (): Team[] {
        return Teams
    }

    getAllAuthenications (): Authenication[] {
        return Authenications
    }
}
