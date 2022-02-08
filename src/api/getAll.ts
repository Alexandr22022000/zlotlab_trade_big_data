import Joi from "@hapi/joi";
import { Response, Request } from "express";
import fs from "fs";
import path from "path";

const schema = Joi.object({
    hash: Joi.string().regex(/^.+?-.+?$/),
});

const method = async (req: Request, res: Response) => {
    try {
        req.params = await schema.validateAsync(req.params);
    } catch (e) {
        return res.status(400).send("Bad request");
    }

    const folderPath = path.join(__dirname, "../../uploads", req.params.hash);

    if (!fs.existsSync(folderPath)) return res.status(404).send("Hypothesis not found");

    const files = fs.readdirSync(folderPath);
    res.status(200).send(files);
};

export default method;
