// @ts-check

const https = require("https");
const { EventEmitter } = require("events");
const fs = require("fs");
const path = require("path");

const { generateChangelog, getChangeMessage } = require("../changelog-generator");

describe(getChangeMessage, () => {
    it("works", () => {
        expect(getChangeMessage({
            sha: "abcd1234",
            commit: { message: "Some ignored commit message\n\n[iOS] [Fixed] - Some great fixes! (#42)" },
            author: { login: "alloy" }
        })).toEqual("- Some great fixes! ([abcd123](https://github.com/facebook/react-native/commit/abcd123) by [@alloy](https://github.com/alloy))");
    });
});

describe(generateChangelog, () => {
    it("works", () => {
        const requestEmitter = new EventEmitter();
        const responseEmitter = new EventEmitter();
        const responseData = fs.readFileSync(path.join(__dirname, "__fixtures__/v0.60.4...v0.60.5.json"), "utf-8");

        const getMock = jest.fn(uri => {
            if (uri.path !== "/repos/facebook/react-native/compare/v0.60.4...v0.60.5") {
                throw new Error("Unexpected path!");
            }
            return requestEmitter;
        });
        Object.defineProperty(https, "get", { value: getMock });

        const result = generateChangelog("v0.60.4", "v0.60.5").then(changelog => {
            expect(changelog).toMatchSnapshot();
        });

        requestEmitter.emit("response", responseEmitter);
        responseEmitter.emit("data", responseData);
        responseEmitter.emit("end");

        return result;
    });
});