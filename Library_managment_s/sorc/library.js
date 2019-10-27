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
      db.each("SELECT rowid AS id, name_Book,Author,date_write,copy,howGetIt,typeBook,place,Note FROM Book", function(err, row) {

      tr +='<tr>' + '<td>' + row.id + '</td>' + '<td>' + row.name_Book + '</td>' + '<td>' + row.Author + '</td>' + '<td>' + row.typeBook + '</td>' + '<td>' + row.place + '</td>'  + '<td>' + row.date_write + '</td>' + '<td>' + row.Note + '</td>' + '</tr>';
    
          table.innerHTML = tr;

    });

  });

db.close();
