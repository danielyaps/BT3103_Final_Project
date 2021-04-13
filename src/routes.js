import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import ContactUs from './components/ContactUs'
import FAQ from './components/FAQ'
import HomeTutor from './components/HomeTutor'
import Chat from './components/Chat'
import HomeStudent from './components/HomeStudent'
import TutorDetails from './components/TutorDetails'
import Profile from './components/Profile'
import ApplyNow from './components/ApplyNow'
import LeaveReview from './components/LeaveReview'
import Schedule from './components/Schedule'
import StudentApp from './components/StudentApp'
import Reviews from './components/Reviews'
import DashboardTeacher from './components/DashboardTeacher'
import ViewChats from './components/ViewChats'


export default [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name:'login', component: Login },
    { path: '/signup', name:'signup', component: SignUp },
    { path: '/contactus', component: ContactUs},
    { path: '/faq', component: FAQ},
    { path: '/homeTutor/:uid', name:'homeTutor', component: HomeTutor, props:true},
    { path: '/chat/:uid', name:'chat', component: Chat, props:true},
    { path: '/homeStudent/:uid', name:'homeStudent', component: HomeStudent, props:true},
    { path: '/tutorDetails/:uid', name: 'tutorDetails', component: TutorDetails, props:true},
    { path: '/profile/:uid', name:'profile', component: Profile, props:true},
    { name: 'schedule', path: '/schedule/:uid', component: Schedule, props: true},
    { name: 'applyNow', path: '/applyNow/:uid', component: ApplyNow},
    { name: 'studentApp', path: '/studentapp/:uid', component: StudentApp},
    { path: '/leaveReview/:uid', name: 'leaveReview', component: LeaveReview, props:true},
    { path: '/reviews/:uid', name: 'reviews', component: Reviews, props:true},
    { path: '/analytics/:uid', name: 'dashboardtutor', component: DashboardTeacher, props:true},
    { path: '/viewChats/:uid', name: 'viewChats', component: ViewChats, props: true }
]


