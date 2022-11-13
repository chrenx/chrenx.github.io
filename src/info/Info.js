import self from "../img/self.png"
import instaPic from "../img/instagram-clone.png"
import rubikon from "../img/Rubikon.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

// export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let colors = ["rgb(224,194,184)", "rgb(168,168,197)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */



export const info = {
    firstName: "Haocheng(Leo)",
    lastName: "Ren",
    initials: "chrenx",
    position: "a student and a Software Development Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        // {
        //     emoji: '☕',
        //     text: 'fueled by coffee'
        // },
        {
            emoji: '🌎',
            text: 'currently based in the US'
        },
        {
            emoji: "💼",
            text: "Research Assistant @ Human AI Lab & Lifelong Learning Lab @ UMich"
        },
        {
            emoji: "📧",
            text: "chrenx@umich.edu"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook'
        // },
        {
            link: "https://www.instagram.com/leorenhc/",
            icon: 'fa fa-instagram'
        },
        // {
        //     link: "https://github.com",
        //     icon: "fa fa-github"
        // },
        {
            link: "https://www.linkedin.com/in/haocheng-leo-ren-4b551a22a/",
            icon: "fa fa-linkedin",
            color: "#0099CC"
        }
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter"
        // }
    ],
    bio: "Hello! I'm Leo. I am currently working at Human AI Lab and Life Long Learning Lab led by Prof. Anhong Guo " +
         "and Prof. Xu Wang respectively @ University of Michigan Ann Arbor(UMich). I studied Computer Science and received my Bachelor degree at UMich. My research interest focuses on Computer Vision, Human-Computer Interaction, Augmented Reality.",
    skills:
        {
            proficientWith: ['C/C++', 'Python', 'R', 'JavaScript', 'MatLab', 'ReactJS', 'git', 'github', 'Linux', 'html5', 'css3', 'SQLite', 'OpenCV', 'Robot Operating System(ROS)']
            // exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    education: [
        {
            school: 'University of Michigan, Ann Arbor',
            degree: 'B.Sc.',
            major: 'Computer Science',
            year: 2022
        },
        {
            school: 'University of Washington, Seattle',
            degree: 'Transfer Out:',
            major: 'studied Math, Biz, CS',
            year: 2020
        }
    ],
    hobbies: [
        {
            label: 'GYM body builder',
            emoji: '💪'
        },
        {
            label: 'Gourmet',
            emoji: '🍜'
        },
        {
            label: 'Basketball',
            emoji: '🏀'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🍳'
        },
        {
            label: 'Travel',
            emoji: '🏔️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Instagram Clone",
            live: "https://youtu.be/p3tauHGvMbM", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/chrenx/instagram-clone", // this should be a link to the **repository** of the project, where the code is hosted.
            image: instaPic,
            description: "Thie is a web project that clones Instagram."
        },
        {
            title: "Rubikon: A Multimodal Tutor for 3D Physical Task Learning",
            live: "https://www.youtube.com/watch?v=ynQstKN1RXA", 
            source: "None",
            image: rubikon,
            description: "This project aims at improve users' self learning experience on 3D physical tasks like surgery. Rubik's Cube is one instance. Still in the process to the higher level..."
        }
        // {
        //     title: "Project 2",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock2
        // },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}