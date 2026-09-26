export function beeVersionArgv(): readonly [string, ...string[]] {
	return ["bee", "--version"];
}

export function showVersionFailureMessage(err: {
	code?: string | number | null;
	message: string;
}): string {
	if (err.code === "ENOENT") {
		return "bee is not on PATH";
	}
	return err.message;
}
