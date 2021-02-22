function mySerie() 
  {
	var N;
  	N = document.getElementById("Numero").value;
	for( var i = 0; i < N; i=i+1)
	  {
		for( var j = 0; j <= i; j=j+1)
		     {
			document.write( + (i + 1) + ",");
	       	 }
	  }

  }
