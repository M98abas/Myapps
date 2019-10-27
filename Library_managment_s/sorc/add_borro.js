window.$ = window.jQuery = require('jquery');
const path = require('path');
const url = require('url');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./mydb.db' , (err) => {
if (err) {
	console.error(err.message);
	}
else {
	console.log("it's open");
}
	});


document.getElementById('btn-save').addEventListener('click',function(err, row) {
db.serialize(function() {
  db.run("CREATE TABLE Borrower(Borro_id integer,Name_Borro varchar(30),Depart varchar(30),Description varchar(40),Phone varchar(16),Date_Receipt Date,Date_Return Date,date_write Date,Sign varchar(20))");

  var borro_id    =$('#number_book').val();
  var name_Borro  =$('#name_book').val();
  var depart      =$('#Author_book').val();
  var phone       =$('#date_Book').val();
  var book_name   =$('#copy').val();
  var date_Receipt=$('#get_book').val();
  var date_Return =$('#typeing').val();
  var date_write  =$('#date_write').val();
  var sign        =$('#place_book').val();

  var stmt = db.prepare("INSERT INTO Borrower VALUES (?,?,?,?,?,?,?,?,?)");
  stmt.run(borro_id,name_Borro,depart,phone,book_name,date_Receipt,date_Return,date_write,sign);
  
  stmt.finalize();
 
    db.each("SELECT rowid AS id, Name_Borro,Depart,Description,Phone,Date_Receipt,Date_Return,date_write,Sign FROM Borrower", function(err, row) {
        console.log(row.id + ": " + row.Name_Borro +" date "+ row.date_write + " Sign " +row.Sign);
    });
});
 
db.close( function (){
  location.reload();
});
})

// SELECT COUNT(rowid) FROM Borrower;
