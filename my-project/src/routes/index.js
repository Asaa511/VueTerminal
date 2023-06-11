import MyIndex from "@/components/MyIndex.vue";
import MyNavbar from "@/components/MyNavbar.vue";
import MyUser from "@/components/MyUser.vue";

// import MyUser from "@/components/MyUser.vue";
// import MyCourse from "@/components/MyCourse.vue";
// import JsCourse from "@/components/JsCourse.vue";
// import HtmlCourse from "@/components/HtmlCourse.vue";
// import VueCourse from "@/components/VueCourse.vue";
// import JavaCourse from "@/components/JavaCourse.vue";

export default [
    {
        path: '/index',
        component: MyIndex
    },
    {
        path: '/navbar',
        component: MyNavbar
    },
    {
        path: '/login',
        component: MyUser
    }

]
