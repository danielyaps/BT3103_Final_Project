<template>
    <div>
        <Header v-bind:color="color"></Header>
        <p style="font-weight: bold;">CLASSY AND FABULOUS TUTORS</p>
        
        <div class="imageContainer"> 
            <img id="tutorImg">
            <p id="aboutUs">About Us</p> 
        </div>
        
        <p style="font-weight: bold;">Who We Are?</p>
        <p style="font-size: 30px; color: black;">Classy & Fabulous Tutors is a tuition matching platform allowing for centralised tuition sourcing.</p>
        
        <br>
        <br>

        <p style="color: #388087; font-weight: bold;">Our Students/Tutors Testimonials..</p>
        <ul>
            <li><img src="https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip">
                "Mr McDonald has helped my grades improve from a C5 to an A1 over the span of 3 months! 
                Thank you Classy & Fabulous tutors for connecting us!"
            </li> 
            Bean, 2021 <br><br>
            <li><img src=https://d21xzygesx9h0w.cloudfront.net/TUTOROO-connects-you-with-Shailly,-English-tutor-in-Singapore-5ec7c8032a1f3>
                "With Classy & Fabulous tutors, I'm now able to earn a stable stream of income from tutoring.
                The platform is easy to use and helps me stay organised with the multiple tutoring sessions I have so that I can better manage my time.
                Thank you Classy & Fabulous tutors!"
            </li>
            Shailly, 2021
        </ul>

        <br>
        <br>
        <DashboardHome></DashboardHome>
    </div>
</template>

<script>
import Header from './Header.vue'
import DashboardHome from './DashboardHome.vue'
 export default {
    components: {
        'Header': Header,
        'DashboardHome': DashboardHome
    },
    data() {
        return {
            color: "#388087",
        };
    },
 }
</script>

<style scoped>
    .imageContainer {
        position: relative;
        text-align: center;
    }
    #tutorImg {
        background-image: url(https://cdn.kinsights.com/cache/8c/3e/8c3ebc224ce7387340d1399b7f22fbf1.jpg);
        opacity: 0.5;
        width: 100%;
        height: 500px;
        background-size: 100%;
    }
    #aboutUs {
        font-size: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #388087;
    }
    div {
        text-align: center;
        font-size: 50px; 
        text-align: center; 
        color: #388087;
    }
    ul {
        flex-wrap: wrap;
        list-style-type: none;
        text-align: right;
        width: 80%;
        display: table;
        margin: 0 auto;
        font-size: 24px;
        color:black;
        font-weight: bold;
    }
    li {
        flex-grow:1;
        display: flex;
        text-align: justify;
        font-size: 30px;
        color:black;
        font-weight: normal;
    }
    img {
        width: 140px; 
        height: 140px; 
    }

    DashboardHome {
        text-align: center;
    }

</style>
