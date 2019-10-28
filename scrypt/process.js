function getCriterias() {
  let selectParameters = document.getElementsByClassName("drop_down_list");
  let criterias = new Array();
  let columnNames = ["A", "B", "C", "D", "E"];
  Array.from(selectParameters).forEach(el => {
    criterias.push(new String(el.options[el.selectedIndex].value));
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

function displayResult(groups, criterias, tSize) {
  var tableHTML = document.getElementById("result");
  tableHTML.innerHTML = "";
  var rowsHTML = new Array();

  rowsHTML.push(tableHTML.insertRow(-1));
  criterias.forEach(el => {
    rowsHTML[0].insertCell(-1).innerHTML = el.columnName;
  });

  groups.forEach(group => {
    group.forEach(row => {
      rowsHTML.push(tableHTML.insertRow(-1));
      row.forEach(cell => {
        rowsHTML[rowsHTML.length - 1].insertCell(-1).innerHTML = cell;
      });
    });
  });
}

function process() {
  let criterias = getCriterias();

  let table = new Array();
  table.push(getColumn("col_a"));
  table.push(getColumn("col_b"));
  table.push(getColumn("col_c"));
  table.push(getColumn("col_d"));
  table.push(getColumn("col_e"));
  // delete "----" criterias and corresponding table data
  for (let i = criterias.length - 1; i >= 0; i--) {
    if (criterias[i] == "null") {
      table.splice(i, 1);
      criterias.splice(i, 1);
    }
  }
  // if no criteria chosen - nothing is the result
  if (criterias.length === 0) {
    return;
  }

  for (let i = 0; i < criterias.length; i++) {
    criterias[i].columnNumber = i;
  }

  let groups = group(criterias, table);

  let tSize = { x: table.length, y: table[0].length + 1 };
  displayResult(groups, criterias, tSize);
}
