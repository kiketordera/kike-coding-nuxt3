
import { Irepository } from './Irepository'

import { Team } from '~/types/data_model'
import Teams from '~/assets/data/teams.json'
export class JSONRepository implements Irepository {
    getAllTeams (): Team[] {
        return Teams
     }
}
