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
    static TYPE_GRID="grid";
    static TYPE_RATING="rating";
    static TYPE_SIMPLE="simple";
    static TYPE_GROUP="grouped";
    static TYPE_CONFIGURABLE="configurable";
    static TYPE_BUNDLE="bundle";
    static TYPE_VIRTUAL="virtual";
    static TYPE_DOWNLOADABLE="downloadable";
    static DISPLAY_SINGLE_COLUMN="single-column";
    static DISPLAY_DOUBLE_COLUMN="double-column";
    static DISPLAY_LIST="list";
    static BANNER_TYPE_LARGE="L";
    static BANNER_TYPE_SMALL="S";
    static ORDER_LIST=[
        "Alfabetico ascendente",
        "Alfabetico discendente",
        "Prezzo ascendente",
        "Prezzo discendente",
        "Rating ascendente",
        "Rating discendente"
    ];

    static url="http://demo.dev1.accelasearch.net/?q=";
    static currency="€";
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

    getSelectedValue(){
        return this.selectedValue;
    }
}