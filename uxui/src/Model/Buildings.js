import StorageHelper from '../Helpers/StorageHelper.js'

class Buildings
{
    static list() {

        var buildings = StorageHelper.list('buildings')
        return buildings
    }

    static create(building) {

        var toReturn = false
        toReturn = StorageHelper.create('buildings', building)

        return toReturn
    }

    static get(id) {
        
        var building = StorageHelper.get('buildings', id)
        return building
    }
}

export default Buildings