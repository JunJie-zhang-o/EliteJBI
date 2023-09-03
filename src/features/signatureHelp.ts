import { CancellationToken, Position, ProviderResult, ParameterInformation, SignatureHelp, SignatureHelpContext, SignatureInformation, TextDocument } from "vscode";






export const onSignatureHelp = {

    provideSignatureHelp(document: TextDocument, position: Position, token: CancellationToken, context: SignatureHelpContext): ProviderResult<SignatureHelp> {

        // 在这里编写函数签名帮助的逻辑
        const signatureHelp = new SignatureHelp();

        // 创建一个函数签名信息
        const signature = new SignatureInformation('STOPLUA INDEX=', '停止脚本');
        signature.parameters = [
            new ParameterInformation('INDEX', '脚本索引'),
        ];

        // 添加函数签名信息到函数签名帮助
        signatureHelp.signatures = [signature];
        signatureHelp.activeSignature = 0; // 设置活动的签名

        // 设置光标位置
        //  signatureHelp.activeParameter = 0; // 设置光标在第二个参数上


        return signatureHelp;
    }
};