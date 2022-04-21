const express = require('express');
const cors = require('cors');
const app = express();

const authController = require('../controllers/authController');
const dashboardController = require('../controllers/dashboardController');
const adminController = require('../controllers/adminController');

const authMiddleware = require('../middlewares/authMiddleware');

app.use(cors());
app.use(express.json());

app
    .route("/")
    .get(authController.getHome);

app 
    .route("/register")
    .post(authController.postRegister)
    
app
    .route("/login")
    .post(authController.postLogin);

app
    .route("/dashboard")
    .get(authMiddleware.authMiddleware, dashboardController.getDashboardData)

app
    .route("/admin")
    .get(adminController.getAdmin);

app
    .route("/admin/update")
    .put(adminController.putUpdate)

app
    .route("/admin/newCrop")
    .post(adminController.postNewCrop)

app
    .route("/admin/shorten")
    .post(adminController.postShortenQueue)

app
    .route("/queue")
    .post(authMiddleware.authMiddleware, dashboardController.postQueue)
app
    .route("/retract")
    .post(authMiddleware.authMiddleware, dashboardController.postRetract)

module.exports = app;