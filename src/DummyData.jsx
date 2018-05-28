import SettingItem from './models/SettingItem.jsx'
import BannerImage from './assets/banner_basso@2x.png';

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

    static minChars=3;
    static rows=10;
    
    static bannerLarge='<html><head><title></title></head><body><p style="background-color:blue;height:25vh"><img alt="" src="https://picsum.photos/200/200?random" style="height:182px; width:200px" />BANNER</p></body></html>';
    // static bannerSmall='<html><head><title></title></head><body><p style="background-color:blue;height:8vh"><img alt="" src="https://picsum.photos/100/100?random" style="height:100px; width:100px" />BANNER</p></body></html>';
    static bannerSmall='<html><head><title></title></head><body style="height:8vh"><img alt="" src="'+BannerImage+'" style="height:100%; width:100%" /></body></html>';
    static sliderValues1 = {min:0,max:100};
    static sliderValues2 = {min:1,max:99};

    static cheboxValues1 = [{value:'roba1',resultsCount:"1"},{value:'roba2',resultsCount:"1"},{value:'roba3',resultsCount:"1"}];
    static cheboxValues2 = [{value:'roba21',resultsCount:"1"},{value:'roba22',resultsCount:"1"},{value:'roba23',resultsCount:"1"},{value:'roba24',resultsCount:"1"},{value:'roba25',resultsCount:"1"},{value:'roba26',resultsCount:"1"},{value:'roba27',resultsCount:"1"},{value:'roba28',resultsCount:"1"},{value:'roba29',resultsCount:"1"},{value:'roba20',resultsCount:"1"}];

    static radioValues1 = [{value:'radioitem11',resultsCount:"1"},{value:'radioitem12',resultsCount:"1"}];
    static radioValues2 = [{value:'radioitem21',resultsCount:"1"},{value:'radioitem22',resultsCount:"1"},{value:'radioitem23',resultsCount:"1"},{value:'radioitem24',resultsCount:"1"},{value:'radioitem25',resultsCount:"1"},{value:'radioitem26',resultsCount:"1"},{value:'radioitem27',resultsCount:"1"},{value:'radioitem28',resultsCount:"1"},{value:'radioitem29',resultsCount:"1"},{value:'radioitem20',resultsCount:"1"}];
    
    static gridValues1 = [{value:'griditem11',label:"griditem11"},{value:'griditem12',label:"griditem12"},{value:'griditem13',label:"griditem13"},{value:'griditem14',label:"griditem14"},{value:'griditem15',label:"griditem15"}];
    static gridValues2 = [{value:'griditem21',label:"griditem21"},{value:'griditem22',label:"griditem22"},{value:'griditem23',label:"griditem23"}];
    
    static maybeLooking = [];
    static mostSearched = [
        {
            'title':'categories',
            'values':['Men','Women','Accessories','Sale','VIP']
        },{
            'title':'most_searched',
            'values':['Borsone2','Borsa brutta2','Borsa bella2','Borsa vuota2','Borsa bruttissima2','Borsa inutilissimissima2']
        },{
            'title':'maybe_looking',
            'values':[]
        }
    ];

    // static desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?";

    static products = [
        {
            "sku":"000001",
            "name":"Lou Okuneva",
            "category":"category2",
            "image":"https://picsum.photos/300/300?random",
            "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "with_option":false,
            "type":SettingItem.TYPE_GROUP,
            "subProducts":[
                {
                    "name":"Lou Okuneva",
                    "sku":"000001a",
                    "category":"category2",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                },{
                    "sku":"000001b",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                },{
                    "sku":"000001c",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                },{
                    "sku":"000001d",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                },{
                    "sku":"000001e",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                },{
                    "sku":"000001f",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
                    "image":"https://picsum.photos/300/300?random",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                }
            ],
            "price":"€ 150,99"
        },{
            "sku":"000002",
            "name":"Ms. Yasmine Berge",
            "category":"category2",
            "image":"https://picsum.photos/300/300?random",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "with_option":false,
            "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
            "type":SettingItem.TYPE_CONFIGURABLE,
            "subProducts":[
                {
                    "sku":"000002a",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
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
                        "title":"cloth",
                        "value":"cotton",
                        "label":"cotton"
                    }],
                    "price":"€ 150,99"
                },{
                    "sku":"000002b",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
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
                        "title":"cloth",
                        "value":"silk",
                        "label":"silk"
                    }],
                    "price":"€ 150,99"
                },{
                    "sku":"000002c",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
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
                        "title":"cloth",
                        "value":"cotton",
                        "label":"cotton"
                    }],
                    "price":"€ 150,99"
                },{
                    "sku":"000002d",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
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
                        "title":"cloth",
                        "value":"cotton",
                        "label":"cotton"
                    }],
                    "price":"€ 150,99"
                }
            ],
            "price":"€ 100,00"
        },{
            "sku":"000003",
            "name":"Noble Olson",
            "category":"category2",
            "image":"https://picsum.photos/300/300?random",
            "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "with_option":true,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "sku":"000004",
            "name":"Dr. Magdalena Lemke",
            "category":"category2",
            "image":"https://picsum.photos/300/300?random",
            "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "with_option":false,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "sku":"000005",
            "name":"Wilhelm Hermiston V",
            "category":"category1",
            "image":"https://picsum.photos/300/300?random",
            "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "with_option":false,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "sku":"000006",
            "name":"Miss Carolina Kuhn",
            "category":"category2",
            "image":"https://picsum.photos/300/300?random",
            "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2.5,
            "with_option":false,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "sku":"000007",
            "name":"Dr. Adan Jones",
            "category":"category3",
            "image":"https://picsum.photos/300/300?random",
            "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":1,
            "with_option":false,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "sku":"000008",
            "name":"Hailey Russel",
            "category":"category1",
            "image":"https://picsum.photos/300/300?random",
            "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":5,
            "with_option":false,
            "type":SettingItem.TYPE_SIMPLE,
            "subProducts":[],
            "price":"€ 100,00"
        },{
            "sku":"000009",
            "name":"Korey Lesch",
            "category":"category3",
            "image":"https://picsum.photos/300/300?random",
            "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":2,
            "with_option":false,
            "type":SettingItem.TYPE_GROUP,
            "subProducts":[
                {
                    "sku":"000009a",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                },{
                    "sku":"000009b",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                },{
                    "sku":"000009c",
                    "name":"Lou Okuneva",
                    "category":"category2",
                    "image":"https://picsum.photos/300/300?random",
                    "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
                    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
                    "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
                    "rating":2,
                    "price":"€ 150,99"
                }
            ],
            "price":"€ 100,00"
        },{
            "sku":"000010",
            "name":"Warren Gaylord",
            "category":"category3",
            "image":"https://picsum.photos/300/300?random",
            "link":"http://wapone.dev56.ittweb.net/men/shirts/plaid-cotton-shirt-479.html",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis. Philosophi autem in suis lectulis plerumque moriuntur. Sapiens autem semper beatus est et est aliquando in dolore; Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. Incommoda autem et commoda-ita enim estmata et dustmata appello-communia esse voluerunt, paria noluerunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Inde igitur, inquit, ordiendum est. Quid, si etiam iucunda memoria est praeteritorum malorum?",
            "short_desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui est in parvis malis.",
            "rating":3,
            "with_option":false,
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
              }),
              new SettingItem({
                type:SettingItem.TYPE_GRID,
                title:"grid1",
                values: this.gridValues1,
                selectedValue:""
              }),
              new SettingItem({
                type:SettingItem.TYPE_GRID,
                title:"grid2",
                values: this.gridValues2,
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

    static getMinChars(){
        return this.minChars;
    }

    static getRows(){
        return this.rows;
    }
}