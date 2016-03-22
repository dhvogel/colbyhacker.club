

function logIn() {
    window.location.href = "submissions.html"
}


$("#table tr").on('click', function(){
    console.log("test")
   $(this).addClass('selected').siblings().removeClass('selected');    
   var value=$(this).find('td:first').html();
   alert(value);    
});


