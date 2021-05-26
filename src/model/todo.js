const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    content: { type: String, required: true },
    isCheck: { type: Boolean, required: true },
  },
  {
    timestamps: true, //생성, 수정 시간 자동 설정
  }
);

module.exports = mongoose.model("product", productSchema);
