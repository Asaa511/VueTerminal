import MyIndex from "@/components/MyIndex.vue";
import MyNavbar from "@/components/MyNavbar.vue";
import MyUser from "@/components/MyUser.vue";
import AddMovies from "@/components/AddMovies.vue";
import MyMsg from "@/components/MyMsg.vue";
import MyMovie from "@/components/MyMovie.vue";
import LogInUser from "@/components/LogInUser.vue";
import SignUpUser from "@/components/SignUpUser.vue";


import BxJg  from "@/components/movie/BxJg.vue";
import CmDsj from "@/components/movie/CmDsj.vue";
import JsZs from "@/components/movie/JsZs.vue";
import SdyJq from "@/components/movie/SdyJq.vue";
import SsDtl from "@/components/movie/SsDtl.vue";
import XJ from "@/components/movie/XJ.vue";
import XmHyj from "@/components/movie/XmHyj.vue";
import AgZz from "@/components/movie/AgZz.vue";

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
    },
    {
        path: '/LoginUser',
        component: LogInUser
    },
    {
        path: '/SignUpUser',
        component: SignUpUser
    },

    {
        path: '/bxjg',
        component: BxJg
    },
    {
        path: '/cmdsj',
        component: CmDsj
    },
    {
        path: '/jszs',
        component: JsZs
    },
    {
        path: '/sdyjq',
        component: SdyJq
    },
    {
        path: '/ssbtl',
        component: SsDtl
    },
    {
        path: '/xj',
        component: XJ
    },
    {
        path: '/xmhyj',
        component: XmHyj
    },
    {
        path: '/agzz',
        component: AgZz
    },

]
