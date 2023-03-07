
const Category = require("../model/category");
//-----create cataogory------------------
const createcategory= async function (req, res) {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }
};
//-------------------get category------------------

const getcategory= async function(req, res) {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.createcategory = createcategory;
module.exports.getcategory = getcategory;

