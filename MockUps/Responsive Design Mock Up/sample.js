	
	//Global flag
	var mobile=false;
	
	
	
	
	
	
	
	function getTarget(oEvent){

			
				if(window.event){

					return window.event.srcElement;
								
	
				}else{
					
					return oEvent.target;
				}
				
		}



		 
		window.onload = function(){ 

		
			initializer();			
			

		}


		function fEventAssociator(oNode , sEvent, fHandler){
			
			if(typeof(oNode.addEventListener) != "undefined"){
				
					oNode.addEventListener(sEvent , fHandler,false);

			}else{
			
					oNode.attachEvent("on"+sEvent, fHandler);
			}

		} //end of fEventAssociator
		
		
		
		function fEventRemover(oNode , sEvent, fHandler){
			
			if(typeof(oNode.removeEventListener) != "undefined"){
				
					oNode.removeEventListener(sEvent , fHandler,false);

			}else{
			
					oNode.detachEvent("on"+sEvent, fHandler);
			}

		} //end of fEventAssociator

		
		//Initializers
		function initializer(){
					
				
			fResizeHandler();		
			
			fEventAssociator(window ,"resize",fResizeHandler);	
			

			
		}

		
		
		
		// Event Handlers
			
		function fClickHandler(oEvent){
		

						
			
		
		}
		
		
		
		function fMenuClickHandler(oEvent){
		
		
		var li = getTarget(oEvent);

			 if(li.childNodes.length > 1){
			 
			        var tmp = li.childNodes[2];
					
						if(tmp.style.display == "none"){
			  
								tmp.style.display="block";
						}else{
						
								tmp.style.display="none";
						}
			 
			 }
		
		
		}  //end of fMenuClickHandler
		
		
		
		
		function fAMenuClickHandler(oEvent){
		
		
		var a = getTarget(oEvent);

				var li = a.parentNode;
		
			 if(li.childNodes.length > 1){
			 
					oEvent.preventDefault();
					
			        var tmp = li.childNodes[2];
					
						if(tmp.className == ""){
			  
								tmp.className = "menuClassShow";
						}else{
						
								tmp.className = "menuClassHide";
						}
						
						
			 
			 }else{
				
					return true;
			 
			 }
		
		
		}  //end of fAMenuClickHandler
		
		
		
		
		function fResizeHandler(oEvent){
		
		
		var listLi = document.getElementsByTagName("li");
 
 var width = document.innerWidth ? document.innerWidth : ( (document.body.offsetWidth) ? document.body.offsetWidth : document.documentElement.offsetWidth ) ;

	
 
		if(window.innerWidth < 400){
		console.log("Window has size less than 400");
		
		if(!mobile){
		
		for (var count=0; count<listLi.length; count++){
		
			
			//fEventAssociator(listLi[count],"click",fMenuClickHandler);
			
			fEventAssociator(listLi[count].childNodes[0],"click",fAMenuClickHandler);
			
		
		
		} //end of List LI for loop
		
		mobile =true;
		
		
		}// end of !mobile
		
				
		
		}else{  		// end of an if < 400
  
  
			if(mobile){
  
		for (var count=0; count<listLi.length; count++){
		
			
			//fEventRemover(listLi[count],"click",fMenuClickHandler);
			
			fEventRemover(listLi[count].childNodes[0],"click",fAMenuClickHandler);
			
			
			
			var listLi = document.getElementsByTagName("li");
		
		
			for(var count=0 ; count<listLi.length ; count++){
		
			 if(listLi[count].childNodes.length > 1){
			 
							
			        var tmp = listLi[count].childNodes[2];
					
					
					tmp.className = "";
					
						/*
						
						if(tmp.style.display == "none"){
			  
								tmp.style.display="block";
						}else{
						
								tmp.style.display="none";
						}
						
						*/
						
						
			 
			 }
			 
			 } //end of for listLi
			
			
			
		
			
		
		} //end of List LI for loop
		
		mobile =false;
		
		
		} // end of if(mobile)
		
		
		}  //end of an else  if < 400
 
 } //end of function fSizeChanged 

 document.createElement("nav");
 document.createElement("header");
 document.createElement("footer");
 document.createElement("aside");
 document.createElement("article");
 document.createElement("section");
 
 


