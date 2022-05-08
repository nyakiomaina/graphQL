const Users = [
    {
        id:1,
        name: "Caroline Nyakio",
        email: "caroline@gmail.com",
        posts:[
            {
                id:1,
                title: "Introduction to web3.0",
                published: true,
                links: "https://docs.google.com/document/d/19pInTXqdvwO7Q7pEvEHcEiJgp3g3YRvDmS10m4KzxZo/edit?usp=sharing",
                author: 1
            },

            {
                id:2,
                title: "",
                published: false,
                link: "",
                author: 1
            },

            {
                id: 3,
                title: "",
                published: false,
                link: "",
                author: 1
            }
        ]
    },

    {
        id: 2,
        name:"Fikayo Adepoju",
        email:"fikayo@gmail.com",
        posts: [
            {
                id: 4,
                title: "Automatic Testing for GraphQL APIs",
                published: true,
                link: "https://thenewstack.io/automatic-testing-for-graphql-apis/",
                author: 2
        
            },
            {
                id: 5,
                title: "Introduction to GrapgQL",
                published: true,
                link: "https://thenewstack.io/introduction-to-graphql/",
                author: 2

            }
                
        ]
    }
];

module.exports = {
    Users
};