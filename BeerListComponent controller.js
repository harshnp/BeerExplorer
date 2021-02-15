({
	showBeerDetail : function(component, event, helper) {
        
		var selectedBeer = event.getSource().get("v.name");
        //alert(selectedBeer);
       component.set('v.selectedBeerId',selectedBeer);
        
        $A.createComponent(
            "c:BeerDetails",
            {
                "BeerId" : selectedBeer
            },
            function(beerDetails, status, errorMessage){
                if (status === "SUCCESS") {
                    component.find('overlayLib').showCustomModal({
                       header: "Beer Details",
                       body: beerDetails,
                       showCloseButton: true,
                       cssClass: "mymodal",
                       closeCallback: function() {
                       }
                   })
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")                    
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    
                }
            }
        );
	}
})