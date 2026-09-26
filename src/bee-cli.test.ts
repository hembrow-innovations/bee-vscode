import { describe, expect, it } from "vitest";
import { beeVersionArgv } from "./bee-cli";

describe("beeVersionArgv", () => {
	it("shells bee --version and nothing else", () => {
		expect(beeVersionArgv()).toEqual(["bee", "--version"]);
	});
});
