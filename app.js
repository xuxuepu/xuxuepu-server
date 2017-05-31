import express from 'express';
import Home from './src/view/Home';
import User from './src/view/User';
const app = express();
Home(app);
User(app);
app.listen(3000);