export const compare = function(a,b) {
            
    let cmp;

    (a > b) 
        ? cmp = 1
        : (a < b)
            ? cmp = -1
            : cmp = 0;

    return cmp;

};

export const sortAscByPrice = function(a,b) {

    let aValue = a.subscriptions.reduce((p,a) => p+a.price,0);
    let bValue = b.subscriptions.reduce((p,a) => p+a.price,0);

    return compare(aValue,bValue);
}