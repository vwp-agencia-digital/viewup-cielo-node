// @ts-ignore
module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        ts: {
            app: {
                files: [
                    {
                        src: ["src/\*\*/\*.ts"],
                        dest: "./lib"
                    }
                ],
                options:{
                    "compilerOptions": {
                        "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'. */
                        "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
                        "allowJs": true,                       /* Allow javascript files to be compiled. */
                        "checkJs": true,                       /* Report errors in .js files. */
                        "outDir": "./lib/",                        /* Redirect output structure to the directory. */
                        "rootDir": "./src/",
                        "strict": true,                            /* Enable all strict type-checking options. */
                        "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
                        "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
                        "strictNullChecks": true,
                        "noImplicitAny": true,
                        "moduleResolution": "node"
                    },
                    "exclude": [
                        "node_modules",
                        ".idea",
                        "lib",
                        "test",
                        "gruntfile.js"
                    ]
                }
            }
        },
        tslint: {
            options: {
                configuration: "tslint.json"
            },
            files: {
                src: ["src/\*\*/\*.ts"]
            }
        },
        watch: {
            ts: {
                files: ["js/src/\*\*/\*.ts", "src/\*\*/\*.ts"],
                tasks: ["ts", "tslint"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");

    grunt.registerTask("default", ["ts", "tslint"]);

};