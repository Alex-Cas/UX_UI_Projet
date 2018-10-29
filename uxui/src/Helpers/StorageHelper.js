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

    static update(key, obj)
    {
        var items = this.list(key)
        var item = null
        var idx = 0

        items.some((i, index) => {
            if (i.id === obj.id) {
                item = i
                idx = index
                return true
            }
            return false
        })

        Object.keys(obj).forEach( (key, idx) => {

            if (obj[key] !== '' && obj[key] !== 0) {
                item[key] = obj[key]
            }
        })

        items[idx] = item
        this.apply(key, items)

        return item
    }

    static delete(key, id)
    {
        var items = this.list(key)
        var newItems = []

        items.map(i => {
            if (i.id !== id) {
                newItems.push(i)
            }
            return true
        })

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