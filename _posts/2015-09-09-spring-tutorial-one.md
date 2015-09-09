---
layout: post
tags: Software-Development
date: 2015-09-09 11:00
title: Spring Tutorial One
published: true
---

# Create a new Project

To get you a little bit more familiar with Spring, let's start with a short tutorial in which you set up a new Spring MVC project.

In Eclipse, create a new project by selecting File > New > Other...

In the dialog that opens, from the folder "Maven", select "Maven Project".
![New Project Dialog]({{ site.baseurl }}/assets/img/spring/new-project.png)

Click "Next". On the nex page make sure the "Use default Workspace location" checkbox is checked and "Create a simple project" is **unchecked**. Click "Next".

On the next page, filter available archetypes by the word "webapp". The filter results should have an archetype with the artifact id "maven-archetype-webapp". Select this archetype and click "Next".
![Archetype Selection]({{ site.baseurl }}/assets/img/spring/archetype-selection.png)

Now enter "edu.asu.diging.tutorial.spring" in the field "Group Id" and "one" in the field "Artifact Id". Click "Finish".

Eclipse should now generate a new web application project for you called "one".

So what just happened? You used Maven's archetype system to generate a new project with a particular structure, the structure of a typical webapp. Archetypes in Maven are blueprints of projects, and using those blueprints you can create new projects. There are a ton of archetypes for all kinds of purposes. We just used a very basic one.

# Add Spring Dependencies

Next, open the file "pom.xml" of your new project. At the bottom of the editor, you have several tabs. Click on the "pom.xml" tab.
![pom.xml]({{ site.baseurl }}/assets/img/spring/pom-xml.png)

Inside the "dependencies" tag, add the following piece of code:

    <!-- Spring dependencies -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-web</artifactId>
        <version>4.2.1.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>4.2.1.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
        <version>4.2.1.RELEASE</version>
    </dependency>

# Start up your project

Ok, so we are all set up. Let's see if the project starts up. Right click on your project and select "Run As..." > "Run on Server". Select what instance of Tomcat you want your project to run on (if you haven't done so, you need to add Tomcat to your Runtime Environments) and click "Finish". Once Tomcat has started, you should see a page that says "Hello World!" in the browser that opens up in Eclipse.

**Note**: the project would have started just fine if we didn't add the Spring dependencies before. So far, Spring isn't doing anything.

... to be continued
