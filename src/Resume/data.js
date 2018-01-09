const data = {
    sections: [
        {
            title: "Resume Summary",
            iconCls: "icon icon-spinner10",
            items: [
                {
                    title: "",
                    content: `IT Professional with over <b>9 years</b> of experience. I am specializing on <b>Web Technologies</b>,
but have experience on all layers of application <b>from database to UI</b>.

Experienced with all stages of the development cycle for dynamic web projects.

I am seeking for a position that will continually <b>challenge my problem solving, analytics and management skills</b>.
`               },
            ],
        },
        {
            title: "Experience",
            iconCls: "icon  icon-briefcase",
            items: [
                {
                    title: "UI Team Lead/Delivery Manager",
                    period: {
                        startDate: new Date(2011, 8, 31),
                        endDate: new Date(2017, 9, 31),
                    },
                    content: `
iPreo <br/>

I gave a life to <a target="_blank" href="https://pcm.ipreo.com/Solutions/Solutions_iVAL">iVal module (https://pcm.ipreo.com/Solutions/Solutions_iVAL)</a> and grew it up.

I managed a distributed team <b>up to 30</b> developers and QA engineers.

Implemented rich user interfaces with <b>diversity of tools and frameworks</b>: Webpack, React Js, Redux, Jest, Web API, Asp.Net, Ext Js, Ext.Net, jQuery, Backbone, Bootstrap.

Supported high standards of code quality through all code base.

I built up a <b>framework</b> for valuation module.

I significantly increased performance and responsivness of a web application.

`               },
                {
                    title: "Senior Software engineer",
                    period: {
                        startDate: new Date(2010, 5, 30),
                        endDate: new Date(2011, 7, 31),
                    },
                    content: `
Studiocom <br/>

I developed a <b>flexible and fault-tolerant engine</b> for ETL packages.

Collaborated with stakeholders to make sure that the requirements and a product satisfy business needs.

Built up Windows services for monitoring and processing incoming feeds.

Supported database schema and built reports for promo campaigns.


`               },
                {
                    title: "Software Engineer",
                    period: {
                        startDate: new Date(2010, 5, 30),
                        endDate: new Date(2009, 7, 30),
                    },
                    content: `
Service Center <br/>

Development of rich user interface using Win Forms
Data model design
Data migration between service branches
Development of data access and business logic layers
Reports generation
Database design
Development of stored procedures

`               },
                {
                    title: "Software Engineer",
                    period: {
                        startDate: new Date(2011, 8, 1),
                        endDate: new Date(2011, 9, 30),
                    },
                    content: `
Invar <br/>

Developed engine for expert system which facilitates decision making. Practical applications could include medicine, transportation, repair facility, etc. I developed an architecture and business layer of the application.
`               },
            ],
        },
        {
            title: "Education",
            iconCls: "icon icon-library",
            items: [
                {
                    title: "Master of Mechanics, N.G. Chernyshevsky Saratov State University",
                    period: {
                        startDate: new Date(2004, 8, 1),
                        endDate: new Date(2009, 7, 31),
                    },
                    content: `


Graduated summa cum laude.

Graduated a course of international communication (English).



`               },
            ]
        },
    ],
    skills: [
        {
            title: "Skills",
            iconCls: "icon icon-tree",
            skills: [
                {
                    name: "Javascript",
                    grade: 5,
                },
                {
                    name: "Webpack, React JS, Redux, Jest",
                    grade: 4
                },      
                {
                    name: "HTML/CSS",
                    grade: 5
                },
                {
                    name: "jQuery",
                    grade: 5
                },
                {
                    name: "Ext Js",
                    grade: 4
                },
                {
                    name: ".Net/ASP.NET/C#",
                    grade: 4
                },
                {
                    name: "T-SQL",
                    grade: 3
                },
                {
                    name: "Agile/SCRUM",
                    grade: 5,
                },
            ]
        },
        {
            title: "Languages",
            iconCls: "icon icon-flag",
            skills: [
                {
                    name: "English",
                    grade: 4,
                    gradeDesc: "Upper Intermediate"
                },
                {
                    name: "Russian",
                    grade: 5,
                    gradeDesc: "Native"
                }
            ]
        }
    ]
};


export default data;