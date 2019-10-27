// window.addEventListener('load',btn_load);
var sqlite3 = require('sqlite3').verbose();
var db =new sqlite3.Database('./mydb.db' , (err) => {
  if (err) {
  	console.error(err.message);
  	}
  else {
  	console.log("it's open");
  }
  });

	
      var table = document.getElementById('tbdy');

  db.serialize(function(){
   // db.run("CREATE TABLE Borrower(Borro_id integer,Name_Borro varchar(30),Depart varchar(30),Description varchar(40),Phone varchar(16),Date_Receipt Date,Date_Return Date,date_write Date,Sign varchar(20))");



    var tr ='';
      db.each("SELECT rowid AS id, Name_Borro,Depart,Description,Phone,Date_Receipt,Date_Return,date_write,Sign FROM Borrower", function(err, row) {

      tr +='<tr>' + '<td>' + row.id + '</td>' + '<td>' + row.Name_Borro + '</td>' + '<td>' + row.Depart + '</td>' + '<td>' + row.Description + '</td>' + '<td>' + row.Phone + '</td>' + '<td>' + row.Date_Receipt + '</td>' + '<td>' + row.Date_Return + '</td>' + '<td>' + row.Sign + '</td>' + '</tr>';
    
          table.innerHTML = tr;

    });


  });
  db.close();