$(document).ready(function(){


	// example1
	 $( function() {
    function left( element, using ) {
      element.position({
        my: "right middle",
        at: "left+25 middle",
        of: "#container",
        collision: "none",
        using: using
      });
    }
    function right( element, using ) {
      element.position({
        my: "left middle",
        at: "right-25 middle",
        of: "#container",
        collision: "none",
        using: using
      });
    }
    function center( element, using ) {
      element.position({
        my: "center middle",
        at: "center middle",
        of: "#container",
        using: using
      });
    }
 
    left( $( "img" ).eq( 0 ) );
    center( $( "img" ).eq( 1 ) );
    right( $( "img" ).eq( 2 ) );
 
    function animate( to ) {
      $( this ).stop( true, false ).animate( to );
    }
    function next( event ) {
      event.preventDefault();
      center( $( "img" ).eq( 2 ), animate );
      left( $( "img" ).eq( 1 ), animate );
      right( $( "img" ).eq( 0 ).appendTo( "#container" ) );
    }
    function previous( event ) {
      event.preventDefault();
      center( $( "img" ).eq( 0 ), animate );
      right( $( "img" ).eq( 1 ), animate );
      left( $( "img" ).eq( 2 ).prependTo( "#container" ) );
    }
    $( "#previous" ).on( "click", previous );
    $( "#next" ).on( "click", next );
 
    $( "img" ).on( "click", function( event ) {
      $( "img" ).index( this ) === 0 ? previous( event ) : next( event );
    });
 
    $( window ).on( "resize", function() {
      left( $( "img" ).eq( 0 ), animate );
      center( $( "img" ).eq( 1 ), animate );
      right( $( "img" ).eq( 2 ), animate );
    });
  } );

	 // example2
	 $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect" ).hide();
  } );



})