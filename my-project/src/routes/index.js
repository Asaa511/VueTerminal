import MyIndex from "@/components/MyIndex.vue";
import MyNavbar from "@/components/MyNavbar.vue";
import MyUser from "@/components/MyUser.vue";
import AddMovies from "@/components/AddMovies.vue";



export default [
    {
        path: '/index',
        component: MyIndex,
        children: [
            {
                path: 'add-movies',
                component: AddMovies,
                name: 'AddMovies'
            }
        ]
    },
    {
        path: '/navbar',
        component: MyNavbar
    },
    {
        path: '/login',
        component: MyUser
    },

]
