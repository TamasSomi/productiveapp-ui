import { rest } from "msw";

const baseURL = 'https://productive-app-060b4c85d875.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 2,
                username: "test1",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 2,
                profile_image:
                    "https://res.cloudinary.com/stomi/image/upload/v1/media/../default_profile_wms3pt",
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    })
];