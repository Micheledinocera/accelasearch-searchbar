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

    static bannerLarge='<html><head><title></title></head><body><p style="background-color:blue;height:25vh"><img alt="" src="https://picsum.photos/200/200?random" style="height:182px; width:200px" />BANNER</p></body></html>';
    static bannerSmall='<html><head><title></title></head><body><p style="background-color:blue;height:8vh"><img alt="" src="https://picsum.photos/100/100?random" style="height:100px; width:100px" />BANNER</p></body></html>';
    static sliderValues1 = {min:0,max:100};
    static sliderValues2 = {min:1,max:99};

    static cheboxValues1 = [{value:'roba1',resultsCount:"1"},{value:'roba2',resultsCount:"1"},{value:'roba3',resultsCount:"1"}];
    static cheboxValues2 = [{value:'roba21',resultsCount:"1"},{value:'roba22',resultsCount:"1"},{value:'roba23',resultsCount:"1"},{value:'roba24',resultsCount:"1"},{value:'roba25',resultsCount:"1"},{value:'roba26',resultsCount:"1"},{value:'roba27',resultsCount:"1"},{value:'roba28',resultsCount:"1"},{value:'roba29',resultsCount:"1"},{value:'roba20',resultsCount:"1"}];

    static radioValues1 = [{value:'radioitem11',resultsCount:"1"},{value:'radioitem12',resultsCount:"1"}];
    static radioValues2 = [{value:'radioitem21',resultsCount:"1"},{value:'radioitem22',resultsCount:"1"},{value:'radioitem23',resultsCount:"1"},{value:'radioitem24',resultsCount:"1"},{value:'radioitem25',resultsCount:"1"},{value:'radioitem26',resultsCount:"1"},{value:'radioitem27',resultsCount:"1"},{value:'radioitem28',resultsCount:"1"},{value:'radioitem29',resultsCount:"1"},{value:'radioitem20',resultsCount:"1"}];
    
    static maybeLooking = ['Borsone','Borsa brutta','Borsa bella','Borsa vuota','Borsa bruttissima','Borsa inutilissimissima'];
    static mostSearched = [
        {
            'title':'Categories',
            'values':['Borsone','Borsa brutta','Borsa bella','Borsa vuota','Borsa bruttissima','Borsa inutilissimissima']
        },{
            'title':'Most Searched',
            'values':['Borsone2','Borsa brutta2','Borsa bella2','Borsa vuota2','Borsa bruttissima2','Borsa inutilissimissima2']
        }
    ];

    // static desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?";

    static products = [
        {
            "name":"Lou Okuneva",
            "category":"category2",
            "image":"https://picsum.photos/300/300?random",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "type":SettingItem.TYPE_GROUP,
            "subProducts":[
                {
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                },{
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                },{
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                }
            ],
            "price":"€ 150,99"
        },{
            "name":"Ms. Yasmine Berge",
            "category":"category2",
            "image":"https://picsum.photos/300/300?random",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "type":SettingItem.TYPE_CONFIGURABLE,
            "subProducts":[
                {
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "configuration":[{
                        "type":"color",
                        "title":"color",
                        "value":"blue",
                        "label":"#2578fc"
                    },{
                        "type":"other",
                        "title":"size",
                        "value":"XL",
                        "label":"XL",
                    },{
                        "type":"other",
                        "title":"Configuration Title",
                        "value":"value1",
                        "label":"label1"
                    }],
                    "price":"€ 150,99"
                },{
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "configuration":[{
                        "type":"color",
                        "title":"color",
                        "value":"red",
                        "label":"#fc2525"
                    },{
                        "type":"other",
                        "title":"size",
                        "value":"XL",
                        "label":"XL"
                    },{
                        "type":"other",
                        "title":"Configuration Title",
                        "value":"value2",
                        "label":"label2"
                    }],
                    "price":"€ 150,99"
                },{
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "configuration":[{
                        "type":"color",
                        "title":"color",
                        "value":"blue",
                        "label":"#2578fc"
                    },{
                        "type":"other",
                        "title":"size",
                        "value":"L",
                        "label":"L"
                    },{
                        "type":"other",
                        "title":"Configuration Title",
                        "value":"value1",
                        "label":"label1"
                    }],
                    "price":"€ 150,99"
                },{
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "configuration":[{
                        "type":"color",
                        "title":"color",
                        "value":"red",
                        "label":"#fc2525"
                    },{
                        "type":"other",
                        "title":"size",
                        "value":"XL",
                        "label":"XL"
                    },{
                        "type":"other",
                        "title":"Configuration Title",
                        "value":"value1",
                        "label":"label1"
                    }],
                    "price":"€ 150,99"
                }
            ],
            "price":"€ 100,00"
        },{
            "name":"Noble Olson",
            "category":"category2",
            "image":"https://picsum.photos/300/300?random",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "name":"Dr. Magdalena Lemke",
            "category":"category2",
            "image":"https://picsum.photos/300/300?random",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "name":"Wilhelm Hermiston V",
            "category":"category1",
            "image":"https://picsum.photos/300/300?random",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "name":"Miss Carolina Kuhn",
            "category":"category2",
            "image":"https://picsum.photos/300/300?random",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2.5,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "name":"Dr. Adan Jones",
            "category":"category3",
            "image":"https://picsum.photos/300/300?random",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":1,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "name":"Hailey Russel",
            "category":"category1",
            "image":"https://picsum.photos/300/300?random",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":5,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "name":"Korey Lesch",
            "category":"category3",
            "image":"https://picsum.photos/300/300?random",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "type":SettingItem.TYPE_GROUP,
            "subProducts":[
                {
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                },{
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                },{
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                }
            ],
            "price":"€ 100,00"
        },{
            "name":"Warren Gaylord",
            "category":"category3",
            "image":"https://picsum.photos/300/300?random",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":3,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
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
                type:SettingItem.TYPE_RATING,
                title:"rating1",
                selectedValue:0
              }),
              new SettingItem({
                type:SettingItem.TYPE_RATING,
                title:"rating2",
                selectedValue:0
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

    static getDummyMaybeLooking(){
        return this.maybeLooking;
    }

    static getBanner(){
        return this.bannerSmall;
    }
}