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

    static create(person) {

        var toReturn = false
        toReturn = StorageHelper.create('personnel', person)

        return toReturn
    }

    static delete(id) {

        var toReturn = false
        toReturn = StorageHelper.delete('personnel', id)

        return toReturn
    }
}

export default Personnel