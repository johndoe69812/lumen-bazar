import { config } from "dotenv";
import {
  generateApi,
  generateTemplates,
  GenerateApiParams,
  GenerateApiOutput,
  CodeGenConstruct,
} from "swagger-typescript-api";
import path from "path";
import fs from "fs";

config();

const url = process.env.OPENAPI_URL!;

const PATH_TO_OUTPUT_DIR = path.resolve(__dirname, "./__generated__");
const PATH_TO_TEMPLATES = path.resolve(__dirname, "./api-templates");

const params: GenerateApiParams = {
  output: path.resolve(process.cwd(), PATH_TO_OUTPUT_DIR),
  codeGenConstructs: (struct: CodeGenConstruct) => {
    return { ...struct };
  },
  name: "generated-api",
  url,
  httpClientType: "fetch",
  generateClient: true,
  generateRouteTypes: true,
  generateResponses: true,
  cleanOutput: true,
  extractRequestParams: true,
  extractRequestBody: true,
  unwrapResponseData: true,
  // templates: PATH_TO_TEMPLATES,
  prettier: {
    printWidth: 120,
    tabWidth: 2,
    trailingComma: "all",
    parser: "typescript",
  },
  defaultResponseType: "void",
  singleHttpClient: true,
  addReadonly: true,
};

const opApiOutput = ({ files, configuration }: GenerateApiOutput) => {
  const { output } = configuration.config;

  console.log(
    "output",
    files.map((f) => f.fileName)
  );

  files.forEach(({ fileContent, fileName }) => {
    fs.writeFileSync(`${output}/${fileName}.ts`, fileContent);
  });

  console.log("⭐   Types are fully generated!");
};

generateApi(params)
  .then(opApiOutput)
  .catch(console.error)
  .finally(() => {
    // generateTemplates({
    //   cleanOutput: false,
    //   output: PATH_TO_TEMPLATES,
    //   httpClientType: "fetch",
    //   modular: true,
    //   silent: false,
    // });
  });
