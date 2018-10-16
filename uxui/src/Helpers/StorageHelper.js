class StorageHelper
{
    static list(key)
    {
        var toReturn = JSON.parse(localStorage.getItem(key))
        return toReturn
    }

    static get(key, id)
    {
        var items = this.list(key)
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

    static create(key, data)
    {
        var items = this.list(key)

        data['id'] = this.generateId(items)
        items.push(data)
        
        this.apply(key, items)
        return true
    }

    static delete(key, id)
    {
        var items = this.list(key)
        var newItems = []

        items.map(i => {
            if (i.id !== id) {
                newItems.push(i)
            }
        })
        console.log(key, id)
        console.table(items)
        console.table(newItems)

        this.apply(key, newItems)
        return true
    }

    static apply(key, data)
    {
        localStorage.setItem(key, JSON.stringify(data))
        return true
    }

    static generateId(ar)
    {
        var max = 0
        ar.forEach(i => {
            if (i.id > max) {
                max = i.id
            }
        })

        return (max + 1)
    }
}

export default StorageHelper