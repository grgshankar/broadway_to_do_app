const mongoose = require("mongoose");
const Model = require("./todo.model");
const create = (payload) => {
  Model.create(payload);
};
const getById = (id) => {};
const list = () => {};
const updateById = (id, payload) => {};
const remove = (id) => {};

module.exports = { create, getById, list, updateById, remove };
