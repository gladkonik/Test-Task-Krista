function getCriterias() {
  let selectParameters = document.getElementsByClassName("drop_down_list");
  let criterias = new Array();
  let columnNames = ["A", "B", "C", "D", "E"];
  Array.from(selectParameters).forEach(el => {
    criterias.push(new String(el.options[el.selectedIndex].value));
    //columnName property added to object string
    criterias[criterias.length - 1].columnName = columnNames.shift();
  });

  return criterias;
}

function getColumn(columnId) {
  let inputCol = document.getElementsByClassName(columnId);
  let col = new Array();
  Array.from(inputCol).forEach(el => {
    col.push(el.value);
  });

  return col;
}

function getTable(criterias) {
  let tableInCols = new Array();
  tableInCols.push(getColumn("col_a"));
  tableInCols.push(getColumn("col_b"));
  tableInCols.push(getColumn("col_c"));
  tableInCols.push(getColumn("col_d"));
  tableInCols.push(getColumn("col_e"));
  // remove "----" criterias and corresponding table data
  for (let i = criterias.length - 1; i >= 0; i--) {
    if (criterias[i] == "null") {
      tableInCols.splice(i, 1);
      criterias.splice(i, 1);
    }
  }
  for (let i = 0; i < criterias.length; i++) {
    criterias[i].columnNumber = i;
  }
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
  return tableInRows;
}

function displayResult(result, criterias) {
  let tableHTML = document.getElementById("result");
  tableHTML.innerHTML = "";
  let rowsHTML = new Array();

  rowsHTML.push(tableHTML.insertRow(-1));
  criterias.forEach(el => {
    rowsHTML[0].insertCell(-1).innerHTML = el.columnName;
  });

  result.forEach(row => {
    rowsHTML.push(tableHTML.insertRow(-1));
    row.forEach(cell => {
      rowsHTML[rowsHTML.length - 1].insertCell(-1).innerHTML = cell;
    });
  });
}

function process() {
  let criterias = getCriterias();
  // if no criteria chosen - nothing is the result
  if (criterias.length === 0) {
    document.getElementById("result").innerHTML = "";
    return;
  }
  let table = getTable(criterias);
  console.log(table);
  var groups = group(criterias, table);
  //results of next operations are stored in first rows of each group
  criterias.forEach(criteria => {
    switch (criteria + "") {
      case "sum":
        sumColumnInGroups(groups, criteria.columnNumber);
        break;
      case "max":
        maxValColumnInGroups(groups, criteria.columnNumber);
        break;
      case "min":
        minValColumnInGroups(groups, criteria.columnNumber);
        break;
      case "concat":
        concatColumnInGroups(groups, criteria.columnNumber);
        break;
      default:
        break;
    }
  });

  let result = groups.map(groupRows => groupRows[0]);
  displayResult(result, criterias);
}
