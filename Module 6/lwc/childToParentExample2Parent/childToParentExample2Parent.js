import { LightningElement, track, api } from 'lwc';

export default class ChildToParentExample2Parent extends LightningElement {

    @track selectedStatus1 ='Deselected'
    selectedStatus2 ='Deselected'
    selectedStatus3 ='Deselected'
    child1Select = true
    child2Select = true
    child3Select = true
    allSelectStatus ='true,true,true';
    

    hanldeSelectValueChange(event){
        console.log('--- in parent ---');
        
        this.allSelectStatus = event.detail;
        this.allSelectStatus = JSON.stringify(Object.values(event.detail));
        this.child1Select = event.detail.one;
        this.child2Select = event.detail.two;
        this.child3Select = event.detail.three;
        //this.allSelectStatus = this.child1Select + ', ' +this.child2Select + ', ' +this.child3Select;
        console.log(this.allSelectStatus);
        this.selectedStatus1 = this.child1Select ? 'Deselected': 'Selected';
        this.selectedStatus2 = this.child2Select ? 'Deselected': 'Selected';
        this.selectedStatus3 = this.child3Select ? 'Deselected': 'Selected';

    }

    @api handleChangeFromGP(){
        console.log('----handleChangeFromGP----');
        this.allSelectStatus = 'true,true,true';
        var x = this.template.querySelectorAll("c-child-to-parent-example2-child");
        
        console.log('x' +x); //x[object HTMLHeadingElement]
        for (var i = 0; i < x.length; i++) {
          x[i].handleChangeFromP();
        }
        this.selectedStatus1 ='Deselected';
        this.selectedStatus2 ='Deselected';
        this.selectedStatus3 ='Deselected';
    }


}