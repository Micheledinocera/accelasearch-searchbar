export default class SettingItem {
    constructor(info){
        this.type=info.type;
        this.title=info.title;
        this.values=info.values;
    }

    static TYPE_CHECKBOX="checkbox";
    static TYPE_RADIO="radio";
    static TYPE_SLIDER="slider";
    static TYPE_RANGE="range";
    static DISPLAY_GRID="grid";
    static DISPLAY_LIST="list";

    type ="";
    title="";
    values;
    selectedValue;

    setType(type){
        this.type=type;
    }

    setValues(values){
        this.values=values;
    }

    setSelectedValue(selectedValue){
        this.selectedValue=selectedValue;
    }

    setTitle(title){
        this.title=title;
    }

    getType(){
        return this.type;
    }

    getTitle(){
        return this.title;
    }

    getValues(){
        return this.values;
    }

    getSelectedValue(selectedValue){
        return this.selectedValue;
    }
}