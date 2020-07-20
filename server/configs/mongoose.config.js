const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/productmanagerdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established connection to db"))
    .catch((err) => console.log("Error: " + err));