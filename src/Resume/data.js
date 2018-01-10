const data = {
    sections: [
        {
            title: "Resume Summary",
            iconCls: "icon icon-spinner10",
            items: [
                {
                    title: "",
                    content: `IT Professional with over 9 years of direct experience in several enterprise solutions. Primarily I specialize on <b>Web Technologies</b>,
and also have experience on all layers of application <b>from database to UI</b>.

Experienced with all stages of the development cycle for dynamic web projects.

I am strong <b>team player with high dedication and leadership</b>.

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

I gave a life to <a target="_blank" href="https://pcm.ipreo.com/Solutions/Solutions_iVAL">iVal module (https://pcm.ipreo.com/Solutions/Solutions_iVAL)</a> and grew it up as a stable solution with highly optimized representation of the designer vision. The business area of the company is connected with private equity.

I gathered requirements from product owners and managed a distributed team up to 30 developers and QA engineers. As a key contact person I provided transparency regarding project expectations and progress both to team members and product owners.

Implemented rich user interfaces with <b>diversity of tools and frameworks</b>: Webpack, React Js, Redux, Jest, Web API, Asp.Net, Ext Js, Ext.Net, jQuery, Backbone, Bootstrap.

Supported high standards of code quality through all code base.

I built up a <b>framework</b> for private capital valuation module.

I significantly increased performance and responsiveness of a web application.

`               },
                {
                    title: "Senior Full Stack Engineer",
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
                    title: "Full Stack Engineer",
                    period: {
                        startDate: new Date(2010, 5, 30),
                        endDate: new Date(2009, 7, 30),
                    },
                    content: `
Service Center <br/>

Existing application was migrated to Win Forms + MySql.

WCF services were implemented, that were consumed by desktop and web applications.

I  developed a RUI using Win Forms. 

Support of different types of databases was added.

I solved a problem of synchronization between service centers.

Built up a reporting engine that is used as a platform for high management performance dashboards.

`               },
                {
                    title: "Full Stack Engineer",
                    period: {
                        startDate: new Date(2011, 8, 1),
                        endDate: new Date(2008, 9, 30),
                    },
                    content: `
Invar <br/>

Developed engine for expert system which facilitates decision making. Practical applications include medicine, transportation, repair facility, etc.
I designed an architecture and calculation engine for the solution.
`               },
            ],
        },
        {
            title: "Education",
            iconCls: "icon icon-library",
            items: [
                {
                    title: "Master of Science in Mechanical Engineering, N.G. Chernyshevsky Saratov State University",
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
            ]
        },
        {
            title: "Soft Skills",
            iconCls: "icon icon-user-tie",
            skills: [
                {
                    name: "Agile/SCRUM/Lean",
                    grade: 5,
                },
                {
                    name: "Communication",
                    grade: 4
                },
                {
                    name: "Leadership",
                    grade: 5
                },
                {
                    name: "Team work",
                    grade: 5
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