import { LightningElement, track } from 'lwc';
import associateContacts from "@salesforce/apex/LwcLookupController.getContacts";

export default class LookupRecords extends LightningElement {

    @track accountName;  
    @track accountRecordId;
    @track accountIndustry;
    @track accountType;
    @track hideLookup = false;
    @track contactRecordList;

    onAccountSelection(event){  
        this.accountName = event.detail.selectedValue;  
        this.accountRecordId = event.detail.selectedRecordId;  
        this.hideLookup = true;
        console.log(this.hideLookup);
        associateContacts({ accId: this.accountRecordId})
        .then((result) => {  
            if (result.length===0) {  
                this.contactRecordList = [];  
                this.message = "No Records Found";  
            } else {  
                console.log(result);
                console.log(result[0]);
                this.contactRecordList = result;  
                this.accountIndustry = result[0].Account.Industry;
                this.accountType = result[0].Account.Type;
                this.message = "";  
                console.log(this.contactRecordList);
            }  
            this.error = undefined;  
        })  
        .catch((error) => {  
            this.error = error;  
            this.contactRecordList = undefined;  
        });  
    }  

    handleReset(){
        this.hideLookup = false;
        this.template.querySelector("c-lwc-lookup").removeLookup();
    }
}