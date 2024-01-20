const baseURL = 'https://productive-app-060b4c85d875.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json())
    })
]