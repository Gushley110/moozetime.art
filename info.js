let info = {
  name: "Gustavo García",
  logo_name: "GustavoGS",
  flat_picture: require("./src/assets/profile_circle.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "My name is Gustavo García Sánchez and I'm a Python Backend Developer with interest in Software Development, Data Analysis and Security - and looking for exciting job opportunities in these fields.<br><br> I have worked for companies in different areas, from Health, Marketing up to Banking, each which required a different skillset that i enjoyed to learn and eager to learn about many others.<br><br>I'm comfortable working with different stacks of technologies but my current stack is FastAPI, VueJS, Postgres, AWS.<br><br> Linux for Development, macOS for productivity, Windows for Gaming.",
  links: {
    linkedin: "https://www.linkedin.com/in/ggs220996/",
    github: "https://github.com/Gushley110",
    resume: "https://ggs-public-files.s3.us-east-2.amazonaws.com/Gustavo_GarciaSanchez_Resume.pdf"
  },
  education: [
    {
      name: "IPN ESCOM",
      school_location: "México",
      date: "Aug, 2014 - Dec, 2019",
      degree: "Bachelor in Computer Engineering",
      skills: [
        "Software Engineering",
        "Algorithms",
        "Image Analysis",
        "Pattern Recognition",
        "Cryptography"
      ]
    },
    {
      name: "IPN CECyT 9 \"Juan de Dios Bátiz\"",
      school_location: "México",
      date: "Aug, 2011 - July, 2014",
      degree: "Bachelor in Computer and Communication",
      skills: [
        "Java",
        "OOP",
        "Data Structures",
        "Mobile",
        "TDD",
        "Software Engineering"
      ]
    }
  ],
  experience: [
    {
      name: "Backend Developer",
      company: "improvado.io",
      place: "San Francisco, California (Remote)",
      date: "Aug, 2022 - Present",
      description: [
          "Build no-code tools for marketing reporting and campaign monitoring.",
          "Integrate 3rd party APIs to fetch data with different authentication mechanisms.",
          "Process big quantities of data and store them into different databases.",
          "Analyze and develop logic for new reports.",
          "Maintain old logic of reports adding new metrics and fields.",
          "Create unit tests to verify data integrity mocking 3rd party APIs as well as testing added features",
      ],
      skills: ["Python", "Django", "PostgreSQL", "Docker", "AWS", "Github Actions", "TDD" ]
    },
    {
      name: "Backend Developer",
      company: "Flink",
      place: "Mexico City, México (Remote)",
      date: "Aug, 2021 - Aug, 2022",
      description: [
          "Develop new features in the existing DRF codebase.",
          "Create and run unit tests for DRF legacy code with pytest.",
          "Maintain code and fix incidents reported by the QA team.",
          "Develop microservices with FastAPI that connect to existing codebase, consuming 3rd party APIs, and saving data to PostgreSQL databases.",
          "Containerized microservices with Docker and Docker compose.",
          "Created pipelines to deploy into EC2 and Lambda with Gitlab CI/CD.",
      ],
      skills: ["Python", "Django", "FastAPI", "AWS", "Gitlab CI/CD"]
    },
    {
      name: "QA Lead for Data Analysis Dept",
      company: "Tata Consultancy Services",
      place: "Guadalajara, México (Remote)",
      date: "Feb, 2021 - Jul, 2021",
      description:[
          "Create python scripts to read and validate data from Excel files.",
          "Help on development of automated testing scripts for ETL jobs.",
          "Execute complex SQL queries to extract records from different databases to CSV files for further analysis.",
          "Worked primarily with banking data assets and followed successfully all security standards.",
          "Followed quality standards and procedures to minimize errors and maximize customer satisfaction.",
          "Rejected defective products and approved correct products.",
          "Gave quality standard training for new and existing staff.",
      ],
      skills: ["Python", "Pytest", "Pandas", "qTest", "Raw SQL"]
    },
    {
      name: "Data Engineer Jr",
      company: "Tata Consultancy Services",
      place: "Guadalajara, México (Remote)",
      date: "Aug, 2020 - Feb, 2021",
      description:[
          "Worked with AWS S3, and Glue to perform ETL jobs to Amazon Redshift as target.",
          "Analyzed complex data and identified anomalies, trends and risks to provide useful insights to improve internal controls.",
          "Developed, implemented, supported and maintained data analytics protocols, standards and documentation.",
          "Collaborated with Development team on ETL tasks, maintaining data integrity and verifying pipeline stability.",
      ],
      skills: ["Python", "S3", "Glue", "Redshift", "Athena"]
    },
    {
      name: "IT Consultant",
      company: "ABC Medical Center",
      place: "Mexico City, México",
      date: "Jan, 2019 - Sep, 2019",
      description:[
          "Verified implementation and compliance of ITIL practices.",
          "ITIL admin in ServiceNow",
          "Member of Change Advisory Board, helped reviewing and contributing ideas to business changes.",
          "Monitor Incidents and Changes with ServiceNow.",
          "Extract data from ServiceNow as excel files to perform analytics with python scripts.",
          "Created JS scripts to plot graphs to visualize data and generate weekly reports on performance.",
      ],
      skills: ["Javascript", "ServiceNow", "Python", "Excel"]
    },
    {
      name: "Web Developer",
      company: "Punto Zip",
      place: "Mexico City, México",
      date: "Nov, 2014 - Jan, 2016",
      description: [
        "Created user interfaces converting mockups into web with HTML,JS and CSS for static and e-commerce pages.",
        "Performed requirements analysis to match clients expectations, determining organizational, budget and design goals.",
        "Built different page templates for Wordpress.",
        "Queried data from MySQL with PHP to create CRUD operations for e-commerce inventory pages.",
        "Developed login pages to authenticate user via OAuth",
        "Conducted testing and review of website design for responsiveness, clarity and effectiveness.",
      ]
    }
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "Javascript",
        "TypeScript",
        "PHP",
        "SQL",
        "NoSQL",
      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Numpy",
        "Pandas",
        "OpenCV",
        "SciKit",
        "Pillow"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Django", "FastAPI", "Vue", "React", "Node", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["PostgreSQL", "MySQL", "MongoDB"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Linux",
        "Windows",
        "Agile",
        "Scrum",
        "JIRA",
        "Git",
        "AWS"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Adobe XD", "Figma", "Photoshop"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Sheet Recognizer",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/one.png")
        },
        {
          img: require("./src/assets/portfolio/msr/two.png")
        },
        {
          img: require("./src/assets/portfolio/msr/three.png")
        },
        {
          img: require("./src/assets/portfolio/msr/four.png")
        }
      ],
      technologies: ["Computer Vision", "OpenCV", "AI", "Flask", "Sockets"],
      category: "Algorithm",
      date: "Jan, 2020 - Mar, 2020",
      github:
        "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      description:
        "Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Recognition, this tool is used to detect music notes and rests. It makes use of basic Computer Vision techniques such as Convolution, Edge Detections, Hough Transforms and Template Matching to detect notes and rests on a music sheet. "
    },
    {
      name: "NoQ Job Portal",
      pictures: [
        {
          img: require("./src/assets/portfolio/noq/logo.png")
        },
        {
          img: require("./src/assets/portfolio/noq/one.png")
        },
        {
          img: require("./src/assets/portfolio/noq/two.png")
        },
        {
          img: require("./src/assets/portfolio/noq/three.png")
        },
        {
          img: require("./src/assets/portfolio/noq/four.png")
        }
      ],
      technologies: ["Node", "Vue", "Express", "MongoDB", "Heroku"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://github.com/hrishikeshpaul/noq",
      visit: "https://noq-client.herokuapp.com/",
      description:
        "No Q, is a revolutionary tool which allows for both employers and students to skip the hassle seen in modern day career fairs. For the students, there is an intuitive profile builder where you can add things like education, skills, certifications, honors, and experiences. No Q is not only good for students, but employers as well! A common problem at modern career fairs is the number of unqualified candidates who waste their time when they could be chatting with someone else. With No Q, only the students who meet the positions’ criteria will be able to apply, and from there the recruiter can invite them to talk in more detail at the career fair through our intuitive messaging system."
    },
    {
      name: "POST",
      pictures: [
        {
          img: require("./src/assets/portfolio/post/one.png")
        },
        {
          img: require("./src/assets/portfolio/post/two.png")
        }
      ],
      technologies: [
        "Markov Models",
        "Python",
        "Artificial Intelligence",
        "Vue",
        "Heroku"
      ],
      category: "Algorithm",
      github: "https://github.com/hrishikeshpaul/pos-tagger",
      date: "Oct, 2019 - Nov, 2019",
      visit: "https://post-client.herokuapp.com/",
      description:
        "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling."
    },
    {
      name: "Suicide Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/suicide/suicide-analyzer.png")
        },
        {
          img: require("./src/assets/portfolio/suicide/suicide2-original.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
      category: "Website",
      date: "Oct, 2018 - Nov, 2018",
      github: "https://github.com/hrishikeshpaul/whodata",
      visit: "https://skylarktiral.herokuapp.com/",
      description:
        "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent."
    },
    {
      name: "Sentiment Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/smit/one.png")
        },
        {
          img: require("./src/assets/portfolio/smit/two.png")
        },
        {
          img: require("./src/assets/portfolio/smit/three.png")
        },
        {
          img: require("./src/assets/portfolio/smit/four.png")
        }
      ],
      technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
        "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    },
    {
      name: "Clumpr",
      pictures: [
        {
          img: require("./src/assets/portfolio/clumpr/logo.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/one.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/two.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
    {
      name: "Nutricare",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/one.png")
        },
        {
          img: require("./src/assets/portfolio/nc/two.png")
        },
        {
          img: require("./src/assets/portfolio/nc/three.png")
        },
        {
          img: require("./src/assets/portfolio/nc/four.png")
        },
        {
          img: require("./src/assets/portfolio/nc/five.png")
        },
        {
          img: require("./src/assets/portfolio/nc/six.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
  portfolio_design: [
    {
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;
