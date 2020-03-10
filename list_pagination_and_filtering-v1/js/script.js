/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
let studentList = document.querySelectorAll('.student-item');
let numPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
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
showPage(studentList, 1);



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks(list) {
  let pageDiv = document.querySelector('.page');
  let numPages = Math.ceil(list.length / 10);
  let ul = document.createElement('ul');
  let div = document.createElement('div');
  div.className = 'pagination';
  div.appendChild(ul);

  for (i = 1; i <= numPages; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = `${i}`;
    a.href  = '#';

    if (i === 1) {
      a.className = 'active';
    }

    a.addEventListener('click', (e) => {
      let as = document.querySelectorAll('a');
      let page = e.target.textContent;
      showPage(list, page);
      for (i = 0; i < as.length; i++) {
        as[i].className = '';
      }
      e.target.className = 'active';
    })

    li.appendChild(a);
    ul.appendChild(li);
  }
  pageDiv.appendChild(div);
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

// Remember to delete the comments that came with this file, and replace them with your own code comments.