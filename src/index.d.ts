export function parseCookieHeader(value:string,options?:{decode?:(value:string)=>string}):Record<string,string>;
export function serializeCookie(name:string,value:string):string;

