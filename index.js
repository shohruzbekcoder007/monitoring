const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const logger = require('./config/logger.config');
const loggerRouter = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(loggerRouter("dev"));
app.use(express.static('./static'));
app.set("view engine", "pug");

require('./config/mongoose.config')(config, logger);

const admin = require('./src/admin/admin_router');
app.use('/admin', admin);

const staff = require('./src/staff/staff_router');
app.use('/staff', staff);

const main = require('./src/main/main_router');
app.use('/', main);

const positions = require('./src/positions/positions_router');
app.use('/positions', positions);

const visit = require('./src/visits/visits_router');
app.use('/visit', visit);

app.listen(config.port, () => {
    logger.info(`[*] 🚀 Listening on port : ${config.port} ..`);
});