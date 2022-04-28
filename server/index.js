
import 'dotenv/config'
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// Database Connection
import ConnectDB from "./database/connection.js";

// google authentication config
import googleAuthConfig from "./config/google.config.js";

// private route authentication config
import privateRouteConfig from "./config/route.config.js";

// API
import Auth from "./API/Auth/index.js";
import Restaurant from "./API/Restaurant/index.js";
import Food from "./API/Food/index.js";
import Menu from "./API/Menu/index.js";
import Image from "./API/Image/index.js";
import Order from "./API/Orders/index.js";
import Review from "./API/Reviews/index.js";
import User from "./API/User/index.js";

// passport config
googleAuthConfig(passport);
privateRouteConfig(passport);

const delishGrab = express();
delishGrab.use(cors());
delishGrab.use(express.json());
delishGrab.use(helmet());
delishGrab.use(passport.initialize());

// Application Routes
delishGrab.use("/auth", Auth);
delishGrab.use("/restaurant", Restaurant);
delishGrab.use("/food", Food);
delishGrab.use("/menu", Menu);
delishGrab.use("/image", Image);
delishGrab.use("/order", Order);
delishGrab.use("/review", Review);
delishGrab.use("/user", User);

delishGrab.listen(4000, () => {
  ConnectDB()
    .then(() => {
      console.log("Server is running !!!");
    })
    .catch((error) => {
      console.log("Server is running, but database connection failed...");
      console.log(error);
    });
});
