import MyIndex from "@/components/MyIndex.vue";
import MyNavbar from "@/components/MyNavbar.vue";
import MyUser from "@/components/MyUser.vue";
import AddMovies from "@/components/AddMovies.vue";
import MyMsg from "@/components/MyMsg.vue";
import MyMovie from "@/components/MyMovie.vue";




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
        path: '/',
        redirect: '/login'
    },
    {
        path: '/navbar',
        component: MyNavbar
    },
    {
        path: '/login',
        component: MyUser
    },
    {
        path: '/reviews',
        component: MyMsg
    },
    {
        path: '/movie',
        component: MyMovie
    }

]
