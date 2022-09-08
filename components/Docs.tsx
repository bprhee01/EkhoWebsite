/* eslint-disable react/jsx-no-comment-textnodes */
import { Grid, Skeleton, Container, List, ThemeIcon, } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';

const child = <Skeleton width={1500}height={250} radius="md" animate={false} />;

export default function Docs() {
  return (
    <Container fluid={true}>
        <Container fluid={true}>
            <h1> What is Ekho?</h1>
            <p> Ekho is an extension of the GitHub Scientist concept,
                specifically designed and packaged up for use when refactoring legacy monolithic modules into microservices.</p>
        </Container>
        <Container fluid={true}>
            <h1> Core Features</h1>
             <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={ <ThemeIcon size={20} radius="xl"> <IconChevronRight size={12} stroke={1.5} /></ThemeIcon>} >
                <List.Item> Easily integrated: Ekho is built as a microservice.
                     Simply spin up a container instance locally or in your cloud provider. </List.Item>
                <List.Item> Easy To Use</List.Item>
                <List.Item> Performant</List.Item>
                <List.Item> Meaningful Data</List.Item>
            </List>
        </Container>

        <Container fluid={true}>
            <h1>Getting Started</h1>
            <h5>Prerequisite</h5>
            <p>Ekho is run as a container instance and accessed via HTTP requests. Here’s how to <a href="https://docs.docker.com/get-docker/
                ">get started</a>. </p> 
            <h3>Using Ekho requires a bit of setup, although we’ve simplified and documented the process to help you along.
                <br/>There are 3 basic steps to get your first experiment started:</h3>
            
            <List
              mt={30}
              spacing="sm"
              size="md"
              icon={ <ThemeIcon size={20} radius="xl"> <IconChevronRight size={12} stroke={1.5} /></ThemeIcon>} >
                <List.Item> Configure Ekho to call your candidate microservice </List.Item>
                <List.Item> Deploy Ekho to your cloud environment</List.Item>
                <List.Item> Write your wrapper function</List.Item>
            </List>

            <List
              mt={30}
              spacing="sm"
              size="xl"
              type={"ordered"}
               >
                <List.Item> <b> Configure your first Experiment</b></List.Item>
                <p> To get started, fork and clone this repo.</p>
                <p> Configuring Ekho is fairly simple, and we’ve abstracted as much configuration as possible into a YAML file to allow you
                     to control your experiments without complicated code changes.
                     There are also a couple of sample experiments set up to get you started. Set up your experiments here.</p>
                <p> Every experiment needs just a few fields:</p>
                <List mt={30} spacing="sm" size="sm">
                    <List.Item><b>name:</b> must match the experiment name from the request</List.Item>
                    <List.Item> <b>enabledPct:</b> a number between 0 and 1 representing the proportion of monolith module calls that result in a trial being conducted.</List.Item>
                    <List.Item> <b>method:</b>  the method we should use to make the API request to the candidate microservice</List.Item>
                    <List.Item> <b>apiEndpoint:</b> the URI of the candidate microservice</List.Item>
                    <List.Item> <b>ignoreMismatchRules:</b> An array of rule objects. Every rule object has a name attribute and an array of 1 or more criteria. We’ll talk about these a little later.</List.Item>
                </List>

                <List.Item> <b> Deploy Ekho to your cloud environment</b></List.Item>
                <p> <b>First, Build a Docker image in the root directory of the cloned repo. </b></p>
                <p> The Dockerfile is pre-configured to expose server port 443.
                     Make sure to build your Docker image for the Operating System/architecture platform of the machine where you will be deploying Ekho.
                      You can do this using the following commands:</p>
                    <pre>
                        <code>
                            //Create a new builder instance <br/>
                            Docker buildx create –name [name-of-this-buildx-instance] <br/>
                            //Specify Docker to use the created buildx instance <br/>
                            Docker buildx use [name-of-this-buildx-instance] <br/>
                            //Building your image to deploy on a linux/amd64 machine <br/>
                            docker buildx build --platform linux/amd64 -t [image-name]:[tag] <br/>
                        
                        </code>
                    </pre>
                <p> <b>Next, Create a MongoDB Instance</b></p>
                <p> Ekho publishes experiment results to MongoDB, a NoSQL database. 
                    Make sure to create a MongoDB database before moving on to the next steps. 
                    If you already have a MongoDB service available, skip this step.</p>
                <p> Create an instance using Docker:</p>
                <pre>
                    <code> 
                        docker run -d --name [container-name] -p 27017:[PORT] \
                        -e MONGO_INITDB_ROOT_USERNAME=[username] \
                        -e MONGO_INITDB_ROOT_PASSWORD=[password] \
                        mongo

                    </code>
                </pre>
                <p> Create an instance using MongoDB Atlas: <br/>
                &nbsp;&nbsp;&nbsp;You can refer to the <a href="https://www.mongodb.com/docs/atlas/getting-started/">MongoDB Atlas documentation</a> to quickly create a free cluster to host a MongoDB instance.
                </p>
                <p><b>Next, Deploy Ekho Locally</b></p>
                <p>You can run Docker container instances individually for your candidate microservice and Ekho. <br/>      
                To run Ekho you can execute the following command:
                </p>
                <pre>
                    <code>
                        Docker run -d [repository]:[tag] -e MONGO_URI=[mongo-uri] <br/>
                        //The [mongo-uri] if using a Docker container instance: <br/>
                        mongodb://localhost:[PORT] <br/>
                        //The [mongo-uri] if using a MongoDB Atlas instance <br/>
                        mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]

                    </code>
                </pre>
                <p> Further documentation for accessing a <a href="https://www.mongodb.com/docs/manual/reference/connection-string/"> MongoDB Atlas instance</a></p>
            </List>

        </Container>

        <Container fluid={true}>
            <h1> Built With</h1>
            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={ <ThemeIcon size={20} radius="xl"> <IconChevronRight size={12} stroke={1.5} /></ThemeIcon>} >
                <List.Item> Typescript </List.Item>
                <List.Item> React</List.Item>
                <List.Item> Chart.js</List.Item>
                <List.Item> Node.js/Express</List.Item>
                <List.Item> Docker</List.Item>
                <List.Item> AWS</List.Item>
                <List.Item> Jest/Supertest</List.Item>
                <List.Item> Webpack</List.Item>
            </List>
        </Container>
    </Container>
  );
}   