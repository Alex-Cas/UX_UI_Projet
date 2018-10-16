import StorageHelper from '../Helpers/StorageHelper.js'

class Attractions
{

    static list() {

        var attractions = StorageHelper.list('attractions')
        return attractions
    }

    static get(id) {

        var attractions = StorageHelper.list('attractions')
        var attraction = null

        attractions.some(item => {
            if (item.id === id) {
                attraction = item
                return true
            }
            return false
        })

        return attraction
    }
}

export default Attractions