    function addBook(){

        var bookTitle = document.getElementById("bookTitle").value;
        var bookGenre = document.getElementById("bookGenre").value; 
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookGenre").value = "";

        var table = document.getElementById("myTable");

        var checkOutBTN = document.createElement("button");
        checkOutBTN.innerHTML = "Check Out";
        checkOutBTN.onclick = function() {checkOutBook(this)};

        var removeBTN = document.createElement("button");
        removeBTN.innerHTML = "Remove";
        removeBTN.onclick = function() {removeBook(this)};

        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = bookTitle;
        cell2.innerHTML = bookGenre;
        cell3.innerHTML = "N/A";
        cell4.innerHTML = "Not Checked out";
        cell5.appendChild(checkOutBTN);
        cell6.appendChild(removeBTN);

    }
    

    function checkOutBook(btn) {

     var row = btn.parentNode.parentNode;
     
    
      console.log("LOG");
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth()+1).padStart(2,'0');
      var yyyy = today.getFullYear();
      today = dd + '/' + mm + '/' + yyyy       
      var txt = '';
      
      var name = prompt("Please enter your name:", "Enter Name Here");

      if (name == null || name =="" || name == "Enter Name Here"){
        txt = "User cancelled the prompt.";
      }
      else {
        row.cells[2].innerHTML = "Checked out on " + today;
        row.cells[3].innerHTML = "Checked out by " + name;
        
      }



      }
    function removeBook(btn) {
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
      }

   


    
      