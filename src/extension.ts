
import * as vscode from 'vscode';
import { onCompletionProviderForMethod, onCompletionProviderForParams } from './features/completion';
import { onSignatureHelp } from './features/signatureHelp';


const LANGUAGE_ID :string = "jbi";


export function activate(context: vscode.ExtensionContext) {


	console.log('Congratulations, your extension "elitejbi" is now active!');


	let disposable = vscode.commands.registerCommand('elitejbi.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from EliteJBI!');
	});

	const completionProviderForMethod = vscode.languages.registerCompletionItemProvider(LANGUAGE_ID, onCompletionProviderForMethod);
	const completionProviderForParams = vscode.languages.registerCompletionItemProvider(LANGUAGE_ID, onCompletionProviderForParams, ...["="]);
	const signatureHelpProvider = vscode.languages.registerSignatureHelpProvider(LANGUAGE_ID, onSignatureHelp, ...[" "]);

	// vscode.languages.registerHoverProvider(selector, provider)


	context.subscriptions.push(disposable, completionProviderForMethod, completionProviderForParams, signatureHelpProvider);
}

// This method is called when your extension is deactivated
export function deactivate() {}
