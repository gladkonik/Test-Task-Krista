function concatColumnInGroups(groups, col) {
  groups.forEach(group => {
    let concat = "";
    group.forEach(row => {
      concat += row[col];
    });
    group[0][col] = concat;
    // group[0][col] = groupe.reduce((acc, row) => {
    //     return acc + row[col].toString();
    // });
  });
}
