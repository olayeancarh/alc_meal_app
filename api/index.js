import express from 'express';
import bodyParser from 'body-parser';

// routes
import mealRoutes from './routes/meal.route'

const app = express();

const PORT = 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// handler
app.use('/api/v1/meals', mealRoutes)

app.get('/', (req, res) => res.send('The API is working, yeah'));

app.listen(PORT, () => {
  console.log('Server is running');
});
