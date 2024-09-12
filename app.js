const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            title: 'This is the title',
            age: 20,    
            url: "https://www.google.co.in/",
            books:[
                {title: "first title", age:20, img: "assets/firstimage.jpg", isFav: true},
                {title: "second title", age:30, img: "assets/secondimage.jpg", isFav: false},
                {title: "third title", age:50, img: "assets/thirdimage.png", isFav: true},
            ]
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            // console.log("event");
            console.log(e,e.type);
            if(data){
                console.log(data);
            }
        },
        computed:{
            filteredBooks(){
                return this.books.filter((book) => book.isFav)
            }
        }
    }
});

app.mount("#app")