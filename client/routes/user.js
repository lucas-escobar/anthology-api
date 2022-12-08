import Router from 'express-promise-router';
import { query } from '../db/index.js';

export { userRouter };

const userRouter = new Router();

userRouter.get('/user/:id', async (req, res) => {
    const user_communities_query = {
        text:' \
            SELECT community_name \
            FROM app_user \
            JOIN appUser_communities \
                ON $1 = fk_appUserCommunities_appUser \
            JOIN community \
                ON fk_appUserCommunities_community = community_id',
        values: [req.params.id]
    }
    const { rows } = await query(user_communities_query);
    res.send(rows);
});


