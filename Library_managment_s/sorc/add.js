window.$ = window.jQuery = require('jquery');
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
  db.run("CREATE TABLE Book(Book_id integer,name_Book varchar(35),Author varchar(30),Date_Book Date,date_write Date,copy integer,howGetIt varchar(30),typeBook varchar(25),place varchar(35),Note varchar(40))");

  var book_id     =$('#number_book').val();
  var name_Book   =$('#name_book').val();
  var author      =$('#Author_book').val();
  var dateBook    =$('#date_Book').val();
  var copyBook    =$('#copy').val();
  var getBook 	  =$('#get_book').val();
  var typeBook    =$('#typeing').val();
  var date_write  =$('#date_write').val();
  var place        =$('#place_book').val();
  var place        =$('#note').val();

  var stmt = db.prepare("INSERT INTO Book VALUES (?,?,?,?,?,?,?,?,?,?)");
  stmt.run(book_id,name_Book,author,date_Book,date_write,copyBook,getBook,typeBook,place,note);
  
  stmt.finalize();
 

    db.each("SELECT rowid AS id, name_Book,Author,Date_Book,date_write,copy,howGetIt,typeBook,place,Note FROM Book", function(err, row) {
        console.log(row.id + ": " + row.name_Book +" date "+ row.date_write + " Sign " +row.Note);
    });
});
 
db.close( function (){
  location.reload();
});
})

// SELECT COUNT(rowid) FROM Borrower;
