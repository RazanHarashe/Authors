const Author = require('../models/author.model');

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find().sort({ name: 1 });
        res.json(authors);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.createAuthor = async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.json(author);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) {
        return res.status(404).json({ message: "We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?" });
        }
        res.json(author);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.updateAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });
        if (!author) {
        return res.status(404).json({ message: "We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?" });
        }
        res.json(author);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        res.json(author);
    } catch (err) {
        res.status(400).json(err);
    }
};


