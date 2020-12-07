import { LightningElement, api } from 'lwc';

export default class ChildToParentExample2Child extends LightningElement {

    @api selectvalues='';
    @api childtitle ='';
    //selectdetails =[];
    @api isSelect = false;
        //selectdetails =[];

    handleClick(event){

      console.log('--child start--');
      this.selectvalues = this.selectvalues.replace('[','');
      this.selectvalues = this.selectvalues.replace(']','');
      var selected = this.selectvalues.split(',');
      var selectdetails=[true, true, true];
      for(var x=0;x<selected.length;x++){
        if(selected[x] === "true"){
          selectdetails[x] = true;
        }
        else{
          selectdetails[x] = false;
        }
      }
      if(this.childtitle == 'Child One'){
        selectdetails[0] = !this.isSelect;
      }
      else if(this.childtitle == 'Child Two'){
        selectdetails[1] = !this.isSelect;
      }
      else if(this.childtitle == 'Child Three'){
        selectdetails[2] = !this.isSelect;
      }
      const selectedEvent = new CustomEvent("selectvaluechange", {
        bubbles: true, 
        composed: true,
        detail: {
          one: selectdetails[0], 
          two: selectdetails[1], 
          three: selectdetails[2],
           
        }
        
      });
      
      if(this.isSelect == true){
          this.isSelect = false;
      }
      else{
          this.isSelect = true;
      }
      
        // Dispatches the event.
      this.dispatchEvent(selectedEvent);
      
    }


    @api handleChangeFromP(){
      this.isSelect = true;
    }
    
}