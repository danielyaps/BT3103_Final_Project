<template>
<div>
<Header></Header>
<body>
<div class="imageContainer"> 
    <img id="tutorImg">
    <p id="aboutUs">About Us</p> 
</div>

<div style="color: #C6C6C6; text-align: center">
    <p style="font-size: 50px; text-decoration: underline">Who We Are</p>
    <p style="font-size: 30px">Classy & Fabulous Tutors is a tuition matching platform allowing for centralised tuition sourcing.</p>
    <p> ... </p>
</div>
<div>
    <p style="text-align: center; color: #C6C6C6; font-size: 50px; text-decoration: underline">Our Students/Tutors Testimonials</p>
    <div style="position: absolute; left: 100px; width: 1200px">
        <img src="https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip"
            style="width: 120px; height: 120px; position: relative; float: left">
        <p style="font-size: 20px; position: relative; top: 20px; left: 20px; color: #C6C6C6"> 
        "Mr McDonald has helped my grades improve from a C5 to an A1 over the span of 3 months! 
            Thank you Classy & Fabulous tutors for connecting us!" <br>
            - Bean, 2021
        </p>
    </div>
    <div style="position: absolute; left: 100px; top: 1150px; width: 1200px">
        <img src=https://d21xzygesx9h0w.cloudfront.net/TUTOROO-connects-you-with-Shailly,-English-tutor-in-Singapore-5ec7c8032a1f3
            style="width: 120px; height: 120px; position: relative; float: left">
        <p style="font-size: 20px; position: relative; top: 20px; left: 20px; color: #C6C6C6"> 
            "With Classy & Fabulous tutors, I'm now able to earn a stable stream of income from tutoring.
            The platform is easy to use and helps me stay organised with the multiple tutoring sessions I have so that I can better manage my time.
            Thank you Classy & Fabulous tutors!" <br>
            - Shailly, 2021
        </p>
    </div>
</div>
</body>

</div>
</template>

<script>
import Header from './Header.vue'

 export default {
    components: {
        'Header': Header
    },
 }
</script>

<style>
    body {
        background: #2D2D2D
    }
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
        color: white;
    }
</style>
