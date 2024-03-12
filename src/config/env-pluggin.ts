import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    port  : env.get('PORT').required().asInt(),
}
