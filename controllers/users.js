const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
    //swagger.tags = ['Users'];
const result = await mongodb.getDatabase().db().collection('Contacts').find();
    result.toArray().then(Contacts => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(Contacts);
    });
};

const getSingle = async (req, res, next) => {
    //swagger.tags = ['Users'];
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('Contacts').find({ _id: userId });
    result.toArray().then(Contacts => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(Contacts[0]);
    });
};

const createUser = async (req, res, next) => {
    //swagger.tags = ['Users'];
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const response = await mongodb.getDatabase().db().collection('Contacts').insertOne(user);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
};

const updateUser = async (req, res, next) => {
    //swagger.tags = ['Users'];
    const userId = new ObjectId(req.params.id);
    const user = {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        ipaddress: req.body.ipaddress,
    };
    const response = await mongodb.getDatabase().db().collection('Contacts').replaceOne({ _id: userId }, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
};
const deleteUser = async (req, res, next) => {
    //swagger.tags = ['Users'];
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('Contacts').deleteOne({ _id: userId });
    if (response.deletedCount > 0) {
        res.status(201).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
};


module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};