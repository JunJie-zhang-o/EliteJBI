/*
 * @Author       : Jay jay.zhangjunjie@outlook.com
 * @Date         : 2023-09-03 14:17:59
 * @LastEditTime : 2023-09-03 20:54:20
 * @LastEditors  : Jay jay.zhangjunjie@outlook.com
 * @Description  : 
 */

import { type } from "os";
import { CompletionItem, CompletionItemKind } from "vscode";



// declare namespace Index {
//     const index1: 1;
//     const index2: 2;
//     const index3: 3;
//     const index4: 4;
//     const index5: 5;
//     const index6: 6;
//     const index7: 7;
//     const index8: 8;
// }


abstract class Var {


    abstract getCompletionItem(): void | CompletionItem[];
    abstract isEffectiveValue(value: any): boolean;
    abstract getSignatureHelp(): void | String;
}


class ScriptIndex extends Var {

    private value: number;
    constructor(value: number) {
        super();
        this.value = value;
    }

    getCompletionItem(): void | CompletionItem[] {
        let items: CompletionItem[] = [];
        for (let index = 0; index < 8; index++) {
            items.push({
                label: index.toString(),
                kind: CompletionItemKind.Value,
            });
        }
        return items;
    }

    isEffectiveValue(): boolean {
        if (this.value >= 0 && this.value <= 8) {
            return true;
        }
        else {
            return false;
        }
    }

    getSignatureHelp(): void | string{

    }

}

type ToolIndex = ScriptIndex;
type UserIndex = ScriptIndex;
