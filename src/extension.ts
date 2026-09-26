import { execFile } from "node:child_process";
import * as vscode from "vscode";
import { beeVersionArgv } from "./bee-cli";

export function activate(context: vscode.ExtensionContext): void {
	const [cmd, ...args] = beeVersionArgv();
	context.subscriptions.push(
		vscode.commands.registerCommand("bee.showVersion", () => {
			execFile(cmd, args, (err, stdout) => {
				if (err) {
					void vscode.window.showErrorMessage("bee is not on PATH");
					return;
				}
				void vscode.window.showInformationMessage(stdout.trim());
			});
		}),
	);
}

export function deactivate(): void {}
