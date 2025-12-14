import { createEnv } from "@t3-oss/env-nextjs";
import * as v from "valibot";

const env = createEnv({
  server: {
    NODE_ENV: v.optional(v.picklist(["development", "production", "test"]), "development"),
    RAINWALK_API_KEY: v.string(),
    RAINWALK_API_URL: v.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    RAINWALK_API_KEY: process.env.RAINWALK_API_KEY,
    RAINWALK_API_URL: process.env.RAINWALK_API_URL,
  },
  emptyStringAsUndefined: true,
});

export default env;
