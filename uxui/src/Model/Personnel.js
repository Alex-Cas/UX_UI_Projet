import StorageHelper from '../Helpers/StorageHelper.js'

class Personnel
{
    static list() {

        var personnel = StorageHelper.list('personnel')
        return personnel
    }

    static get(id) {

        var personnel = StorageHelper.list('personnel')
        var person = null

        personnel.some(item => {
            if (item.id === id) {
                person = item
                return true
            }
            return false
        })

        return person
    }
}

export default Personnel