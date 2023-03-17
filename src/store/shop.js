export default {
    state:{
        shopList:[
            {
                id:1,
                title:'Nike Red',
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga magnam iste iure corporis, eos nam quae amet quis deleniti, eum possimus, dolor rem aperiam nobis odit reprehenderit itaque error voluptate.',
                img:require('../assets/img/1.jpg'),
                gallery:[
                    {name:'Nike boots first', img:require('../assets/img/1.jpg'),},
                    {name:'Nike boots second', img:require('../assets/img/2.jpg'),},
                    {name:'Nike boots third', img:require('../assets/img/3.jpg'),}
                ]
            },
            {
                id:2,
                title:'Nike Default',
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga magnam iste iure corporis, eos nam quae amet quis deleniti, eum possimus, dolor rem aperiam nobis odit reprehenderit itaque error voluptate.',
                img:require('../assets/img/4.jpg'),
                gallery:[
                    {name:'Nike boots first', img:require('../assets/img/4.jpg'),},
                    {name:'Nike boots second', img:require('../assets/img/5.jpg'),},
                    {name:'Nike boots third', img:require('../assets/img/6.jpg'),}
                ]
            },
            {
                id:3,
                title:'Nike Air',
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga magnam iste iure corporis, eos nam quae amet quis deleniti, eum possimus, dolor rem aperiam nobis odit reprehenderit itaque error voluptate.',
                img:require('../assets/img/7.jpg'),
                gallery:[
                    {name:'Nike boots first', img:require('../assets/img/7.jpg'),},
                    {name:'Nike boots second', img:require('../assets/img/8.jpg'),},
                    {name:'Nike boots third', img:require('../assets/img/9.jpg'),}
                ]
            },
            {
                id:4,
                title:'Nike Street',
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga magnam iste iure corporis, eos nam quae amet quis deleniti, eum possimus, dolor rem aperiam nobis odit reprehenderit itaque error voluptate.',
                img:require('../assets/img/10.jpg'),
                gallery:[
                    {name:'Nike boots first', img:require('../assets/img/10.jpg'),},
                    {name:'Nike boots second', img:require('../assets/img/11.jpg'),},
                    {name:'Nike boots third', img:require('../assets/img/12.jpg'),}
                ]
            },
        ]
    },
    mutations:{},
    actions:{},
    getters:{
        getShopList (state) {
            return state.shopList
        },
        getProduct: (state) =>  (id) => {
            return state.shopList.find(product =>  product.id === id)
        }
    },
}