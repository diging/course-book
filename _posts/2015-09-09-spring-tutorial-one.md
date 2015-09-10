---
layout: post
tags: Software-Development
date: 2015-09-09 11:00
title: Spring Tutorial One
published: true
---

## Create a new Project

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

## Fix the Project

Next, we have to make sure our project has all necessary folders. Maven might have missed one or two. In the Project Explorer, open the folder "Java Resources". If this folder does not contain a folder called "src/main/java" and/or "src/test/java", do the following:

- If "src/main/java" is missing: open the folder "src" in the root directory of your project, then open "main". Create a new folder called "java".
- If "src/test/java" is missing: open the folder "src" in the root directory, create a folder "test" in that folder. Then create a folder "java" in your folder "test".

Once you've created those folders, right click on your project and select Maven > Update Project... Select "one" from the list of projects, and click "OK". You should now see the folder(s) you've just created under "Java Resources".

![Source Folders in Project Explorer]({{ site.baseurl }}/assets/img/spring/source-folders.png)

## Add Spring Dependencies

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

## Start up your project

Ok, so we are all set up. Let's see if the project starts up. Right click on your project and select "Run As..." > "Run on Server". Select what instance of Tomcat you want your project to run on (if you haven't done so, you need to add Tomcat to your Runtime Environments) and click "Finish". Once Tomcat has started, you should see a page that says "Hello World!" in the browser that opens up in Eclipse.

**Note**: the project would have started just fine if we didn't add the Spring dependencies before. So far, Spring isn't doing anything.

## Let Spring take over

Now, you are all setup to start with Spring. First, you need to tell Tomcat that you want Spring to handle incoming requests. You do this by specifying which servlet Tomcat should use as "entry point" into your application. Open the file **web.xml** located in **src > main > webapp > WEB-INF**. Add the following code inside the "
" tag after the "display-name" section:

    <servlet>
    	<servlet-name>dispatcher</servlet-name>
    	<servlet-class>
    		org.springframework.web.servlet.DispatcherServlet
    	</servlet-class>
    	<load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
    	<servlet-name>dispatcher</servlet-name>
    	<url-pattern>/</url-pattern>
    </servlet-mapping>

    <context-param>
    	<param-name>contextConfigLocation</param-name>
    	<param-value>/WEB-INF/dispatcher-servlet.xml</param-value>
    </context-param>

    <listener>
    	<listener-class>
    		org.springframework.web.context.ContextLoaderListener
    	</listener-class>
    </listener>

In addition, remove the **!DOCTYPE** declation and replace the **web-app** tag with:

    <web-app id="WebApp_ID" version="2.3"
        xmlns="http://java.sun.com/xml/ns/javaee"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee
        http://java.sun.com/xml/ns/j2ee/web-app_2_3.xsd">

Your file should now look like this:

    <web-app id="WebApp_ID" version="2.3"
        xmlns="http://java.sun.com/xml/ns/javaee"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee
        http://java.sun.com/xml/ns/j2ee/web-app_2_3.xsd">

        <servlet>
            <servlet-name>dispatcher</servlet-name>
            <servlet-class>
                org.springframework.web.servlet.DispatcherServlet
            </servlet-class>
            <load-on-startup>1</load-on-startup>
            <init-param>
                <param-name>contextConfigLocation</param-name>
                <param-value>/WEB-INF/spring/servlet-context.xml</param-value>
            </init-param>
        </servlet>

        <servlet-mapping>
            <servlet-name>dispatcher</servlet-name>
            <url-pattern>/</url-pattern>
        </servlet-mapping>

        <context-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>/WEB-INF/spring/root-context.xml</param-value>
        </context-param>

        <listener>
            <listener-class>
                org.springframework.web.context.ContextLoaderListener
            </listener-class>
        </listener>
    </web-app>

What did you just do? First, you specified a servlet that Tomcat should know (the "servlet" section). You named the servlet "dispatcher" and you told Tomcat that you wanted it to be of type "org.springframework.web.servlet.DispatcherServlet". You also told Tomcat to initialize the dispatcher servlet with a file named **servlet-context.xml** located in **WEB-INF > spring**.

    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>
            org.springframework.web.servlet.DispatcherServlet
        </servlet-class>
        <load-on-startup>1</load-on-startup>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>/WEB-INF/spring/servlet-context.xml</param-value>
        </init-param>
    </servlet>

 Next, you mapped the servlet to the root path of your application. Tomcat will now redirect all incoming requests to "http://you-tomcat/your-application/" to the dispatcher servlet.

    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

The last two sections then specify that Tomcat should load the org.springframework.web.context.ContextLoaderListener, which is configured by the file given in the **context-param** section before. The ContextLoaderListener creates a web application context from which all other contexts inherit (e.g. the context the dispatcher servlet loads).

    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/spring/root-context.xml</param-value>
    </context-param>

    <listener>
        <listener-class>
            org.springframework.web.context.ContextLoaderListener
        </listener-class>
    </listener>

Now, we need to create the context specification files we referenced in the web.xml file. Create two new files called **root-context.xml** and **servlet-context.xml** in the folder **src > main > webapp > WEB-INF > spring** (also create a spring folder in WEB-INF if you haven't done so yet). The file **root-context.xml** should contain the following

    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:context="http://www.springframework.org/schema/context"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="
    http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context-3.0.xsd">


    </beans>

Basically, this context specification tells Spring not to load anything. The file is empty besides the XML root element. This is ok. The root context specifies beans that should be present in all contexts (you can register more than just one servlet in web.xml and each creates its own context).

The file **servlet-context.xml** should contain:

    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:context="http://www.springframework.org/schema/context"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:mvc="http://www.springframework.org/schema/mvc"
        xsi:schemaLocation="
    http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/mvc
    http://www.springframework.org/schema/mvc/spring-mvc.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd">

        <context:component-scan base-package="edu.asu.diging.tutorial.spring" />

        <bean
            class="org.springframework.web.servlet.view.InternalResourceViewResolver">
            <property name="prefix">
                <value>/WEB-INF/views/</value>
            </property>
            <property name="suffix">
                <value>.jsp</value>
            </property>
        </bean>
    </beans>

The **servlet-context.xml** specifies beans that you need in the context of a specific servlet (in our case the dispatcher). So far, it is pretty minimalistic. You register a view resolver that handles our JSP pages for us:

    <bean
        class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix">
            <value>/WEB-INF/views/</value>
        </property>
        <property name="suffix">
            <value>.jsp</value>
        </property>
    </bean>

And you specified that you want to use annotations for the registration of beans, which are all located in sub-packages of edu.asu.diging.tutorial.spring:

    <context:component-scan base-package="edu.asu.diging.tutorial.spring" />

Restart your Tomcat or redeploy your application. It should start up without errors again. **Note:** check the output in your console at the bottom of the Eclipse window to see if exceptions were thrown. Also, scroll up in the console to make sure you're not missing any.

## The first controller

Let's get started with the first controller. First, create a package called edu.asu.diging.tutorial.spring.web in your Java source folder (under Java Resources > src/main/java). In this package, create a class called HomeController.

![HomeController]({{ site.baseurl }}/assets/img/spring/home-controller.png)

The first thing to do is to annotate this class with **@Controller**. You do this right before the class name:

    package edu.asu.diging.tutorial.spring.web;

    import org.springframework.stereotype.Controller;

    @Controller
    public class HomeController {

    }

Next, let's create a method that responds to requests to the root of our web application. Add the following method to your class:

    @RequestMapping(value = "/")
    public String home() {
        return "index";
    }

Then, create a folder called **views** in your **WEB-INF** folder. Move the file **index.jsp** from your **WEB-INF** folder into this new **views** folder. Restart your server. If you open **http://localhost:8080/one/** in your browser, you should now see a "hello world" page. Also, check your condole output. You should find a line that says:

    INFO: Root mapping to handler 'homeController'

How does Spring now to serve up our **index.jsp** when all we return is "index" in our controller method? Let's take a look at the **servlet-context.xml** again. We've specified the following bean:

    <bean
        class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix">
            <value>/WEB-INF/views/</value>
        </property>
        <property name="suffix">
            <value>.jsp</value>
        </property>
    </bean>

This view resolver takes the path we return in our controller method, appends what we specified through the property **suffix** prepends what we specified with the property **prefix** and then tries to find the resulting file path. Try modifying our **home()** method in the **HomeController** to return "index2" instead of index (you have to wait a second after you did the modifcation so that Eclipse can update the code in Tomcat (hotdeploy) or restart the server). If you now reload the page **http://localhost:8080/one/** you should see a 404 error. If you rename **index.jsp** to **index2.jsp**, everything should work fine again.

## Let's create a service

Ok, in the last section we looked at the "view" and the "controller" part of MVC. Let's connect our controller to a model. We start by creating a new package called "edu.asu.diging.tutorial.spring.service". Inside this package, we create a class called "MoodService". Let's also create a second class called "Mood" in another new package "edu.asu.diging.tutorial.spring.domain". Your package structure should now look like this:

![Package Structure]({{ site.baseurl }}/assets/img/spring/package-structure.png)

Now, open **Mood.java** and add a field **feeling** with a getter and setter method and a constructor that initializes the **feelings** field:

    package edu.asu.diging.tutorial.spring.domain;

    public class Mood {

        private String feeling;

        public Mood(String mood) {
            feeling = mood;
        }

        public String getFeeling() {
            return feeling;
        }

        public void setFeeling(String feeling) {
            this.feeling = feeling;
        }
    }

Next, open **MoodService.java** and add a mood **getCurrentMood()** that returns a new mood. Make sure to annotate your class with the annotation **@Service**. This annotation tells Spring that you want the framework to manage your class.

    package edu.asu.diging.tutorial.spring.service;

    import org.springframework.stereotype.Service;

    import edu.asu.diging.tutorial.spring.domain.Mood;

    @Service
    public class MoodService {

        public Mood getCurrentMood() {
            return new Mood("happy");
        }
    }

Now we have to let our controller know about our service class. Open your **HomeController** and add the following lines at the top of the class:

    @Autowired
    private MoodService service;

The whole class should now look like this:

    package edu.asu.diging.tutorial.spring.web;

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Controller;
    import org.springframework.web.bind.annotation.RequestMapping;

    import edu.asu.diging.tutorial.spring.service.MoodService;

    @Controller
    public class HomeController {

        @Autowired
        private MoodService service;

        @RequestMapping(value = "/")
        public String home() {
            return "index2";
        }
    }

Modify your **home()** method to look like this:

    @RequestMapping(value = "/")
    public String home(ModelMap map) {
        map.addAttribute("mood", service.getCurrentMood());
        return "index2";
    }

What did you just do? First we "autowired" our new service class MoodService using *Dependency Injection*. Instead of instantiating the service class ourselves, we let Spring handle that for us. We just tell Spring that we want an object of type MoodService. We do a similar thing in our **home()** method. We tell Spring that we want an object of type **ModelMap** and Spring gives us an appropriate one when calling the method. We than add an attribute to the ModelMap that we can access in our JSP page.

Speaking of which. Let's open our JSP page and edit it as follows:

    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ page isELIgnored="false" %>

    <html>
    <body>
    <h2>Hello World!</h2>

    I am feeling: ${ mood.feeling }.
    </body>
    </html>

Next, open your **pom.xml** and add the following dependency inside **dependencies**:

    <dependency>
    	<groupId>jstl</groupId>
    	<artifactId>jstl</artifactId>
    	<version>1.2</version>
    </dependency>

Restart your server and reload **http://localhost:8080/one** you should now see:

![Index page]({{ site.baseurl }}/assets/img/spring/browser.png)

## Go and fly

Whoohoo, you made it through the whole tutorial! Now, it's time for you to fly on your own. Try if you can get the following done:

- Even a Tomcat server is not always happy. Your MoodService should know several moods, and randomly choose one in the method **getCurrentMood()**. As usual there are different ways of implementing this. Start with defining the different moods in the method itself. If that works, define a list of moods in a field.
**Hint:** instead of initializing fields in the constructor use the annotation **@PostConstruct** on an init method. If you have trouble importing this annotation add the following dependeny to your POM file:

        <dependency>
        	<groupId>javax.annotation</groupId>
        	<artifactId>jsr250-api</artifactId>
        	<version>1.0</version>
        </dependency>

- Remember how you autowired the MoodService? To use this technique to its whole extend, you also need to use an interface instead of a concrete implementation when autowiring. Try to use an interface when autowiring MoodService intead.

- Let's go crazy, and add a second page! Put a link on your index2 page that bring the user to a second page that explains why Tomcat feels the way it feels (e.g. if the first page says that Tomcat feels sad, the second page could say something like because it didn't catch any mice today).

- Last but not least, add your app a repository in your GitHub account and send us a link so we can look at it.

:)
