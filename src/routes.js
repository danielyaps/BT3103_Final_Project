import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import HomeTutor from './components/HomeTutor'


export default [
    { path: '/', name: 'home', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/homeTutor', component: HomeTutor}
]