

import { TextDocument, Position, CompletionItem, CompletionItemKind } from "vscode";

import { cmdJson, CMDDescption } from "./base";



const completionItems: CompletionItem[] = Object.values(cmdJson).map((item: CMDDescption): CompletionItem => {

    return {
        label: item.label,
        kind: CompletionItemKind.Function,
        detail: item.detail,
        documentation: item.documentation,
    };
});



export const onCompletionProviderForMethod = {
    provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
        return completionItems;
    }
};


export const onCompletionProviderForParams = {
    provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        console.log(linePrefix);
        if (linePrefix.startsWith("STOPLUA INDEX=")) {
            return [
                new CompletionItem("1", CompletionItemKind.Value),
                new CompletionItem("2", CompletionItemKind.Value),
                new CompletionItem("3", CompletionItemKind.Value),
                new CompletionItem("4", CompletionItemKind.Value),
                new CompletionItem("5", CompletionItemKind.Value),
                new CompletionItem("6", CompletionItemKind.Value),
                new CompletionItem("7", CompletionItemKind.Value),
                new CompletionItem("8", CompletionItemKind.Value),
            ];
        }
        if (linePrefix.startsWith("STOPLUA")) {
            return [
                new CompletionItem("INDEX", CompletionItemKind.Enum),
            ];
        };

        return completionItems;
    }
};