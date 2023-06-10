import MyIndex from "@/components/MyIndex.vue";
import MyUser from "@/components/MyUser.vue";
import MyCourse from "@/components/MyCourse.vue";
// import JsCourse from "@/components/JsCourse.vue";
// import HtmlCourse from "@/components/HtmlCourse.vue";
// import VueCourse from "@/components/VueCourse.vue";
// import JavaCourse from "@/components/JavaCourse.vue";

export default [
    {
        path:'/index',
        component:MyIndex
    },
    {
        path:'/course',
        component:MyCourse,
        children:[

        ]
    },
    {
        path:'/user',
        component:MyUser
    },
]
