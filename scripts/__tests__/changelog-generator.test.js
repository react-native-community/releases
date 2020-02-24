// @ts-check

const https = require("https");
const { EventEmitter } = require("events");
const fs = require("fs");
const path = require("path");

const {
  generateChangelog,
  getChangeMessage,
  getOriginalCommit
} = require("../changelog-generator");

const RN_REPO = process.env.RN_REPO;
if (!process.env.RN_REPO) {
  throw new Error(
    "[!] Specify the path to a checkout of the react-native repo with the `RN_REPO` env variable."
  );
}

describe(getOriginalCommit, () => {
  it("returns a cherry-picked community commit with the `sha` updated to point to the original in the `master` branch", () => {
    return getOriginalCommit(RN_REPO, {
      sha: "474861f4e7aa0c5314081444edaee48d2faea1b6",
      commit: {
        message: "A community picked commit\n\nDifferential Revision: D17285473"
      },
      author: { login: "janicduplessis" }
    }).then(commit => {
      expect(commit).toEqual({
        sha: "2c1913f0b3d12147654501f7ee43af1d313655d8",
        commit: {
          message:
            "A community picked commit\n\nDifferential Revision: D17285473"
        },
        author: { login: "janicduplessis" }
      });
    });
  });
});

describe(getChangeMessage, () => {
  it("works", () => {
    expect(
      getChangeMessage({
        sha: "abcd1234",
        commit: {
          message:
            "Some ignored commit message\n\n[iOS] [Fixed] - Some great fixes! (#42)"
        },
        author: { login: "alloy" }
      })
    ).toEqual(
      "- Some great fixes! ([abcd123](https://github.com/facebook/react-native/commit/abcd123) by [@alloy](https://github.com/alloy))"
    );
  });
});

describe(generateChangelog, () => {
  it("works", () => {
    const requestEmitter = new EventEmitter();
    const responseEmitter = new EventEmitter();
    const responseData = fs.readFileSync(
      path.join(__dirname, "__fixtures__/v0.60.4...v0.60.5.json"),
      "utf-8"
    );

    const getMock = jest.fn(uri => {
      if (
        uri.path !== "/repos/facebook/react-native/compare/v0.60.4...v0.60.5"
      ) {
        throw new Error("Unexpected path!");
      }
      return requestEmitter;
    });
    Object.defineProperty(https, "get", { value: getMock });

    const result = generateChangelog({
      gitDir: RN_REPO,
      base: "v0.60.4",
      compare: "v0.60.5"
    });

    requestEmitter.emit("response", responseEmitter);
    responseEmitter.emit("data", responseData);
    responseEmitter.emit("end");

    return result.then(changelog => {
      expect(changelog).toMatchSnapshot();
    });
  });
});
