var quizzes = [
    {
        legend: "Who is your favorite celebrity?",
        choices:
        [
            {
            pic: "https://www.theparisreview.org/blog/wp-content/uploads/2018/12/hepburn_wide-ad3a95a756ec0f9411e6a555e76d1b743966724f-s800-c85.jpg",
            label: "Audrey Hephurn"
            },
            {
            pic: "https://i.pinimg.com/originals/c7/b8/7b/c7b87be61859d579864f2d8a917705dd.jpg",
            label: "Jennifer Aniston"
            },
            {
            pic: "https://www.telegraph.co.uk/content/dam/tv/2017/06/07/TELEMMGLPICT000129985437_trans_NvBQzQNjv4BqdODRziddS8JXpVz-XfUVR4AUi_eAXJmjTzXoJ-uDM54.jpeg",
            label: "James Corden"
            },
            {
            pic: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/iro3.jpeg?jiE.FKnOyxwB21T3RYAYvWBueUSuc0ch",
            label: "Robert Downey Jr."
            }
        ] 
    },
    {
    legend: "Which is your spirit animal?",
    choices:
    [
        {
        pic: "https://www.thesprucepets.com/thmb/KYaXBSM013GnZ2jEZJnX4a9oIsU=/3865x2174/smart/filters:no_upscale()/horse-galloping-in-grass-688899769-587673275f9b584db3a44cdf.jpg",
        label: "Horses"
        },
        {
        pic: "https://i.pinimg.com/originals/23/37/b4/2337b4174601c629e55e767b2d3bec7c.jpg",
        label: "Dogs"
        },
        {
        pic: "https://media.swncdn.com/via/9299-pixabaycastleguard.jpg",
        label: "Bunnies"
        },
        {
        pic: "https://i.pinimg.com/originals/84/67/37/8467371b7319db04967a39d215402b64.jpg",
        label: "Chickens"
        }
    ] 
    },
    {
    legend: "Where do you want to travel to?",
    choices:
    [
    {
        pic: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/11/10/singapore.jpg",
        label: "Singapore"
    },
    {
        pic: "https://i2-prod.irishmirror.ie/lifestyle/family/article9986871.ece/ALTERNATES/s615b/paris.jpg",
        label: "Paris"
    },
    {
        pic: "https://portal.ehawaii.gov/assets/webp/page/government/counties/honolulu.webp",
        label: "Hawaii"
    },
    {
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rgfNmOtWyH15U6YsI-Y4S8uKOo3DM3dzlg&usqp=CAU&ec=45761791",
        label: "New York"
    }
    ]
    },
    {
    legend: "What is your favorite food",
    choices:
    [
    {
        pic: "https://fox59.com/wp-content/uploads/sites/21/2020/08/hypatia-h_10056516fce506dfd088799e56d7e6b8-h_dba20f456e46bc606390f8333a09e4c9.jpg?w=2560&h=1440&crop=1",
        label: "Pizza"
    }, 
    {
        pic: "https://media.istockphoto.com/photos/set-of-sushi-and-rolls-with-salmon-and-tuna-avocado-california-maki-picture-id1066110176?k=6&m=1066110176&s=612x612&w=0&h=aD-74pTAYfFR5wQa_jGdaqa8Dzjett7Sz2vfAniSKPM=",
        label: "Sushi"
    },
    {
        pic: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/blackened-fish-tacos-f8fdce33.jpg",
        label: "Tacos"
    },
    {
        pic: "https://www.oregonlive.com/resizer/u4qcQfoYe2vS1j02KLRgy8enAoo=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.oregonlive.com/home/olive-media/width2048/img/ent_impact_dining/photo/phooregonjpg-4ec3a71546936a27.jpg",
        label: "Pho"
    }
    ]
    },
    {
        legend: "What do you do in your free time?",
        choices:
        [
        {
        pic: "https://miro.medium.com/max/1000/0*2SxEjuT3_ptvfDTT",
        label: "Read"
        },
        {
        pic: "https://miro.medium.com/max/10266/1*SEwwBd2PVox4I0yTPpJpHA@2x.jpeg",
        label: "TV"
        },
        {
        pic: "https://www.gannett-cdn.com/presto/2018/09/05/USAT/c95a0f2e-2c7a-48ca-bd5d-6de52229674a-GettyImages-862317986.jpg",
        label: "Exercise"
        },
        {
        pic: "https://www.gra.world/wp-content/uploads/2019/12/Thanksgiving.jpg",
        label: "Shopping"
        }
        ]
    }
]

function createQuiz() {
    var question, questions;

    questions = null;
    quizzes.forEach(function (item, index1) {
        question = null;
        question.add("<legend>" + item.legend + "</legend>");
        item.choices.forEach(function (option, index2) {
            question.add('<label><input type="radio" name="q' + index1 + '" value="' + index2 + 'id="id' + index1 + index2 + '/><img src="' + option.pic + '"><div class="button">' + option.label + '</div> </label>')
        })
        questions.add('<fieldset></fieldset>').apppend(question)
    });

    $("quiz").append(questions)
    
}