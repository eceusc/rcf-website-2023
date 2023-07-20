# ECE Reverse Career Fair Website
This site is currently deployed [here](http://ecercf.ucsd.edu).

It is currently setup to provide information about ECE Reverse Career
Fair to both students and companies. In the future, we may want to add a section
to showcase projects as well as company sponsors.

### Contributing
Contributions are always welcome as long you are in the RCF discord!
  
### Updating the website
It would be best to keep the code for every subsequent RCF in separate GitHub
repositories. As such, we can refer to each year's respective website for
inspiration.

The first RCF website was built by Branson using React. As a result, it is
easiest to iterate on the work he has already put towards building the website.
This repository contains updates made for RCF 2023. The original website that
Branson built can be found
[here](https://github.com/eceusc/reverse-career-fair).

#### Deploying the website
- The website is served from [ecercf.ucsd.edu](ecercf.ucsd.edu). 
- When you attach to the server via SSH, you should see 
```
├── htdocs
└── htdocs_2021
```
- The `htdocs` directory is where the build of the React branch is located and
  served.
- To deploy the latest iteration of the website from your local machine, you can
  run the following command to build the project and copy the build file into
  the htdocs directory:
```
npm run build
scp -r ./build/* ecercf@ecercf.ucsd.edu:~/htdocs
```
- [ecercf.ucsd.edu](ecercf.ucsd.edu) should successfully deploy your most recent
  changes
  
### Support

For general support about RCF, email 
[ece-rcf@eng.ucsd.edu](mailto:ece-rcf@eng.ucsd.edu). For support about editing
the website you can contact [bszeto@ucsd.edu](mailto:bszeto@ucsd.edu).
