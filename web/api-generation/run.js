require("dotenv").config();
const { generateApi } = require("swagger-typescript-api");
const path = require("path");
const fs = require("fs");
const url = process.env.OPENAPI_URL;

generateApi({
  output: path.resolve(process.cwd(), "./src/api"),
  url: url,
  modular: true,
  httpClientType: "fetch",
  generateClient: true,
  generateRouteTypes: true,
  generateResponses: true,
  cleanOutput: true,
  extractRequestParams: true,
  extractRequestBody: true,
  unwrapResponseData: true,
  prettier: {
    printWidth: 120,
    tabWidth: 2,
    trailingComma: "all",
    parser: "typescript",
  },
  defaultResponseType: "void",
  singleHttpClient: true,
  addReadonly: true,
})
  .then(({ files, configuration }) => {
    const { output } = configuration.config;

    files.forEach(({ fileContent, fileName }) => {
      fs.writeFileSync(`${output}/${fileName}.ts`, fileContent);
    });

    console.log("⭐   Types are fully generated!");
  })
  .catch((e) => console.error(e));
