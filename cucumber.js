module.exports = {
    default: {
        require: [
            "features/step-definitions/*.ts",
            "support/hooks.ts",
            "support/world.ts"
        ],
        format: ["html:reports/report.html", "summary"],
        publishQuiet: true,
        parallel: 1,
        failFast: false,
        requireModule: ["ts-node/register"],
    },
};
