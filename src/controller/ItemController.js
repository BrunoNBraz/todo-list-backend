const Item = require('../models/Item')

module.exports = {
    async index (request, response){
        return response.json(await Item.find({}))
    },
    async StorageEvent(request, response){
        const { description } = response.body
        return response.json(await Item.create({description, checked: false}))
    }
}