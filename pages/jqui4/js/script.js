$(document).ready(function(){

	//example1
	$( function() {
    // setup master volume
    $( "#master" ).slider({
      value: 60,
      orientation: "horizontal",
      range: "min",
      animate: true
    });
    // setup graphic EQ
    $( "#eq > span" ).each(function() {
      // read initial values from markup and remove that
      var value = parseInt( $( this ).text(), 10 );
      $( this ).empty().slider({
        value: value,
        range: "min",
        animate: true,
        orientation: "vertical"
      });
    });
  } );

	//example2
	$( function() {
    function latlong() {
      return new google.maps.LatLng( $("#lat").val(), $("#lng").val() );
    }
    function position() {
      map.setCenter( latlong() );
    }
    $( "#lat, #lng" ).spinner({
      step: .001,
      change: position,
      stop: position
    });
 
    var map = new google.maps.Map( $("#map")[0], {
      zoom: 8,
      center: latlong(),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  } );

	// example3
	 $( function() {
	    $( "#tabs" ).tabs({
	      collapsible: true
	    });
	  } );

	 // example4
	 $( function() {
	    $( document ).tooltip({
	      position: {
	        my: "center bottom-20",
	        at: "center top",
	        using: function( position, feedback ) {
	          $( this ).css( position );
	          $( "<div>" )
	            .addClass( "arrow" )
	            .addClass( feedback.vertical )
	            .addClass( feedback.horizontal )
	            .appendTo( this );
	        }
	      }
	    });
	  } );

   //example5
   $( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );


})