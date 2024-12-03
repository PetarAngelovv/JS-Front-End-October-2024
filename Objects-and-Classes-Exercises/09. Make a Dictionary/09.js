function MakeADictionary(input){ 
    const dictionary = {};
        for (const json of input) {
            const parsedObject  = JSON.parse(json);
            for (const key in parsedObject) {
                dictionary[key] = parsedObject[key];
             }
        }
       const SortedDictionary = Object.keys(dictionary).sort((a,b) =>a.localeCompare(b))
        for (const term of SortedDictionary) {
            console.log(`Term: ${term} => Definition: ${dictionary[term]}`)
        }
    } 