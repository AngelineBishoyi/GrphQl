const { Sequelize}=require("sequelize");

const sequelize= new Sequelize("testjs","root","root",{
    host:"localhost",
    dialect:"mysql"
})

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to mysql successfully");
        
        
    } catch (error) {
        console.log("Connection to mysql failed",error);
        
        
    }
};
connectDB();

module.exports=sequelize