const mongoose = require('mongoose')
module.exports = async () => {
    const connection = mongoose.connect('mongodb+srv://anujcodknox:8059868829An@cluster01.5yx0bgk.mongodb.net/instaclone-x')
        .then(() => console.log("mongo db is connected"))
        .catch((err) => { console.log(err) });
}