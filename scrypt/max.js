function maxValColumnInGroups(groups, col) {
  groups.forEach(group => {
    let max = Number.MIN_SAFE_INTEGER;
    group.forEach(row => {
      let cell = parseFloat(row[col]);
      if (isNaN(cell)) {
        cell = 0;
      }
      if (cell > max) {
        max = cell;
      }
    });
    group[0][col] = max;
    // let a = Number.MAX_SAFE_INTEGER;
    // group[0][col] = groupe.reduce((acc, row) => {
    //     return Math.min(acc, row);
    // }, Number.MAX_SAFE_INTEGER);
  });
}
