import "dotenv/config";

const { DATOCMS_TOKEN } = process.env;

/** @type {import('@graphql-codegen/cli').CodegenConfig} */
const config = {
  generates: {
    ".generated/types/datocms.ts": {
      schema: {
        "https://graphql.datocms.com": {
          headers: {
            Authorization: `Bearer ${DATOCMS_TOKEN}`,
          },
        },
      },
      documents: ["src/**/*.graphql"],
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        strictScalars: true,
        scalars: {
          BooleanType: "boolean",
          CustomData: "Record<string, unknown>",
          Date: "string",
          DateTime: "string",
          FloatType: "number",
          IntType: "number",
          ItemId: "string",
          JsonField: "unknown",
          MetaTagAttributes: "Record<string, string>",
          UploadId: "string",
        },
      },
    },
  },
};

export default config;
