export function parseCookieHeader(value,options={}) {
  if(typeof value!=="string")throw new TypeError("Expected string");
  const decode=options.decode??decodeURIComponent,out={};
  for(const part of value.split(";")){
    const i=part.indexOf("=");if(i<0)continue;
    const name=part.slice(0,i).trim(),raw=part.slice(i+1).trim();
    if(!name||Object.hasOwn(out,name))continue;
    try{out[name]=decode(raw);}catch{out[name]=raw;}
  }
  return out;
}
export function serializeCookie(name,value) {
  if(typeof name!=="string"||!/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/u.test(name))throw new TypeError("Invalid cookie name");
  if(typeof value!=="string")throw new TypeError("Expected string value");
  return `${name}=${encodeURIComponent(value)}`;
}
