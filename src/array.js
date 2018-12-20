export function flatMap(fn, arr) {
    return arr
      .map((item, idx) => fn(item, idx))
      .reduce((acc, curr) => acc.concat(curr), []);
  }
  
  export function partition(predicate, arr) {
    const positives = [];
    const negatives = [];
  
    arr.forEach(
      (item, index) =>
        predicate(item, index) ? positives.push(item) : negatives.push(item)
    );
  
    return [positives, negatives];
  }
  
  export function areEqual(a1, a2) {
    if (!a1 || !a2) return false;
    if (a1.length !== a2.length) return false;
  
    if (
      a1.some(el => a2.includes(el) === false) ||
      a2.some(el => a1.includes(el) === false)
    ) {
      return false;
    }
  
    return true;
  }
  
  export function getLast(arr) {
    return arr[arr.length - 1];
  }
  
  export function sumForField(fieldName, arr) {
    return arr.reduce((acc, curr) => {
      return curr[fieldName] ? acc + curr[fieldName] : acc;
    }, 0);
  }
  
  export function deduplicate(arr, idName){
    const idMap = {};
  
    // Arr is array of primitive data type elements
    if(!idName){
      return arr.filter( item => {
        const isUniqueItem = !idMap[item];
        idMap[item] = true;
        return isUniqueItem;
      })  
    }
  
    // Arr is array of objects
    return arr.filter( item => {
      if(item[idName] == undefined) return true;
      
      const isUniqueItem = !idMap[item[idName]];
      idMap[item[idName]] = true;
      return isUniqueItem;
    })
  }  