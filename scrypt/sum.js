function sumColumnInGroups(groups, col) {
  groups.forEach(group => {
    let sum = 0;
    group.forEach(row => {
      let cell = parseFloat(row[col]);
      if (isNaN(cell)) {
        cell = 0;
      }
      sum += cell;
    });
    group[0][col] = sum;
    //group[0][col] = group.reduce((acc, row) => acc + row[col]);
  });
}
