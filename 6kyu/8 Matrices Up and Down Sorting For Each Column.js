function upDownColSort(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const res = matrix.reduce((acc, arr) =>{
      acc = acc.concat(...arr);
      return acc;
    },[])
    console.log(res);
    res.sort((a,b) => a-b);
    let ind = 0;
    let seq = true;
    for(let i = 0; i < col; i++) {
      if(seq){
        for(let j = 0; j < row; j++){
          matrix[j][i] = res[ind++]; 
       } 
     }
     else{
       for(j = row-1; j >=0; j--) {
          matrix[j][i] = res[ind++]; 
       }  
     }
      seq = !seq;
    }
    return matrix;
    
}