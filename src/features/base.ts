/*
 * @Author       : Jay jay.zhangjunjie@outlook.com
 * @Date         : 2023-09-03 14:23:36
 * @LastEditTime : 2023-09-03 15:12:40
 * @LastEditors  : Jay jay.zhangjunjie@outlook.com
 * @Description  : 
 */


import fs = require('fs');
import path = require('path');


export interface ParamsDescption{
    label:string
}


export interface CMDDescption{
    label:string;
    detail:string;
    documentation:string;
    deprecated?:string;
    params:ParamsDescption[];
}


// 读取 JSON 文件内容
function readJSON5File(filePath: string): any {
	try {
		const data = fs.readFileSync(filePath, 'utf8');
		// 删除注释（行注释和块注释）
		const jsonWithoutComments = data.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
		return JSON.parse(jsonWithoutComments);;
	} catch (error) {
		throw new Error(`无法读取 JSON 文件: ${filePath}`);
	}
}



 export const cmdJson:CMDDescption[] = readJSON5File(path.join(__dirname, "../../resources/cmd.json"));