import { LightningElement } from 'lwc';
/*import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';*/

export default class QuickCreate extends LightningElement {

    /*accountObject = ACCOUNT_OBJECT;
    myFields = [NAME_FIELD, WEBSITE_FIELD];*/

/******* Account *********/
    showAccount = false;

    handleAccountReset() {
        const inputs = this.template.querySelectorAll('lightning-record-edit-form')[0].children;

        inputs.forEach(ins => {
            if(ins.nodeName == 'LIGHTNING-INPUT-FIELD'){
                ins.reset();
            }
        });
     }

    handleAccountSuccess(event){
        console.log('record id : ',event.detail.id);
        this.handleAccountReset(event);
        
    }

    handleAccountShowHide(){
        console.log('--show hide account---');
        console.log(this.showAccount);
        this.showAccount = !this.showAccount;
    }

    /********* Contact **********/
    showContact = false;

    handleContactReset() {
        
        const inputs = this.template.querySelectorAll('lightning-record-edit-form')[1].children;
        //const inputs = editForm.children;
        console.log(inputs);
        inputs.forEach(ins => {
            console.log(ins);
            console.log(ins.nodeName);
            if(ins.nodeName == 'LIGHTNING-INPUT-FIELD'){
                ins.reset();
            }
        });
     }

    handleContactSuccess(event){
        console.log('record id : ',event.detail.id);
        this.handleContactReset(event);
        
    }

    handleContactShowHide(){
        console.log('--show hide contact---');
        console.log(this.showContact);
        this.showContact = !this.showContact;
    }

    /******* Opportunity *********/
    showOpportunity = false;

    handleOpportunityReset() {
        const inputs = this.template.querySelectorAll('lightning-record-edit-form')[2].children;

        inputs.forEach(ins => {
            if(ins.nodeName == 'LIGHTNING-INPUT-FIELD'){
                ins.reset();
            }
        });
     }

     handleOpportunitySuccess(event){
        console.log('record id : ',event.detail.id);
        this.handleOpportunityReset(event);
        
    }

    handleOpportunityShowHide(){
        console.log('--show hide opportunity---');
        console.log(this.showOpportunity);
        this.showOpportunity = !this.showOpportunity;
    }
}