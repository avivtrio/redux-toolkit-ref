const { codegen } = require('swagger-axios-codegen')

const jsonFile = require("./swagger.json");


const options = {
    serviceNameSuffix: 'ApiService',
    enumNamePrefix: 'Enum',
    methodNameMode: 'operationId',
    outputDir: './api',
    useStaticMethod: true,
    useCustomerRequestInstance: false,
    include: [],
    strictNullChecks: true,
    modelMode: 'interface',
    useClassTransformer: false,
    useHeaderParameters: true,
    multipleFileMode: true,
    source: jsonFile,
};



codegen(options);
