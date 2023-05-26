import express from 'express';
import dotenv from 'dotenv';
import { users } from './data/users.js';
import { products } from './data/products.js';
import Product from './models/ProductModel.js';
import User from './models/UserModel.js';
import Order from './models/OrderModel.js';
import 'colors';
import connectDb from './config/db.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URI;
const start = async () => {
    try {
        const mongoConnect = await connectDb(mongoURI);
        console.log(`Connected to DB: ${mongoConnect.connection.host}`.yellow.bold);
        app.listen(PORT, () => {
            console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.underline);
        });
    }
    catch (error) {
        console.log(`Error: ${error}`.red.bold);
        process.exit(1);
    }
};
start();
connectDb(process.env.MONGO_URI);
const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });
        await Product.insertMany(sampleProducts);
        console.log('Data inserted!'.green.inverse);
        process.exit();
    }
    catch (error) {
        console.log(`Error: ${error}`.red.inverse);
        process.exit(1);
    }
};
const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log(`Data destroyed!`.red.inverse);
        process.exit();
    }
    catch (error) {
        console.log(`Error: ${error}`.red.inverse);
        process.exit(1);
    }
};
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});
if (process.argv[2] === '-d') {
    destroyData();
}
else {
    importData();
}
