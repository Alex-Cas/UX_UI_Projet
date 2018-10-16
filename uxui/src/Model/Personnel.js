import StorageHelper from '../Helpers/StorageHelper.js'

class Personnel
{
    static list() {

        var personnel = StorageHelper.list('personnel')
        return personnel
    }

    static get(id) {

        var person = StorageHelper.get('personnel', id)
        return person
    }
}

export default Personnel