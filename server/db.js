const { default: mongoose } = require("mongoose");
const mongooses = require("mongoose");

mongoose.set('strictQuery', true);

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
        console.log("Not Connected to Database");
    }
};
