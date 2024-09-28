$(document).ready(function(){

	//example1
	 $( function() {
	    $( "#sortable" ).sortable();
	  } );

	 //example2
	 $( function() {
	    $( "#accordion" ).accordion({
	      collapsible: true
	    });
	  } );

	 //example3
	  $( function() {
	    var availableTags = [
	      "ActionScript",
	      "AppleScript",
	      "Asp",
	      "BASIC",
	      "HTML",
	      "CSS",
	      "JS",
	      "C",
	      "C++",
	      "Clojure",
	      "COBOL",
	      "ColdFusion",
	      "Erlang",
	      "Fortran",
	      "Groovy",
	      "Haskell",
	      "Java",
	      "JavaScript",
	      "Lisp",
	      "Perl",
	      "PHP",
	      "Python",
	      "Ruby",
	      "Scala",
	      "Scheme"
	    ];
	    $( "#tags" ).autocomplete({
	      source: availableTags
	    });
	  } );

	  //example4
	   $( function() {
	    $( "input" ).checkboxradio();
	  } );



})