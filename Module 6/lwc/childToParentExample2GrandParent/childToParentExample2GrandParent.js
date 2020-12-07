import { LightningElement, track } from 'lwc';

export default class ChildToParentExample2GrandParent extends LightningElement {

    @track
    selectCount = 0
    totalCount = 3
    allSelect = [false, false, false];

    handleResetAll(event){
        console.log('---reset all---');
        this.template.querySelector("c-child-to-parent-example2-parent").handleChangeFromGP();
        this.selectCount = 0
    }

    hanldeSelectValueChangeGP(event){
        console.log('Grand parent event handle');
        //console.log(event);
        this.allSelect[0] = event.detail.one;
        this.allSelect[1] = event.detail.two;
        this.allSelect[2] = event.detail.three;
        this.totalCount = this.allSelect.length;
        this.selectCount = 0;
        //console.log(this.totalCount);
        for(var i=0;i<this.totalCount; i++){
            //console.log(this.allSelect[i]);
            if(!this.allSelect[i]){
                this.selectCount++;
            }
        }
        //console.log(this.selectCount);
    }
}