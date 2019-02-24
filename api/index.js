import express from 'express';
import bodyParser from 'body-parser';

// routes
import mealRoutes from './routes/meal.route';
import menuRoutes from './routes/menu.route';
import orderRoutes from './routes/order.route';

const app = express();

const PORT = 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// meals handler
app.use('/api/v1/meals', mealRoutes);

// menus handler
app.use('/api/v1/menus', menuRoutes);

// orders handler
app.use('/api/v1/orders', orderRoutes);

app.get('/', (req, res) => res.send('The API is working, yeah'));

app.listen(PORT, () => {
  console.log('Server is running');
});
