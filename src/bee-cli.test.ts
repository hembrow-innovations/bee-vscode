import { describe, expect, it } from "vitest";
import { beeVersionArgv, showVersionFailureMessage } from "./bee-cli";

describe("beeVersionArgv", () => {
	it("shells bee --version and nothing else", () => {
		expect(beeVersionArgv()).toEqual(["bee", "--version"]);
	});
});

describe("showVersionFailureMessage", () => {
	it("names a missing binary as not on PATH", () => {
		expect(
			showVersionFailureMessage({
				code: "ENOENT",
				message: "spawn bee ENOENT",
			}),
		).toBe("bee is not on PATH");
	});

	it("passes a nonzero exit message through instead of the PATH sentence", () => {
		expect(
			showVersionFailureMessage({
				code: 1,
				message: "Command failed: bee --version",
			}),
		).toBe("Command failed: bee --version");
	});

	it("shows bee stdout and stderr when --version exits nonzero", () => {
		expect(
			showVersionFailureMessage({
				code: 1,
				message: "Command failed: bee --version",
				stdout: "bee 0.1.0\n",
				stderr: "failed to read hive\n",
			}),
		).toBe("bee 0.1.0\nfailed to read hive");
	});
});
