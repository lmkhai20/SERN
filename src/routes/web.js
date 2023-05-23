import express from "express";
import homeController from "../controllers/homeController"

let router = express.Router();

let initWebRouts = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.aboutMe);

    return app.use("/", router);
}

module.exports = initWebRouts;