function group(criterias, tableInRows) {
  let groups = new Array();
  groups[0] = tableInRows;
  //for each "criteria" row:
  //1. take first row and compare to other rows in the group
  //2. move not satisfying rows to a new group
  //3. repeat for next group until all groups are consistent
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
