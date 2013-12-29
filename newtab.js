$(document).ready(function(){


	var loc = location.hostname;
	$("a[href^=http]").each(function(){
      if(this.href.indexOf(loc) == -1)
      	$(this).attr('target', "_blank");


  });
});

