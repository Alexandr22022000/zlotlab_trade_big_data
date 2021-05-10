const fs = require("fs"),
    path = require("path");

const CONFIG: { [key: string]: string } = {
    PORT: "5002",
};

try {
    fs.readFileSync(path.join(__dirname, "../.env"), "utf8")
        .split("\n")
        .map((line: string) => {
            const result = line.match(/^(.+?)=(.+)/);
            if (!result) return result;
            return { key: result[1], value: result[2] };
        })
        .filter((i: { key: string; value: string }) => i && !/^\/\//.test(i.key))
        .forEach((param: { key: string; value: string }) => (CONFIG[param.key] = param.value));
} catch (e) {}

try {
    for (let key in CONFIG) {
        if (process.env[key]) CONFIG[key] = <string>process.env[key];
    }
} catch (e) {}

export default CONFIG;
