import StorageHelper from '../Helpers/StorageHelper.js'

class Buildings
{
    static list() {

        var buildings = StorageHelper.list('buildings')
        return buildings
    }

    static get(id) {

        var buildings = StorageHelper.list('buildings')
        var building = null

        buildings.some(item => {
            if (item.id === id) {
                building = item
                return true
            }
            return false
        })

        return building
    }
}

export default Buildings