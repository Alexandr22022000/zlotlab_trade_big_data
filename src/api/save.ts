import fs from "fs";
import path from "path";
import { Response, Request } from "express";
import { UploadedFile } from "express-fileupload";

const method = async (req: Request, res: Response) => {
    // @ts-ignore
    let file: UploadedFile = req.files.report;

    if (!file) return res.status(400).send("Bad request");

    if (!/^.+?-.+?-([0-9]+?|(done))\.json$/.test(file.name)) return res.status(400).send("Incorrect filename");

    const launchKey = file.name.substring(0, file.name.lastIndexOf("-")),
        folderPath = path.join(__dirname, "../../uploads", launchKey);

    if (fs.existsSync(path.join(folderPath, launchKey + "-done.json")))
        return res.status(400).send("Launch already finished");

    await file.mv(path.join(folderPath, file.name));
    res.status(200).send({});
};

export default method;
