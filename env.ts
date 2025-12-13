import { createEnv } from "@t3-oss/env-nextjs";
import * as v from "valibot";

const env = createEnv({
  server: {
    NODE_ENV: v.optional(v.picklist(["development", "production", "test"]), "development"),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
  emptyStringAsUndefined: true,
});

export default env;
