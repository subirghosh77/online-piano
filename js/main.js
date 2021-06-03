var key = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
var pianoKey = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'k', 'l', 'p', 'z', 'x', 'c'];
var audioPlay = ['c1', 'c1_sharp', 'd1', 'd1_sharp', 'e1', 'f1', 'f1_sharp', 'g1', 'g1_sharp', 'a1', 'a1_sharp', 'b1', 'c2', 'c2_sharp', 'd2', 'd2_sharp', 'e2'];
$(document).ready(function () {
	$("li").click(function () {
		var id = $(this).attr('id');
		//alert(id.replace("id_",""));
		document.getElementById('a_' + id.replace("id_", "")).play();
		//console.log(i);
	});
});
$(document).ready(function () {
	$(document).bind('keypress', function (e) {
		var character = String.fromCharCode(e.keyCode || e.which);
		console.log(character);
		for (var i = 0; i < pianoKey.length; i++) {
			if (pianoKey[i] == character) {
				console.log(i);
				document.getElementById('a_' + i).play();
			}
		}
	});
});
