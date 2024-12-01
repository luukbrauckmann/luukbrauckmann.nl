import type { ExecuteQueryOptions } from "@datocms/cda-client";
import type { DocumentNode } from 'graphql';

import { executeQuery as libExecuteQuery } from "@datocms/cda-client";
import { DATOCMS_TOKEN } from "astro:env/server";

export async function executeQuery<Result, Variables = unknown>(query: DocumentNode, variables?: ExecuteQueryOptions<Variables>) {
  return await libExecuteQuery<Result, Variables>(query, {
    ...variables,
    token: DATOCMS_TOKEN,
  });
}
