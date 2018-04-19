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
    static DISPLAY_SINGLE_COLUMN="single-column";
    static DISPLAY_DOUBLE_COLUMN="double-column";
    static DISPLAY_LIST="list";
    static ORDER_LIST=[
        "Alfabetico ascendente",
        "Alfabetico discendente",
        "Prezzo ascendente",
        "Prezzo discendente",
        "Rating ascendente",
        "Rating discendente"
    ];

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