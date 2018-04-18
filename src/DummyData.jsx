import SettingItem from './models/SettingItem.jsx'

export default class DummyData{
    static categories1 = [{
            "name":"category12",
            "children":[
                {name:"item11",children:[
                    {name:"subitem11",children:[]},
                    {name:"subitemitem11",children:[]},
                ]},
                {name:"item12",children:[]}]
        },{
            "name":"category22",
            "children":[
                {name:"item21",children:[]},
                {name:"item22",children:[]}]
        },{
            "name":"category32",
            "children":[
                {name:"item31",children:[]},
                {name:"item32",children:[]}]
    }];

    static categories2 = [{
            "name":"categoryasd12",
            "children":[
                {name:"item11asd",children:[
                    {name:"subitem11asd",children:[]},
                    {name:"subitem12asd",children:[]}
                ]},
                {name:"item12asd",children:[]}]
        },{
            "name":"category22asd",
            "children":[
                {name:"item21asd",children:[]},
                {name:"item22asd",children:[]}]
        },{
            "name":"category32asd",
            "children":[
                {name:"item31asd",children:[]},
                {name:"item32asd",children:[]}]
    }];

    static sliderValues1 = {min:0,max:100};
    static sliderValues2 = {min:1,max:99};

    static cheboxValues1 = [{value:'roba1',resultsCount:"1"},{value:'roba2',resultsCount:"1"},{value:'roba3',resultsCount:"1"}];
    static cheboxValues2 = [{value:'roba21',resultsCount:"1"},{value:'roba22',resultsCount:"1"},{value:'roba23',resultsCount:"1"},{value:'roba24',resultsCount:"1"},{value:'roba25',resultsCount:"1"},{value:'roba26',resultsCount:"1"},{value:'roba27',resultsCount:"1"},{value:'roba28',resultsCount:"1"},{value:'roba29',resultsCount:"1"},{value:'roba20',resultsCount:"1"}];

    static radioValues1 = [{value:'radioitem11',resultsCount:"1"},{value:'radioitem12',resultsCount:"1"}];
    static radioValues2 = [{value:'radioitem21',resultsCount:"1"},{value:'radioitem22',resultsCount:"1"},{value:'radioitem23',resultsCount:"1"},{value:'radioitem24',resultsCount:"1"},{value:'radioitem25',resultsCount:"1"},{value:'radioitem26',resultsCount:"1"},{value:'radioitem27',resultsCount:"1"},{value:'radioitem28',resultsCount:"1"},{value:'radioitem29',resultsCount:"1"},{value:'radioitem20',resultsCount:"1"}];
    
    static mostSearched = ['Borsone','Borsa brutta','Borsa bella','Borsa vuota','Borsa bruttissima','Borsa inutilissimissima']

    static products = [
        {
            "name":"Lou Okuneva",
            "category":"category2",
            "image":"https://picsum.photos/500/500?random",
            "desc":"https://loripsum.net/api/plaintext/1?l=short",
            "rating":2,
            "price":"€ 150,99"
        },{
            "name":"Ms. Yasmine Berge",
            "category":"category2",
            "image":"https://picsum.photos/500/500?random",
            "desc":"https://loripsum.net/api/plaintext/1?l=short",
            "rating":2,
            "price":"€ 100,00"
        },{
            "name":"Noble Olson",
            "category":"category2",
            "image":"https://picsum.photos/500/500?random",
            "desc":"https://loripsum.net/api/plaintext/1?l=short",
            "rating":2,
            "price":"€ 100,00"
        },{
            "name":"Dr. Magdalena Lemke",
            "category":"category2",
            "image":"https://picsum.photos/500/500?random",
            "desc":"https://loripsum.net/api/plaintext/1?l=short",
            "rating":2,
            "price":"€ 100,00"
        },{
            "name":"Wilhelm Hermiston V",
            "category":"category1",
            "image":"https://picsum.photos/500/500?random",
            "desc":"https://loripsum.net/api/plaintext/1?l=short",
            "rating":2,
            "price":"€ 100,00"
        },{
            "name":"Miss Carolina Kuhn",
            "category":"category2",
            "image":"https://picsum.photos/500/500?random",
            "desc":"https://loripsum.net/api/plaintext/1?l=short",
            "rating":2.5,
            "price":"€ 100,00"
        },{
            "name":"Dr. Adan Jones",
            "category":"category3",
            "image":"https://picsum.photos/500/500?random",
            "desc":"https://loripsum.net/api/plaintext/1?l=short",
            "rating":1,
            "price":"€ 100,00"
        },{
            "name":"Hailey Russel",
            "category":"category1",
            "image":"https://picsum.photos/500/500?random",
            "desc":"https://loripsum.net/api/plaintext/1?l=short",
            "rating":5,
            "price":"€ 100,00"
        },{
            "name":"Korey Lesch",
            "category":"category3",
            "image":"https://picsum.photos/500/500?random",
            "desc":"https://loripsum.net/api/plaintext/1?l=short",
            "rating":2,
            "price":"€ 100,00"
        },{
            "name":"Warren Gaylord",
            "category":"category3",
            "image":"https://picsum.photos/500/500?random",
            "desc":"https://loripsum.net/api/plaintext/1?l=short",
            "rating":3,
            "price":"€ 100,00"
        }
    ];

    

    static getDummySettings(){
        return [
            new SettingItem({
                type:SettingItem.TYPE_CHECKBOX,
                title:"checkbox1",
                values:this.cheboxValues1,
                selectedValue:[]
              }),
              new SettingItem({
                type:SettingItem.TYPE_CHECKBOX,
                title:"checkbox2",
                values:this.cheboxValues2,
                selectedValue:[]
              }),
              // new SettingItem({
              //   type:SettingItem.TYPE_RADIO,
              //   title:"radio1",
              //   values:this.categories1
              // }),
              // new SettingItem({
              //   type:SettingItem.TYPE_RADIO,
              //   title:"radio2",
              //   values:this.categories2
              // }),
              new SettingItem({
                type:SettingItem.TYPE_RADIO,
                title:"radio1",
                values:this.radioValues1
              }),
              new SettingItem({
                type:SettingItem.TYPE_RADIO,
                title:"radio2",
                values:this.radioValues2
              }),
              new SettingItem({
                type:SettingItem.TYPE_RANGE,
                title:"slider1",
                values: this.sliderValues1,
                selectedValue:""
              }),
              new SettingItem({
                type:SettingItem.TYPE_RANGE,
                title:"range2",
                values: this.sliderValues2,
                selectedValue:""
              })
        ]
    }

    static getDummyProducts(){
        return {results:this.products}
    }

    static getDummyMostSearched(){
        return this.mostSearched;
    }
}