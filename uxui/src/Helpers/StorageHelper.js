class StorageHelper
{
    static list(key)
    {
        var toReturn = JSON.parse(localStorage.getItem(key))
        return toReturn
    }

    static get(key, id)
    {
        var items = JSON.parse(localStorage.getItem(key))
        var item = false
        
        items.some(i => {
            if (i.id === id) {
                item = i
                return true
            }
            return false
        })

        return item
    }
}

export default StorageHelper