module.exports = {
    configure: (webpackConfig, { env, paths }) => {

        console.log(paths);
        console.log(env);

        return webpackConfig;
    },
    plugins: [
        {
            plugin: require("craco-plugin-scoped-css"),
        },
    ],
};
