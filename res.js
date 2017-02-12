

$(function(){
    console.log('res');
    var t = $('table');
    for (var i = 0; i <= 3; i++) {
    	t.append('<tr><td>1234</td><td>Castanier</td><td>Raphael</td><td>Gros Lot</td></tr>');
    }


    $('tr').click(function(){
		$(this).toggleClass('hi');
	})

});
