import mongoose from 'mongoose';
const connectDb = async (uri) => {
    return mongoose.connect(uri, { dbName: 'PapaShop' });
};
export default connectDb;
