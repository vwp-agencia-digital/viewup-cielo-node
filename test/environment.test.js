const should = require("should");
const Cielo = require("./../lib");
const Environment = Cielo.Ecommerce.Environment;


const prod = {
    api: 'https://api.cieloecommerce.cielo.com.br/',
    apiQuery: 'https://apiquery.cieloecommerce.cielo.com.br/'
};
const sandbox = {
    api: "https://apisandbox.cieloecommerce.cielo.com.br/",
    apiQuery: 'https://apiquerysandbox.cieloecommerce.cielo.com.br/'
};

describe("Cielo Enviroment checker", () => {
    it("sandbox", () => {
        should(Environment.sandbox()).match(sandbox);
        should(Environment.sandbox().getApiUrl()).eql(sandbox.api);
        should(Environment.sandbox().getApiQueryURL()).eql(sandbox.apiQuery)
    });
    it("production", () => {
        should(Environment.production()).match(prod);
        should(Environment.production().getApiUrl()).eql(prod.api);
        should(Environment.production().getApiQueryURL()).eql(prod.apiQuery)
    })
});