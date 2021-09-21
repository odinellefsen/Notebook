/* fn1 = () => {
    if(document.getElementById('navnid') === 'Light Yagami') {
    location.replace('/Death-Note/dnote.html')
    }
}

*/
Notebook = () => {

    let searchText = document.getElementById("form-search").value;
    let form = document.getElementById('myForm');
  
    if(searchText === 'Light Yagami') {
      document.getElementById("s").value = searchText;
      form.action = "/Death-Note/dnote.html";
      form.submit();
    } else if (searchText === 'Óðin Andor Ellefsen' || 'Óðin A. Ellefsen' || 'Óðin A Ellefsen' || 'Óðin Ellefsen' || 'Odin Andor Ellefsen' || 'Odin Ellefsen') {
      document.getElementById("s").value = searchText;
      form.action = "/Notebook/notebook.html";
      form.submit();  
    } else {
        return false;
    }
  }