import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
// import * as schema from "../db/auth-schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    // schema: schema,
  }),
  trustedOrigins: [process.env.CORS_ORIGIN!],
  emailAndPassword: {
    enabled: true,
  },
});
