var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

// add listener 

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

// Nanometer Converter

    if(inputTypeValue === "nanometer" && resultTypeValue==="nanometer"){

        result.value = Number(input.value);

    }else if(inputTypeValue === "nanometer" && resultTypeValue==="micrometer"){

        result.value = Number(input.value) / 1000;

    }else if(inputTypeValue === "nanometer" && resultTypeValue==="millimeter"){

        result.value = Number(input.value) / 1000000;

    }else if(inputTypeValue === "nanometer" && resultTypeValue==="centimeter"){

        result.value = Number(input.value) / 1e+7;

    }else if(inputTypeValue === "nanometer" && resultTypeValue==="meter"){

        result.value = Number(input.value) / 1e+9;

    }else if(inputTypeValue === "nanometer" && resultTypeValue==="kilometer"){

        result.value = Number(input.value) / 1e+12;

    }else if(inputTypeValue === "nanometer" && resultTypeValue==="yard"){

        result.value = Number(input.value) / 9.144e+8;

    }else if(inputTypeValue === "nanometer" && resultTypeValue==="mile"){

        result.value = Number(input.value) / 1.609e+12;

    }

// Micrometer Converter

    if(inputTypeValue === "micrometer" && resultTypeValue==="nanometer"){

        result.value = Number(input.value) * 1000;

    }else if(inputTypeValue === "micrometer" && resultTypeValue==="micrometer"){

        result.value = Number(input.value);

    }else if(inputTypeValue === "micrometer" && resultTypeValue==="millimeter"){

        result.value = Number(input.value) / 1000;

    }else if(inputTypeValue === "micrometer" && resultTypeValue==="centimeter"){

        result.value = Number(input.value) / 10000;

    }else if(inputTypeValue === "micrometer" && resultTypeValue==="meter"){

        result.value = Number(input.value) / 1e+6;

    }else if(inputTypeValue === "micrometer" && resultTypeValue==="kilometer"){

        result.value = Number(input.value) / 1e+9;

    }else if(inputTypeValue === "micrometer" && resultTypeValue==="yard"){

        result.value = Number(input.value) / 914400;

    }else if(inputTypeValue === "micrometer" && resultTypeValue==="mile"){

        result.value = Number(input.value) / 1.609e+9;

    }

// Millimeter Converter

    if(inputTypeValue === "millimeter" && resultTypeValue==="nanometer"){

        result.value = Number(input.value) * 1e+6;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="micrometer"){

        result.value = Number(input.value) * 1000;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="millimeter"){

        result.value = Number(input.value);

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="centimeter"){

        result.value = Number(input.value) / 10;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="meter"){

        result.value = Number(input.value) / 1000;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="kilometer"){

        result.value = Number(input.value) / 1e+6;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="yard"){

        result.value = Number(input.value) / 914.4;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="mile"){

        result.value = Number(input.value) / 1.609e+6;

    }

// Centimeter Converter

    if(inputTypeValue === "centimeter" && resultTypeValue==="nanometer"){

        result.value = Number(input.value) * 1e+7;

    }else if(inputTypeValue === "centimeter" && resultTypeValue==="micrometer"){

        result.value = Number(input.value) * 10000;

    }else if(inputTypeValue === "centimeter" && resultTypeValue==="millimeter"){

        result.value = Number(input.value) * 10;

    }else if(inputTypeValue === "centimeter" && resultTypeValue==="centimeter"){

        result.value = Number(input.value);

    }else if(inputTypeValue === "centimeter" && resultTypeValue==="meter"){

        result.value = Number(input.value) / 100;

    }else if(inputTypeValue === "centimeter" && resultTypeValue==="kilometer"){

        result.value = Number(input.value) / 100000;

    }else if(inputTypeValue === "centimeter" && resultTypeValue==="yard"){

        result.value = Number(input.value) / 91.44;

    }else if(inputTypeValue === "centimeter" && resultTypeValue==="mile"){

        result.value = Number(input.value) / 160900;

    }

// Meter Converter

    if(inputTypeValue === "meter" && resultTypeValue==="nanometer"){

        result.value = Number(input.value) * 1e+9;

    }else if(inputTypeValue === "meter" && resultTypeValue==="micrometer"){

        result.value = Number(input.value) * 1e+6;

    }else if(inputTypeValue === "meter" && resultTypeValue==="millimeter"){

        result.value = Number(input.value) * 1000;

    }else if(inputTypeValue === "meter" && resultTypeValue==="centimeter"){

        result.value = Number(input.value) * 100;

    }else if(inputTypeValue === "meter" && resultTypeValue==="meter"){

        result.value = Number(input.value);

    }else if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){

        result.value = Number(input.value) / 1000;

    }else if(inputTypeValue === "meter" && resultTypeValue==="yard"){

        result.value = Number(input.value) * 1.094;

    }else if(inputTypeValue === "meter" && resultTypeValue==="mile"){

        result.value = Number(input.value) / 1609;

    }

// Kilometer Converter

    if(inputTypeValue === "kilometer" && resultTypeValue==="nanometer"){

        result.value = Number(input.value) * 1e+12;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="micrometer"){

        result.value = Number(input.value) * 1e+9;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="millimeter"){

        result.value = Number(input.value) * 1e+6;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="centimeter"){

        result.value = Number(input.value) * 100000;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){

        result.value = Number(input.value) * 1000;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){

        result.value = Number(input.value);

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="yard"){

        result.value = Number(input.value) * 1094;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="mile"){

        result.value = Number(input.value) / 1.609;

    }

// Yard Converter

    if(inputTypeValue === "yard" && resultTypeValue==="nanometer"){

        result.value = Number(input.value) * 9.144e+8;

    }else if(inputTypeValue === "yard" && resultTypeValue==="micrometer"){

        result.value = Number(input.value) * 914400;

    }else if(inputTypeValue === "yard" && resultTypeValue==="millimeter"){

        result.value = Number(input.value) * 914.4;

    }else if(inputTypeValue === "yard" && resultTypeValue==="centimeter"){

        result.value = Number(input.value) * 91.44;

    }else if(inputTypeValue === "yard" && resultTypeValue==="meter"){

        result.value = Number(input.value) / 1.094;

    }else if(inputTypeValue === "yard" && resultTypeValue==="kilometer"){

        result.value = Number(input.value) / 1094 ;

    }else if(inputTypeValue === "yard" && resultTypeValue==="yard"){

        result.value = Number(input.value);

    }else if(inputTypeValue === "yard" && resultTypeValue==="mile"){

        result.value = Number(input.value) / 1760;

    }

// Mile Converter

    if(inputTypeValue === "mile" && resultTypeValue==="nanometer"){

        result.value = Number(input.value) * 1.609e+12;

    }else if(inputTypeValue === "mile" && resultTypeValue==="micrometer"){

        result.value = Number(input.value) * 1.609e+9;

    }else if(inputTypeValue === "mile" && resultTypeValue==="millimeter"){

        result.value = Number(input.value) * 1.609e+6;

    }else if(inputTypeValue === "mile" && resultTypeValue==="centimeter"){

        result.value = Number(input.value) * 160900;

    }else if(inputTypeValue === "mile" && resultTypeValue==="meter"){

        result.value = Number(input.value) * 1609;

    }else if(inputTypeValue === "mile" && resultTypeValue==="kilometer"){

        result.value = Number(input.value) * 1.609;

    }else if(inputTypeValue === "mile" && resultTypeValue==="yard"){

        result.value = Number(input.value) * 1760;

    }else if(inputTypeValue === "mile" && resultTypeValue==="mile"){

        result.value = Number(input.value);

    }
}
