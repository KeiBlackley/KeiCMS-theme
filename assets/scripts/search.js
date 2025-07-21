// Live filters through a table.
function filterTable(tableID, searchBarID) {
  var searchBarElement, filter, tableElement, tr, td, i, txtValue;
  
  searchBarElement = document.getElementById(searchBarID);
  tableElement = document.getElementById(tableID);
  tr = tableElement.getElementsByTagName("tr");
  
  filter = searchBarElement.value.toUpperCase();

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

// Live filters through a <li> <a> list.
function filterLinkList(listID, searchBarID) {
    var searchBarElement, filter, listElement, itemElements, a, i, txtValue;
    
    searchBarElement = document.getElementById(searchBarID);
    listElement = document.getElementById(listID);
    itemElements = listElement.getElementsByTagName("li");
    
    filter = searchBarElement.value.toUpperCase();
    
    for (i = 0; i < itemElements.length; i++) {
        a = itemElements[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            itemElements[i].style.display = "";
        } else {
            itemElements[i].style.display = "none";
        }
    }
} 

const searchBar = document.getElementById('searchBar');
const searchOutput = document.getElementById('searchOutput');

const searchSource = document.querySelector('main').textContent;
const searchResult = document.getElementById('searchResult');
const radius = 10;

function resetSearchResult() {
  searchResult.innerHTML = '';
}

function handleNoSearchResult() {
  const noResultMessage = document.createElement('li');

  noResultMessage.textContent = 'No result found.';
  searchResult.append(noResultMessage);
}

function filterSearch() {
  resetSearchResult();
  
  const search = searchBar.value.toLowerCase();
  const source = searchSource.toLowerCase();
  
  if (search) {
    const startSearchIndex = source.indexOf(search);
    if (startSearchIndex === -1) return handleNoSearchResult();

    const endSearchIndex = startSearchIndex + search.length;
    const lastIndex = source.length - 1;    
    const start = Math.max(0, startSearchIndex - radius);
    const end = Math.min(endSearchIndex + (radius/4) + 1, lastIndex);
    
    const count = (source.match(new RegExp(search, "g")) || []).length;
    const resultCount = document.createElement('li');

    resultCount.textContent = count;
    if (count > 1) resultCount.textContent += " references found.";
    else resultCount.textContent += " reference found.";

    const startResult = document.createElement('span');
    const hightlightText = document.createElement('strong');
    const endResult = document.createElement('span');

    if (start > 0) startResult.textContent = '...';
    startResult.textContent += searchSource.slice(start, startSearchIndex);
    hightlightText.textContent = searchSource.slice(startSearchIndex, endSearchIndex);
    endResult.textContent = searchSource.slice(endSearchIndex, end);
    if (end !== lastIndex) endResult.textContent += '...';
    
    searchResult.appendChild(resultCount);
    searchResult.appendChild(startResult);
    searchResult.appendChild(hightlightText);
    searchResult.appendChild(endResult);
  }
}

function searchResults() {
  if (searchBar === document.activeElement) searchOutput.style.display = "block";
  else searchOutput.style.display = "none";
}