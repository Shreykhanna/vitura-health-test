import express from "express";
import productsRoutes from "./routes/productsRoutes";
import errorHandler from "./middleware/errorHandler";
import logger from "./middleware/logger";

const app = express();
app.use(express.json());
app.use(logger);
app.use("/api/products", productsRoutes);
app.use(errorHandler);

export default app;
