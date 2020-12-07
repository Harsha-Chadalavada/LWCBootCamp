public class LWCLookupController {
    public LWCLookupController() { }

    @AuraEnabled(cacheable=true)  
    public static List<sobject> findRecords(String searchKey, String objectName) {  
        string searchText = '\'' + String.escapeSingleQuotes(searchKey) + '%\'';  
        string query = 'SELECT Id, Name FROM ' +objectName+ ' WHERE Name LIKE '+searchText+' LIMIT 6';  
        return Database.query('SELECT Id, Name, Industry, Type FROM ' +objectName+ ' WHERE Name LIKE '+searchText+' LIMIT 6');  
    }  

    @AuraEnabled(cacheable=true)  
    public static list<contact> getContacts(string accId){
        List<Contact> contactList = [SELECT Id, Name, Title, Email, Phone, Account.Industry, Account.Type FROM contact WHERE AccountId=:accId];
        return contactList;
    }
}
