var lunr_index = lunr(function () {
    this.field('title', {boost: 10});
    this.field('body');
    this.ref('url');
 });
 

lunr_index.add({ url: '/2015/07/10/code-style.html', title: "Code Style", body: "For Java code, we will follow Google's code style guidelines. Please read up on the [guidelines](http://google.github.io/styleguide/javaguide.html). The only rule we change is the indentation. Instead of an indentation of 2, we use 4 spaces to indent the next level.\n\nYou can set your Eclipse preferences to only use spaces (and avoid tabs) by doing the following:\n\n1. Go to Eclipse's preferences\n1. Expand Java >> Code Style\n1. Go to Formatter\n1. Click the Edit button\n1. Click the Indentation tab\n1. Set Tab policy to \"Spaces only\"\n1. Make sure \"Indentation size\" is set to 4.\n1. Click ok.\n1. Close the preference dialog.\n"})
lunr_index.add({ url: '/2015/07/10/infrastructure.html', title: "Software Development Infrastructure", body: "In the Digital Innovation Group, we follow Continous Integration principles as much as possible. We are still in the process of setting up the infrastructure, but ideally all projects will use the following components.\n\n1. Source code is hosted at GitHub. Since all of our software is open source, all projects will be hosted in public repositories.\n2. Tests will run every time a change is pushed to the master branch of the repository or a pull request is made. Tests are run by either Travis CI or Jenkins.\n3. Jenkins will run code style checks on your committed code. If there are errors or warnings, it is your responsibility to fix these before a pull request can be merged.\n3. After a change has been pushed to/merged into the master branch, web applications will be deployed to a test instance by Jenkins.\n\nIf any of the above steps fail, it is your responsibility to check why a step failed and to fix it.\n"})
lunr_index.add({ url: '/2015/07/10/gitflow.html', title: "GitHub Workflow", body: "A few DigInG projects are hosted at SourceForge and use Subversion as version control system. However, most projects are hosted on GitHub and you will most likely interact with GitHub and Git in your projects. We will use the \"Gitflow Workflow\" described in this [article](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). Please read it carefully, you will be expected to follow the described procedure. The most important points for you are:\n\n- For every story or bug you are working on, you will create a branch off of the develop branch. The branch's name will start with \"story\" or \"bugfix\" (depending on the type of ticket you are working) followed by the ticket id.\n- You will push your changes only to this branch.\n- Once you are done with your ticket, you will create a pull request to the develop branch.\n- Tests and code style checks will be run on your code.\n- If those pass, we will review your code:\n\t- If changes are required, you will edit your code and create a new pull request when you're done.\n- Once the test, code style checks, and code review pass, we will merge your pull request.\n- You will then delete your branch.\n\nRemember, unless there are urgent bugfixes or other things that need to be changed in the develop branch, you will never directly push to the develop branch. You will also never push to the master branch.\n"})
lunr_index.add({ url: '/2015/07/13/scrum-structure.html', title: "Scrum", body: "In DigInG we follow an agile methodology, specifically Scrum. You will work in small teams, which each has:\n\n- a product owner,\n- a scrum master,\n- and a development team.\n\nThe product owner is the person who knows the product under development and makes decisions about what features should be implemented in what order. The scrum master helps facilitating the scrum process and supports the development team by for example communicating with other parties (e.g. sysadmins) to remove road blocks. The development team is a (diverse) group of people working on developing software.  It usually includes software enginieers, testers, software architects, and others.\n"})
lunr_index.add({ url: '/2015/07/14/github.html', title: "GitHub Account", body: "Most of our projects are hosted on GitHub. In the beginning of the class you will learn how to use Git and GitHub. You will therefore need an account on GitHub. Please create your account by registering [here](https://github.com/join). Choose the free plan and don't create an organization. We will add you to the DigInG organization, once you start working on our projects.\n"})
lunr_index.add({ url: '/2015/07/15/jira-pivotaltracker.html', title: "Issue Tracking", body: "We use several different issue tracking systems for our projects. Depending on what project you are working on, you will need an account in [Jira](https://nexuslab.atlassian.net/) and/or [Pivotaltracker](http://www.pivotaltracker.com/). Once you have created an account let us know what your username is and we will add you to our projects.\n"})
lunr_index.add({ url: '/2015/08/19/python-code-style.html', title: "Python Code Cleanliness - PEP8", body: "For Python code, we will follow the [PEP8 Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/). To ensure that your code conforms to PEP8, we will use a tool called [Pylint](http://www.pylint.org/). You should run Pylint before committing changes on a project.\n\nYou can install Pylint from the Python Package Index using ``pip``:\n\n```bash\n$ pip install pylint\n```\n"})
