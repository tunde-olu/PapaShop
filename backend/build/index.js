import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import 'colors';
import productRoutes from './routes/productRoutes.js';
import notFound from './middleware/notFound.js';
import errorHandlerMiddleware from './middleware/errorHandler.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URI;
app.use(cors());
app.use(express.json());
/** Routes */
app.use('/api/products', productRoutes);
/** Not Found and Error */
app.use(notFound);
app.use(errorHandlerMiddleware);
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
