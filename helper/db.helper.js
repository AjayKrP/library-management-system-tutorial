module.exports = {
    findOne: async (Model, filter, options = {}, next) => {
        return await Model.findOne(filter, options);
    },
    findAll: async (Model, filter = {}, options = {}, next) => {
        return Model.find(filter, options);
    },
    create: async (Model, body, next) => {
        return Model.create(body);
    },
    delete: async (Model, filter, next) => {
        return Model.remove({ filter });
    },
    update: async (Model, body, filter, next) => {
        return Model.findOneAndUpdate(filter, body);
    }
}