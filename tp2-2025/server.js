import "dotenv/config";
import app from "./tp2-2025/src/app.js";
import { connectToDatabase } from "./tp2-2025/src/data/connection.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectToDatabase();
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ No se pudo iniciar el servidor: ", error.message);
        process.exit(1);
    }
};

startServer();
