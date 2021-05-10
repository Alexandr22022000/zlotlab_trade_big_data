import express from "express";
import fileUpload from "express-fileupload";
import router from "./router";
import CONFIG from "./config";

const app = express();

app.use(
    fileUpload({
        createParentPath: true,
    })
);

app.set("PORT", CONFIG.PORT);
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

router(app);

app.listen(app.get("PORT"), () => console.log("Server was started on port http://localhost:" + app.get("PORT")));
