import StorageHelper from '../Helpers/StorageHelper.js'

class Maintenances
{
    static list(context, id) {

        var maintenances = StorageHelper.list('maintenances')
        var toReturn = []
        
        maintenances.forEach(item => {
            if (item[context + '_id'] === id) {
                toReturn.push(item)
            }
        })

        return toReturn
    }

    /*static get(id) {

        var attraction = StorageHelper.get('attractions', id)
        return attraction
    }*/
}

export default Maintenances