
$(document).ready(function(){

	//example1
	$('.btn_c').click(function(){
		alert("Welcome!")
	});

	//example2
	$( ".ex2" ).css( "border", "2px solid red" ).add( ".p_ex2" ).css( "background", "yellow" );

	//example3
	$( '.p_ex3' ).add( '.s_ex3' ).css( "background", "red" );

	//example4
	$('.p_ex4').after("Hello");

	//example5
	$( "#go1" ).on( "click", function() {
	  $( "#block1" )
	    .animate({
	      width: "90%"
	    }, {
	      queue: false,
	      duration: 3000
	    })
	    .animate({ fontSize: "24px" }, 1500 )
	    .animate({ borderRightWidth: "15px" }, 1500 );
	});
	 
	$( "#go2" ).on( "click", function() {
	  $( "#block2" )
	    .animate({ width: "90%" }, 1000 )
	    .animate({ fontSize: "24px" }, 1000 )
	    .animate({ borderLeftWidth: "15px" }, 1000 );
	});
	 
	$( "#go3" ).on( "click", function() {
	  $( "#go1" ).add( "#go2" ).trigger( "click" );
	});
	 
	$( "#go4" ).on( "click", function() {
	  $( "#block1" ).add( "#block2" ).css({
	    width: "",
	    fontSize: "",
	    borderWidth: ""
	  });
	});

	//example6
	$( "#go" ).on( "click", function() {
	  $( ".block" ).first().animate({
	    left: 100
	  }, {
	    duration: 1000,
	    step: function( now, fx ){
	      $( ".block" ).slice( 1 ).css( "left", now );
	    }
	  });
	});

	//example7
	$('.h_ex7').on("click", function(){
		$('.p_ex7').slideToggle(500);
	});

	//example8
	$('.btn_ex8').on("click", function(){
		$('.p_ex8').toggle("slow");
	});

	//example9
	$( "#start" ).on( "click", function() {
	  var myDiv = $( ".ex9" );
	  myDiv.show( "slow" );
	  myDiv.animate({
	    left:"+=200"
	  }, 5000 );
	 
	  myDiv.queue(function() {
	    var that = $( this );
	    that.addClass( "newcolor" );
	    that.dequeue();
	  });
	 
	  myDiv.animate({
	    left:"-=200"
	  }, 1500 );
	  myDiv.queue(function() {
	    var that = $( this );
	    that.removeClass( "newcolor" );
	    that.dequeue();
	  });
	  myDiv.slideUp();
	});
	 
	$( "#stop" ).on( "click", function() {
	  var myDiv = $( ".ex9" );
	  myDiv.clearQueue();
	  myDiv.stop();
	});

	//example10
	$( ".p_ex10" ).on( "click", function() {
	  $( this ).fadeOut( 1000, function() {
	    $( ".ex10" ).text( "'" + $( this ).text() + "' has faded!" );
	    $( this ).remove();
	  });
	});
	$( ".p_ex10" ).hover(function() {
	  $( this ).addClass( "hilite" );
	}, function() {
	  $( this ).removeClass( "hilite" );
	});

	//example11
	$( "#btn1" ).on( "click", function() {
	  function complete() {
	    $( "<div>" ).text( this.id ).appendTo( "#log" );
	  }
	  $( "#box1" ).fadeOut( 1600, "linear", complete );
	  $( "#box2" ).fadeOut( 1600, complete );
	});
	 
	$( "#btn2" ).on( "click", function() {
	  $( "div" ).show();
	  $( "#log" ).empty();
	});

	//example12
	var getPos = function( n ) {
	  return (Math.floor( n ) * 90) + "px";
	};
	$( ".p_ex12" ).each(function( n ) {
	  var r = Math.floor( Math.random() * 3 );
	  var tmp = $( this ).text();
	  $( this ).text( $( ".p_ex12" ).eq( r ).text() );
	  $( ".p_ex12" ).eq( r ).text( tmp );
	  $( this ).css( "left", getPos( n ) );
	} );
	$( ".ex12" )
	  .each(function( n ) {
	    $( this ).css( "left", getPos( n ) );
	  } )
	  .css( "cursor", "pointer" )
	  .on( "click", function() {
	    $( this ).fadeTo( 250, 0.25, function() {
	      $( this )
	        .css( "cursor", "" )
	        .prev()
	          .css( {
	            "font-weight": "bolder",
	            "font-style": "italic"
	          } );
	    } );
	  } );

	  //example13
	  $( ".ex13" ).first().on( "click", function() {
		  $( ".p_ex13" ).first().fadeToggle( "slow", "linear" );
		} );
		$( ".ex13" ).last().on( "click", function() {
		  $( ".p_ex13" ).last().fadeToggle( "fast", function() {
		    $( "#log_ex13" ).append( "<div>finished</div>" );
		  } );
		} );

	  //example14
	  $( "#aa" ).on( "click", function() {
		  $( "#ex14:not(.still)" ).slideToggle( "slow", function() {
		    var n = parseInt( $( ".s_ex14" ).text(), 10 );
		    $( ".s_ex14" ).text( n + 1 );
		  });
		});

	  //example15
	  $( ".p_ex15" ).clone().appendTo( document.example15 );
		$( ".p_ex15" ).clone().appendTo( document.example15 );
		$( ".p_ex15" ).clone().appendTo( document.example15 );
		$( window ).on( "scroll", function() {
		  $( ".s_ex15" ).css( "display", "inline" ).fadeOut( "slow" );
		} );

		//example16
		$( ".btn_ex16" ).first().on( "click", function() {
			  update( $( ".s_ex16" ).first() );
			} );
			 
			$( ".btn_ex16" ).last().on( "click", function() {
			  $( ".btn_ex16" ).first().trigger( "click" );
			  update( $( ".s_ex16" ).last() );
			} );
			 
			function update( j ) {
			  var n = parseInt( j.text(), 10 );
			  j.text( n + 1 );
			}

		//example17
		$( "#old" ).on( "click", function() {
		  $( "input" ).trigger( "focus" );
		} );
		$( "#new" ).on( "click", function() {
		  $( "input" ).triggerHandler( "focus" );
		} );
		$( "input" ).on( "focus", function() {
		  $( "<span>Focused!</span>" ).appendTo( ".example17" ).fadeOut( 1000 );
		} );

		//example18
		$( "select" )
		  .on( "change", function() {
		    var str = "";
		    $( "select option:selected" ).each( function() {
		      str += $( this ).text() + " ";
		    } );
		    $( ".ex18" ).text( str );
		  } )
		  .trigger( "change" );

		 //example19
		$( "form" ).on( "submit", function( event ) {
		  if ( $( "input" ).first().val() === "correct" ) {
		    $( ".s_ex19" ).text( "Validated..." ).show();
		    return;
		  }
		 
		  $( ".s_ex19" ).text( "Not valid!" ).show().fadeOut( 1000 );
		  event.preventDefault();
		} );

		//example20
		$( ".p_ex20" )
		  .on( "mouseup", function() {
		    $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
		  } )
		  .on( "mousedown", function() {
		    $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
		  } );


})