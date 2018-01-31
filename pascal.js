

function pascalsTriangle(rows){
	const triangle = [];

	for(var i = 0; i < rows; i++){
		// if there is a row above inside the triangle, calculate each new cell 
		if(triangle[i -1]){
			const targetRow = triangle[i-1];

			triangle[i] = [];

			// using the target row for calculating the new values, 
			// reach to both the -1 index and 1 index past the row length 'i',
			// adding 2 at a time as you go across
			for (var j = -1; j < i; j++){
				const n = targetRow[j] || 0;
				const m = targetRow[j + 1] || 0;

				triangle[i].push(n+m);
			}
		// otherwise, initialize the triangle with a unique nonzero entity, '1' (per the wiki)
		}else{
			triangle.push([1]);
		}
	}
	console.log(triangle);
}