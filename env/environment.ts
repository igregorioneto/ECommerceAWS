import * as dotenv from "dotenv";

dotenv.config();

export const environment = {
  account: process.env.ACCOUNT || "",
  region: process.env.REGION || "",
  cost: process.env.COST || "",
  team: process.env.TEAM || ""
}