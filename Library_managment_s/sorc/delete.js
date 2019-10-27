window.$ = window.jQuery = require('jquery');
var sqlite3   = require('sqlite3').verbose();

var db =new sqlite3.Database('./mydb.db' , (err) => {
if (err) {
  console.error(err.message);
  }
else {
  console.log("it's open");
}
});


  


document.getElementById('delete').addEventListener('click',function(err,row){
  db.serialize(function(){
    var del =$('#deleteme').val();
    console.log(del);
    var deleting = db.run('DELETE FROM Book WHERE rowid = ?',[del], function(err) {
    if (err) {
      return console.error(err.message);
      location.reload();
    }
    else{
      console.log(" Row(s) deleted");
    }
    });  
    });

  db.close(function(err){
      if (err) {
        console.log(err);}
      else {
        location.reload();

      }
    });

})