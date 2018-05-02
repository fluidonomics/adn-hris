export const environment = {
    production: true,
    api_base: {
        //apiBase: "http://localhost:3000",
        apiBase: "http://goforship.com:3000",
        apiPath: "api",
        resetPasswordCallback: "",
        signInPath: 'auth/login',
        signInRedirect: '/login',
        //loginInPath:'auth/login',
        resetPasswordPath: 'auth/reset',
        //validateTokenPath:'auth/validateTokenPath'
    },
    content_api_base: {
        apiBase: "http://localhost:3000",
        imgBase: "http://localhost:3000"
    },
    access_deniedPath: ["access-denied"]
};
