import { config as conf } from "dotenv";

conf();

const _config = {
      //_ to make the config private
      port: process.env.PORT,
      databaseUrl: process.env.DATABASE_URL || "",
      env: process.env.NODE_ENV, //node env is used to identify which environment it is dev or production
      jwtSecret: process.env.JWT_SECRET!, //add in .env also
};
export const config = Object.freeze(_config); //freeze is used to make the config read only//

//EXTRA//

//src/config/config.ts

// import dotenv from "dotenv";

// dotenv.config();

// interface Config {
//       port: string | number;
//       databaseUrl: string;
// }

// export const config: Config = {
//       port: process.env.PORT || 3000,
//       databaseUrl: process.env.DATABASE_URL || "",
// };
