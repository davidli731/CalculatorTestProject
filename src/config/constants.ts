import * as de from "dotenv";
de.config();
// ^ sets it up so the env can actually be read

// Server config constants
export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || "localhost";
export const PROTOCOL = process.env.PROTOCOL || "http";