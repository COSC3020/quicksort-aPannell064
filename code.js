function quicksort(array) {
    var lo, p, hi;
    // Use a stack of low/high ordered pairs to make it behave recursively. 
    var bounds = [];
    if(array.length) {bounds.unshift([0, array.length-1]);}

    while(bounds.length) {
        lo = bounds[0][0];
        hi = bounds.shift()[1];
        p = lo;
        // Uses the method in Bentley's algorithm for this part
        for(var i = lo+1; i <= hi; i++) {
            if(array[i] < array[lo]) {
                [array[i], array[p]] = [array[++p], array[i]];
            }
        }
        [array[lo], array[p]] = [array[p], array[lo]];
        if(p+1 < hi) {bounds.unshift([p+1, hi]);}
        if(p-1 > lo) {bounds.unshift([lo, p-1]);}     
    }
    return array;
}

console.log(quicksort([]))