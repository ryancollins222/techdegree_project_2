/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// variables
let studentList = document.querySelectorAll('.student-item');
let numPerPage = 10;

// function sets how many to display per page
function showPage(list, page) {
  let startIndex = (page * numPerPage) - numPerPage;
  let endIndex = page * numPerPage;
  for (i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
  }
}  
// initial function call 
showPage(studentList, 1);



// function, adds page links depending on number in list
function appendPageLinks(list) {
  let pageDiv = document.querySelector('.page');
  let numPages = Math.ceil(list.length / 10);
  let ul = document.createElement('ul');
  let div = document.createElement('div');
  div.className = 'pagination';
  div.appendChild(ul);

  // adds li and a elements for each page needed
  for (i = 1; i <= numPages; i++) {
    if (numPages > 1) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.textContent = `${i}`;
      a.href  = '#';
      if (i === 1) {
        a.className = 'active';
      }
    // navigate to each page
      a.addEventListener('click', (e) => {
        let as = document.querySelectorAll('a');
        let page = e.target.textContent;
        showPage(list, page);
        for (i = 0; i < as.length; i++) {
          as[i].className = '';
        }
        e.target.className = 'active';
      })
      // append link elements to page
      li.appendChild(a);
      ul.appendChild(li);
      pageDiv.appendChild(div);
    } else {
      showPage(list, 1);
    }
  } 
}
appendPageLinks(studentList);

// create and append search bar
let pageHeaderDiv = document.querySelector('.page-header');
let studentSearchDiv = document.createElement('div');
studentSearchDiv.className = 'student-search';
let searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search for students...';
let searchButton = document.createElement('button');
searchButton.textContent = 'Search';
studentSearchDiv.appendChild(searchInput);
studentSearchDiv.appendChild(searchButton);
pageHeaderDiv.appendChild(studentSearchDiv);

// search button event listener
searchButton.addEventListener('click', () => {
  let searchResults = [];
  let div = document.querySelector('.pagination')
  let pageDiv = div.parentNode;
  pageDiv.removeChild(div);
  let names = document.querySelectorAll('.student-details h3');
  for (i = 0; i < names.length; i++) {
    let name = names[i].textContent;
    let li = names[i].parentNode.parentNode;
    if (searchInput.value.length !== 0 && name.toLowerCase().includes(searchInput.value.toLowerCase())) {
      searchResults.push(li);
    } else {
      li.style.display = 'none';
    }
  }
  if (searchResults.length === 0) {
    let h1 = document.createElement('h1');
    h1.textContent = "Sorry, no results found!";
    pageDiv.appendChild(h1);
  } else {
    showPage(searchResults, 1);
    appendPageLinks(searchResults);
  }
})

// input event listener
searchInput.addEventListener('keyup', (e) => {
  let searchResults = [];
  let div = document.querySelector('.pagination')
  let pageDiv = div.parentNode;
  pageDiv.removeChild(div);
  let names = document.querySelectorAll('.student-details h3');
  for (i = 0; i < names.length; i++) {
    let name = names[i].textContent;
    let li = names[i].parentNode.parentNode;
    if (searchInput.value.length !== 0 && name.toLowerCase().includes(searchInput.value.toLowerCase())) {
      searchResults.push(li);
    } else {
      li.style.display = 'none';
    }
  }
  if (searchResults.length === 0) {
    let h1 = document.createElement('h1');
    h1.textContent = "Sorry, no results found!";
    pageDiv.appendChild(h1);
  } else {
    showPage(searchResults, 1);
    appendPageLinks(searchResults);
  }
})

