notat = () => {

    let searchText = document.getElementById("form-search").value;
    let form = document.getElementById('myForm');
  
    if(searchText === 'Light Yagami') {
      document.getElementById("s").value = searchText;
      form.action = "/Death-Note/dnote.html";
      form.submit();
    } 
    else if (searchText === 'Óðin Andor Ellefsen') {
      document.getElementById("s").value = searchText;
      form.action = "/Notebook/notebook.html";
      form.submit();  
    } else {
        alert('Cmon bro, hevur tú gloymt títt egna navn ;()');
        return;
    }
  }