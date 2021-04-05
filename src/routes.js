import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import ContactUs from './components/ContactUs'
import FAQ from './components/FAQ'
import HomeTutor from './components/HomeTutor'
import ChatTutor from './components/ChatTutor'
import HomeStudent from './components/HomeStudent'
import TutorDetails from './components/TutorDetails'
import Profile from './components/Profile'
import ApplyNow from './components/ApplyNow'
import LeaveReview from './components/LeaveReview'


export default [
    { path: '/', name: 'home', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', name:'signup', component: SignUp },
    { path: '/contactus', component: ContactUs},
    { path: '/faq', component: FAQ},
    { path: '/homeTutor', component: HomeTutor},
    { path: '/chatTutor', component: ChatTutor},
    { path: '/homeStudent', component: HomeStudent},
    { name: 'tutorDetails', path: '/tutorDetails', component: TutorDetails},
    { path: '/profile/:uID', component: Profile, props:true},
    { path: '/leaveReview', component: LeaveReview}
]