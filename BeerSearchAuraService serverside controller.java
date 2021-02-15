public class BeerSearchAuraService {
    @AuraEnabled
    public static List<sObject> searchBeer(String searchword)
    {
        String tofind = '%' + searchword + '%';
        String Query = '';
        if(searchword!=null)
            Query = 'select id,name,Id__c,Alcohol__c,brewery_id__c,brewery_Name__c,Tags__c,Total_Quantity__c from Beer__c where Name Like :tofind Limit 10';
        else
            Query = 'select id,name,Id__c,Alcohol__c,brewery_id__c,brewery_Name__c,Tags__c,Total_Quantity__c from Beer__c Limit 10';
        List<sObject> sobjectList = Database.query(Query); 
        return sobjectList;
    }
}