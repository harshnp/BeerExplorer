({
	handleCompEvent : function(component, event, helper) {
		var searchParam = event.getParam('searchText');
        
        var action = component.get('c.searchBeer');
        action.setParams({
            searchword : searchParam
        });
        action.setCallback(this,function(response){
            if(response.getState()==='SUCCESS')
            {
                var responseVal = response.getReturnValue();
                component.set('v.beerList',responseVal);
                console.log('harsh, this is response: ',responseVal);
            }
            else
                console.log('There is server error in processing!= ' +response.getError());
        })
        $A.enqueueAction(action);
	}
})