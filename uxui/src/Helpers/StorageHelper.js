class StorageHelper
{
    static list(key)
    {
        var toReturn = JSON.parse(localStorage.getItem(key))
        return toReturn
    }    
}

export default StorageHelper