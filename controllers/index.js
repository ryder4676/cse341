const awesomeFunction = (req, res, next) => {
    res.json("Tammi Ronald");
};
const returnAnotherPerson = (req, res, next) => {
    res.json("This is another awesome person!");
};
module.exports = { awesomeFunction, returnAnotherPerson };