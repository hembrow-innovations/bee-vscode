export function beeVersionArgv(): readonly [string, ...string[]] {
	return ["bee", "--version"];
}

export function showVersionFailureMessage(err: {
	code?: string | number | null;
	message: string;
	stdout?: string;
	stderr?: string;
}): string {
	if (err.code === "ENOENT") {
		return "bee is not on PATH";
	}
	const printed = `${err.stdout ?? ""}${err.stderr ?? ""}`.trim();
	return printed || err.message;
}
