import { Application } from "express";

import save from "./api/save";
import get from "./api/get";
import getAll from "./api/getAll";

const router = (app: Application) => {
    app.post("/api/save", save);
    app.get("/api/:hash/:filename", get);
    app.get("/api/:hash", getAll);
};

export default router;
