import { execFile } from "node:child_process";
import * as vscode from "vscode";
import { beeVersionArgv, showVersionFailureMessage } from "./bee-cli";

export function activate(context: vscode.ExtensionContext): void {
	const [cmd, ...args] = beeVersionArgv();
	context.subscriptions.push(
		vscode.commands.registerCommand("bee.showVersion", () => {
			execFile(cmd, args, (err, stdout) => {
				if (err) {
					void vscode.window.showErrorMessage(showVersionFailureMessage(err));
					return;
				}
				void vscode.window.showInformationMessage(stdout.trim());
			});
		}),
	);
}

export function deactivate(): void {}
