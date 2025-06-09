import { z } from "zod";

import tryParseEnv from "./utils/try-parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

export default tryParseEnv(EnvSchema);
