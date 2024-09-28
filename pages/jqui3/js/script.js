$(document).ready(function(){

	//example1
	$( function() {
    var page = $( "#page" );
    var basicControls = [ "#print", "#bold", "#italic", "#undo", "#redo" ];
    var valueControls = [ "#fontsize", "#forecolor", "#hilitecolor", "#backcolor", "fontname" ];
 
    $( "#print" ).button({
      "icon": "ui-icon-print",
      "showLabel": false
    });
    $( "#redo" ).button({
      "icon": "ui-icon-arrowreturnthick-1-e",
      "showLabel": false
    });
    $( "#undo" ).button({
      "icon": "ui-icon-arrowreturnthick-1-w",
      "showLabel": false
    });
 
    $( ".toolbar" ).controlgroup();
    $( "#zoom" ).on( "selectmenuchange", function() {
      page.css({ "zoom": $( this ).val() });
    })
    $( basicControls.concat( valueControls ).join( ", " ) ).on( "click change selectmenuchange",
      function() {
        document.execCommand(
          this.id,
          false,
          $( this ).val()
        );
      } );
    $( "form" ).on( "submit", function( event ) {
      event.preventDefault();
    });
  } );

	//example2
	$( function() {
	    $( "#datepicker" ).datepicker();
	    $( "#anim" ).on( "change", function() {
	      $( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
	    });
	  } );

	//example3
	$( function() {
	    $( "#dialog" ).dialog({
	      autoOpen: false,
	      show: {
	        effect: "blind",
	        duration: 1000
	      },
	      hide: {
	        effect: "explode",
	        duration: 1000
	      }
	    });
	 
	    $( "#opener" ).on( "click", function() {
	      $( "#dialog" ).dialog( "open" );
	    });
	  } );

	//example4
	 $( function() {
    $( "#menu" ).menu();
  } );

	 //example5
	 $( function() {
    var circle = $( "#circle" );
 
    $( "#radius" ).selectmenu({
      change: function( event, data ) {
        circle.css({
          width: data.item.value,
          height: data.item.value
        });
      }
     });
 
    $( "#color" ).selectmenu({
       change: function( event, data ) {
         circle.css( "background", data.item.value );
       }
     });
  } );



})