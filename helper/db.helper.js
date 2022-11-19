module.exports = {
    findOne: async (Model, filter, options = {}, next) => {
        if (Object.keys(options)) {
            if (options?.populate) {
                return await Model.findOne(filter, {}, { sort: { 'createdAt': -1 } }).populate(options?.populate);
            }
        }
        return await Model.findOne(filter, {}, { sort: { 'createdAt': -1 } });
    },
    findAll: async (Model, filter = {}, options = {}, next) => {
        if (Object.keys(options)) {
            if (options?.populate) {
                console.log('populate')
                return await Model.find(filter).populate(options?.populate);
            }
        }
        return await Model.find(filter);
    },
    create: async (Model, body, next) => {
        return await Model.create(body);
    },
    delete: async (Model, filter, next) => {
        return await Model.remove({ filter });
    },
    update: async (Model, body, filter, next) => {
        return await Model.update(filter, {$set: body});
    }
}