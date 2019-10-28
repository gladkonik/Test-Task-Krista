function group(criterias, tableInCols) {
  //representation from column-based to row based
  let tableInRows = new Array(9);
  for (let i = 0; i < tableInRows.length; i++) {
    tableInRows[i] = new Array();
  }
  for (let i = 0; i < tableInCols.length; i++) {
    for (let j = 0; j < tableInCols[0].length; j++) {
      tableInRows[j][i] = tableInCols[i][j];
    }
  }

  let groups = new Array();
  groups[0] = tableInRows;
  //for each "criteria" row
  //1 take first row and compare to other rows in the group
  //2 add not satisfying rows to a new group (delete from the current)
  //3 repeat for next group until all groups are consistent
  criterias.forEach(criteria => {
    if (criteria == "criteria") {
      for (let i = 0; i < groups.length; i++) {
        let referenceRow = groups[i][0];
        let tmp = new Array();
        for (let j = groups[i].length - 1; j > 0; j--) {
          if (
            groups[i][j][criteria.columnNumber] !=
            referenceRow[criteria.columnNumber]
          ) {
            tmp.push(groups[i][j]);
            groups[i].splice(j, 1);
          }
        }
        if (tmp.length > 0) {
          groups.push(tmp);
        }
      }
    }
  });

  return groups;
}

//   for (let i = 0; tableInRows.length > 0; i++) {
//     groupes[i].push(tableInRows.shift());
//     for (var j = 0; j < tableInRows.length; j++) {
//       if (arr[i] === 5) {
//         arr.splice(i, 1);
//       }
//     }
//   }

//   for (let i = 0; i < criterias.length; i++) {

//     if (criterias[i] == "criteria") {
//       //look up values
//       let values = [];
//       for (let j = 0; j < arr.length; j++) {
//         let val = values[j][i].find(arr[j][i]);
//         //in case of a new value add it and the corresponding row to control array
//         if (val === undefined) {
//           values.push([val, new Array(tableInRows)]);
//         }
//       }
//       grouped = values;
//     }
//   }
//   console.log(grouped);
// }

// function recursion(criteria) {}

// function group(criterias, table) {
//   if (table.length === 0) {
//     return;
//   }
//   //change representation from column-based to row based
//   console.log([table.length, table[0].length]);
//   let table1 = new Array(10);
//   for (let i = 0; i < table.length; i++) {
//     for (let j = 0; j < table[0].length; j++) {
//       table1[j][i] = table[i][j];
//     }
//   }
//   console.log((table1.length, table1[0].length));
//   //group by value="criteria"
//   const group = function(row) {
//     var rows = new Array();
//     rows.push(row);

//     function add(row) {}
//     function remove(row) {
//       return el;
//     }
//   };
//   let groups = new Array();
//   //look up criterias
//   for (let i = 0; i < criterias.length; i++) {
//     if (criterias[i] == "criteria") {
//       //group by chosen column
//       for (let j = 0; j < table1[0].length; j++) {
//         //look up table1[i][j]

//         groups[j].push();
//       }
//     }
//   }
//   splice(i, 0);
//   //compute value="sum" in each group

//   //find value="max" value in each group

//   //find value="min" value in each group

//   //value="concatenate" values of each group
// }
