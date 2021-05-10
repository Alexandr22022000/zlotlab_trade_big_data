import Joi from "@hapi/joi";
import { Response, Request } from "express";
import fs from "fs";
import path from "path";

const schema = Joi.object({
    filename: Joi.string().regex(/^.+?-.+?-([0-9]+?|(done))\.json$/),
    hash: Joi.string().regex(/^.+?-.+?$/),
});

const method = async (req: Request, res: Response) => {
    try {
        req.params = await schema.validateAsync(req.params);
    } catch (e) {
        return res.status(400).send("Bad request");
    }

    const filePath = path.join(__dirname, "../../uploads", req.params.hash, req.params.filename);

    if (!fs.existsSync(filePath)) return res.status(404).send("File not found");

    res.sendFile(filePath);
};

export default method;
