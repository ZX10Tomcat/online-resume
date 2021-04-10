import React from 'react';
import { Box, Heading, } from 'grommet';
import { UserExpert } from 'grommet-icons';
import photo from './resume_photo.jpg';

const About = (props) => {    
  
    return (      
      <div id='about' style={{paddingTop:'65px'}}><big><strong>Full stack developer aspired in Data Science</strong></big><br/>
      {(props.size ==='small' || props.size ==='medium') && <div align='center'><img src={photo} alt = 'Bogdan Samoletskyi' width='159' height='207' /></div>}
        <Box
            margin={{ left: 'none', right: 'none', vertical: 'large' }}>
              <Box
                 flex
                 pad={{ left: 'medium', right: 'small', vertical: 'none' }}
                 fill='horizontal'
                 align = 'start'                       
                 elevation='large'
                 background='#669bbc' 
                 width='large' 
                 style={{width:'100%'}}                    
              >
                <Heading level='3'> <UserExpert color='#444444' size='medium' /> About </Heading>
              </Box>
              <Box 
                 direction='row'
                 background='light-3'                                              
                 elevation='large'>
              <Box
                flex
                 pad='medium' 
                 fill='horizontal'
                 align = 'start' 
                 width='xlarge' 
                 justify='start'         
              >                 
                 <big><strong>Always open for new opportunities and challenges to make the world better.</strong></big>
                 
                 <p>
                    During my career, I went a long way from a junior PHP developer to a senior full-stack developer in a big company. <br />
                    Worked in various companies and with various technologies, primarily with .Net C# stack, ASP .Net and .Net Core.<br /><br />
                    I am always aspired to learn new technologies and tools, to make work for business better and faster.<br />
                    Willing to know what is the best fit to the project needs. Want to have strong background knowledge.<br />
                    Trying to do my best to use my knowledge in problem-solving tasks.<br/><br />
                    I have good spoken English and fluent Ukrainan and Russian.
                    <br /><br />
                    Interested in the Data science projects and in cloud technologies and have a blog on Medium, where I’m writing about Data science. <br />
                    Passed AWS Certified Developer Associate exam and will be excited to use my knowledge as a developer and help the company to grow. 

              </p>                    
              </Box>
              {(props.size !=='small' && props.size !=='medium') && (
              <Box 
                pad={{ left: 'medium', right: 'none', vertical: 'medium' }}
              >
                   <img src={photo} alt = 'Bogdan Samoletskyi' width='159' height='207'/>
              </Box>
               )}
              </Box>                   
              </Box>  
         </div>
    )}

    export default About;
