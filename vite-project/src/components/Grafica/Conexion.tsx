import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

// Configurar la conexión a la base de datos (ejemplo)
import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'DB_CLARITY_MIND'
});

db.connect((err: mysql.MysqlError | null) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

// Endpoint para obtener los datos de la tabla formularios
app.get('/data', (req: Request, res: Response) => {
    const query = 'SELECT day, series1, series2, series3 FROM formularios';
    db.query(query, (err: mysql.MysqlError | null, results: any[]) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
