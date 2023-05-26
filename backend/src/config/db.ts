import mongoose from 'mongoose';

const connectDb = async (uri: string) => {
	return mongoose.connect(uri, { dbName: 'PapaShop' });
};

export default connectDb;
