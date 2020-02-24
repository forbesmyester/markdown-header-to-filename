"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var assert_1 = __importDefault(require("assert"));
function markdownHeaderToFilename(header) {
    if (header.length > 255) {
        header = header.substr(0, 255);
    }
    return header
        .replace(/[^a-zA-Z0-9\-_ ]/g, ' ')
        .replace(/  +/g, ' ')
        .trim();
}
exports["default"] = markdownHeaderToFilename;
assert_1["default"].equal(markdownHeaderToFilename(' Hello! world! '), 'Hello world');
