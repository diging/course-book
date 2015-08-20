---
---

/*
  Contains the site specific js

*/

$(document).ready(function() {
  
});


$.ajax({
    type: 'GET',
    url: "{{ site.baseurl }}/assets/js/catalog.json?",
    dataType: 'json',
    success: function(data) { 
    	var catalog = {};
		$.each( data, function( key, val ) {
		  catalog[val["url"]] = { "title": val["title"], "excerpt": val["excerpt"] };
		});
		show_results(catalog);
	},
    data: {}
});

$('#search_box').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $("#search_button").click();
    return false;  
  }
});  

$("#search_button").click(function(event) {
	div = $(this).closest('#search_div');
	box = div.find("#search_box");
	term = $(box).first().val();
	window.location.href = $(this).attr("data-href") + "?query=" + escape(term);
});

function show_results(catalog){
	var vars = [], hash;
    var q = document.URL.split('?')[1];
    if(q != undefined){
        q = q.split('&');
        for(var i = 0; i < q.length; i++){
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
	}

	term = vars['query'];

	$('#searchterm').html(term);

	results = lunr_index.search(term);
	
	$.each(results, function(index, element) {
		url = element.ref;
		title = catalog[url]["title"];
		excerpt = catalog[url]["excerpt"];
		
		var text = "<li><a href=\"{{ site.baseurl }}/" + url + "\">" + title + "</a><br>" + decodeURI(excerpt) + "</li>";
		$("#search_results").append(text);
	});
}
