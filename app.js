// http://data.fixer.io/api/latest?access_key=50e7c4e1b8bc6d5dd2b4bc554ea64c58

const axios =require('axios');

const getExchangeRate = async (from,to) => {
    try{

        const response = await axios.get('http://data.fixer.io/api/latest?access_key=50e7c4e1b8bc6d5dd2b4bc554ea64c58');
        const euro = 1/response.data.rates[from];
        const rate = euro * response.data.rates[to];

        if(isNaN(rate))
        {
     throw new Error();
        }
        return rate;
    }
    catch(e)
    {
throw new Error(`unable to fetch exchange rate for ${from} and ${to}`)
    }
     
 };

const getCountries = async (currencyCode) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map((country) => country.name);
};


const convertCurrency = async (from,to,amount) => {
    try{
  
        const rate = await getExchangeRate(from,to)
        const countries = await getCountries(to)
       const convertedAmount =  (rate * amount).toFixed(2);
      
      return `${amount} ${from} is worth ${convertedAmount} ${to}. you can spend it in following countries : ${countries.join(', ')}` ;
    }
    catch(e)
    {
        throw new Error(`unable to fetch currency  for countries that use  ${currencyCode}`)
    }
  
  
};

convertCurrency('USD','INR',100).then((message) => {
console.log(message);
}).catch((e) => {
    console.log(e.message);
});

//-----------------------------------------------------------------------------
const add = async (a,b) => a + b

const doWork = async () => {
try {
const result = add(10,12);
return result;
}
catch(e){

}
}
doWork().then((data) => {
     console.log(data);
    }).catch((e) => {
        console.log('something went wrong');
    })
