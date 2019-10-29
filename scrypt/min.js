function minValColumnInGroups(groups, col) {
  groups.forEach(group => {
    let min = Number.MAX_SAFE_INTEGER;
    group.forEach(row => {
      let cell = parseFloat(row[col]);
      if (isNaN(cell)) {
        cell = 0;
      }
      if (cell < min) {
        min = cell;
      }
    });
    group[0][col] = min;
    // group[0][col] = groupe.reduce((acc, row) => {
    //     return Math.min(acc, row);
    // }, Number.MIN_SAFE_INTEGER);
  });
}
