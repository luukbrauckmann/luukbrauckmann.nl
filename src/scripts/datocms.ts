import { executeQuery as libExecuteQuery, type TypedDocumentNode } from "@datocms/cda-client";
import { DATOCMS_TOKEN } from "astro:env/server";

export async function executeQuery<Result, Variables = unknown>(query: TypedDocumentNode<Result, Variables>, variables: Variables) {
  return await libExecuteQuery<Result, Variables>(query, {
    variables,
    token: DATOCMS_TOKEN,
  });
}
