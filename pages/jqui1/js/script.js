$(document).ready(function(){

	//examole1
	$( function() {
	    $( "#draggable" ).draggable();
	  } );

	//example2
	$( function() {
	    $( "#draggable2" ).draggable();
	    $( "#droppable" ).droppable({
	      drop: function( event, ui ) {
	        $( this )
	          .addClass( "ui-state-highlight" )
	          .find( "p" )
	            .html( "Dropped!" );
	      }
	    });
	  } );

	//example3
	 $( function() {
	    var $start_counter = $( "#event-start" ),
	      $drag_counter = $( "#event-drag" ),
	      $stop_counter = $( "#event-stop" ),
	      counts = [ 0, 0, 0 ];
	 
	    $( "#draggable3" ).draggable({
	      start: function() {
	        counts[ 0 ]++;
	        updateCounterStatus( $start_counter, counts[ 0 ] );
	      },
	      drag: function() {
	        counts[ 1 ]++;
	        updateCounterStatus( $drag_counter, counts[ 1 ] );
	      },
	      stop: function() {
	        counts[ 2 ]++;
	        updateCounterStatus( $stop_counter, counts[ 2 ] );
	      }
	    });
	 
	    function updateCounterStatus( $event_counter, new_count ) {
	      // first update the status visually...
	      if ( !$event_counter.hasClass( "ui-state-hover" ) ) {
	        $event_counter.addClass( "ui-state-hover" )
	          .siblings().removeClass( "ui-state-hover" );
	      }
	      // ...then update the numbers
	      $( "span.count", $event_counter ).text( new_count );
	    }
	  } );

	 //example
	  $( function() {
	    $( "#resizable" ).resizable({
	      animate: true
	    });
	  } );

	  //example5
	  $( function() {
	    $( "#selectable" ).selectable();
	  } );



})