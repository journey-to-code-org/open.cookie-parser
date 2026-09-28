import test from "node:test";import assert from "node:assert/strict";import{parseCookieHeader,serializeCookie}from"../src/index.js";
test("parse",()=>assert.deepEqual(parseCookieHeader("a=1; theme=dark"),{a:"1",theme:"dark"}));
test("decode",()=>assert.equal(parseCookieHeader("name=hello%20world").name,"hello world"));
test("serialize",()=>assert.equal(serializeCookie("theme","dark mode"),"theme=dark%20mode"));
