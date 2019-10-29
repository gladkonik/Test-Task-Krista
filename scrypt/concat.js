function concatColumnInGroups(groups, col) {
    groups.forEach(group => {
        let concat = "";
        group.forEach(row => {
            concat += row[col].toString();
        });
        group[0][col] = concat;
    });
}