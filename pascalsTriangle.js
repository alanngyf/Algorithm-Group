/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    if(numRows === 0){
        return result;
    }
    var row1 = [1];
    result.push(row1);
    if(numRows === 1){
        return result;
    }
    var row2 = [1,1];
    result.push(row2);
    var currentRow = row2;
    for(var i=2; i<numRows; i++){
        var nextRow = [];
        nextRow.push(currentRow[0]);
        for(var j=0; j<currentRow.length-1; j++){
            nextRow.push(currentRow[j]+currentRow[j+1]);
        }
        nextRow.push(currentRow[currentRow.length-1]);
        result.push(nextRow);
        currentRow = nextRow;
    }
    return result;
};