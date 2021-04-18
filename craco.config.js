const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@features": path.resolve(__dirname, "src/features/"),
      "@images": path.resolve(__dirname, "src/assets/img/"),
      "@mock": path.resolve(__dirname, "src/mock"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@lib": path.resolve(__dirname, "src/lib"),
    },
  },
};
