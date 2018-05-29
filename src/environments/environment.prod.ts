// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: true,
    api_base: {
        //apiBase: "http://localhost:3000",
        apiBase: "http://ec2-13-232-52-233.ap-south-1.compute.amazonaws.com:3000",
        apiPath: "api",
        resetPasswordCallback: "",
        signInPath: 'auth/login',
        signInRedirect: '/login',
        //loginInPath:'auth/login',
        resetPasswordPath: 'auth/reset',
        //validateTokenPath:'auth/validateTokenPath'
    },
    content_api_base: {
        apiBase: "https://adn-bucket.s3.ap-south-1.amazonaws.com/",
        imgBase: "https://adn-bucket.s3.ap-south-1.amazonaws.com/",
        noImagePath: "image/0e02f48c.noimageavailable.jpg"
    },
    access_deniedPath: ["access-denied"]
};
