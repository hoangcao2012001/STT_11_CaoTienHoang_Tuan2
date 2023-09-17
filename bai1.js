// // Data
// // coord1 = [52.508, 13.381];
// // coord2 = [19.037, 72.873];
// // coord3 = [-33.933, 18.474];

// const whereAmI = function(lat, lng) {
//     fetch(
//             `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=d0969cd04a48462faf25083773f4571f`
//         )
//         .then(response => {
//             if (!response.ok)
//                 throw new Error(`Problem with geocoding ${response.status}`);
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             console.log(
//                 `You are in ${data.results[0].city}, ${data.results[0].country}`
//             );

//             return fetch(
//                 `https://restcountries.com/v2/name/${data.results[0].country}?fullText=true`
//             );
//         })
//         .then(response => {
//             if (!response.ok)
//                 throw new Error(`Country not found (${response.status})`);

//             return response.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error(`${err.message} `));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);