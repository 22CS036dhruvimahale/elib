import {config as conf} from 'dotenv';

conf();


const _config  = {     //_ to make the config private
    port: process.env.PORT,
};
export const config = Object.freeze(_config);//frezze is used to make the config read only