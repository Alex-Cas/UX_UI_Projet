import StorageHelper from '../Helpers/StorageHelper.js'

class Buildings
{
    static list() {

        var buildings = StorageHelper.list('buildings')
        return buildings
    }

    static get(id) {
        
        var building = StorageHelper.get('buildings', id)
        return building
    }
}

export default Buildings