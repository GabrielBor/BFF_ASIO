"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose = require("mongoose");
exports.CategorySchema = new mongoose.Schema({
    description: String,
    completed: Boolean
});
//# sourceMappingURL=category.schema.js.map