
const c = {

    index: (req, res) => {
        res.render('index')
    }, 
    up: (req, res) => {
        res.render('up')
    },
    header: (req, res) => {
        res.render('header')
    },
    end: (req, res) => {
        res.render('end')
    },
    featured: (req, res) => {
        res.render('featured')
    },
    bestselling: (req, res) => {
        res.render('bestselling')
    },
    popular: (req, res) => {
        res.render('popularbooks')
    },
    books: (req, res) => {
        res.render('books')
    },
    articles: (req, res) => {
        res.render('articles')
    },
    download: (req, res) => {
        res.render('download')
    }
};
module.exports = c;