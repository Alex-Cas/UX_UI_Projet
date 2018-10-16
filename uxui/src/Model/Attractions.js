import StorageHelper from '../Helpers/StorageHelper.js'

class Attractions
{

    static list() {

        var attractions = StorageHelper.list('attractions')
        return attractions
    }

    static get(id) {

        var attraction = StorageHelper.get('attractions', id)
        return attraction
    }
}

export default Attractions