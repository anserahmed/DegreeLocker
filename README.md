# DegreeLocker
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
  <p align="center">
    A Student Document Management System based on Ethereum Blockchain
    <br />
    <a href="https://github.com/anserahmed/DegreeLocker/edit/main/README.md"><strong>Explore the docs »</strong></a>
    <br />

  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#features">Features</a></li>
    <li>
      <a href="#architecture">Architecture</a>
      <ul>
        <li><a href="#issuer-workflow-process">Issuer workflow process</a></li>
        <li><a href="#verifier-workflow-process">Verifier workflow process</a></li>
        <li><a href="#use-case-diagrams">Use-case diagrams</a></li>
      </ul>
    </li>
    <li><a href="#technologies-used">Technologies used</a></li>
    <li><a href="#local-setup">Local Setup</a></li>
    <li><a href="#authors">Authors</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Contact

- Do you want **project report and slides** along with the **local setup**? then contact either on [LinkedIn](https://www.linkedin.com/in/anser-ahmed-83bba023b/) 
- Don't forget to star ⭐ the repo


<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">


</p> 


DegreeLocker is a project with the objective of implementing a highly effective anti-forgery system for academic documents such as transcripts, diplomas, mark sheets, and various certificates. The primary aim is to guarantee the legitimacy of academic records, thereby minimizing the occurrence of counterfeit certificates and streamlining the document verification process, ultimately leading to time and cost savings for all parties involved.

The DegreeLocker solution revolves around three key roles or entities: the Issuer, the Verifier, and the Student:

The Issuer represents the authoritative entity responsible for creating and issuing electronic certificates, such as a university granting graduation certificates.
The Verifier, on the other hand, is typically an employer or any individual seeking to confirm the validity of a certificate provided by a student, such as a potential employer conducting background checks.
Lastly, the Student is the recipient of the certificate and has access exclusively to their issued documents.

DegreeLocker employs a combination of blockchain technology, IPFS (InterPlanetary File System), and robust hash functions to guarantee the certificate's authenticity. This approach effectively reduces the likelihood of counterfeit certificates and offers a streamlined document verification process, benefiting all stakeholders by saving valuable time and financial resources.


Was this response bett
 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

Security: DegreeLocker leverages the power of blockchain, IPFS, and hash functions to establish a highly secure environment for the storage and validation of academic records. The blockchain, known for its tamper-proof and immutable nature, safeguards data from any unauthorized alterations or deletions. Incorporating hash functions further strengthens security by detecting any document modifications, making it extremely challenging to produce counterfeit certificates.

Efficiency: DegreeLocker optimizes the academic document verification process, resulting in significant time and resource savings for all parties involved. Verifiers gain effortless access to certificates and can readily compare hash values, eliminating the need for manual validation procedures.

Accessibility: DegreeLocker prioritizes accessibility for students, offering easy access to their academic documents. The use of IPFS ensures swift and hassle-free document retrieval, while the inclusion of UUIDs guarantees straightforward document identification and verification.

Transparency: The adoption of blockchain technology in DegreeLocker fosters transparency and accountability throughout the issuance and validation of academic credentials. Every piece of data related to the certificate, including the IPFS link, resides on the blockchain, creating a transparent and auditable record of the entire process.

Universality: DegreeLocker is a versatile solution applicable to any educational institution, establishing a universal standard for verifying the authenticity of academic documents. The platform extends its utility to potential employers, government agencies, or any organization requiring the verification of academic credentials, ensuring widespread usability and trustworthiness.

The DegreeLocker project is essential due to the existing vulnerabilities in the process of issuing and verifying academic documents, which are susceptible to fraudulent activities and counterfeiting. In the absence of a robust anti-forgery mechanism, guaranteeing the legitimacy of academic records becomes a challenging task, resulting in wasted time and resources for all stakeholders. DegreeLocker presents a reliable, streamlined, and transparent solution for the validation of academic documents, thereby assuring the accuracy and trustworthiness of the information contained within the certificates.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Architecture 


### Issuer workflow process

- The below diagram shows the overview of the issuer part of system.

![image](https://user-images.githubusercontent.com/56788568/231941576-ab87de05-b081-42b0-b569-f5e615c6947a.png)

1. Issuer submits raw doc  and user's blockchain address
2. Send raw document to Node server 
3. Generation of UUID .
  Generate UUID , append  UUID to document.
  Calculate hash of document with UUID
4. Upload doc with QR code to IPFS
5. React receives IPFS link & hash value of doc from Node server
6. Store hash value, issuer address, user address and IPFS link
7. React app returns a response: hash value, issuer and user address, IPFS link.

### Verifier workflow process

- The below diagram shows the overview of the verifier part of system.

![image](https://user-images.githubusercontent.com/56788568/231941877-eb61e3ad-06c7-4e1c-8652-ae37590accf2.png)

0. The student has sent a digital document with a UUID, issuer name, user address, and user's name.
1. Find the authentic address of the issuer.
2. Enter the document with the  UUID, issuer address, user address, and user name.
3. Pass the document to the node server.
4. Compute the hash value of the document entered by the verifier.
5. Return the hash value.
6. Send the UUID, hash value, issuer address, user address, and user name to the blockchain for verification.
7. Execute the smart contract for verification by matching the UUID associated with the user's address and name and the hash with the verifier-provided details.
8. Return the result of verification to the React App.
9. Return the verification result to the verifier.

### Use-case diagrams

- The below are use-case diagrams of Issuer, Verifier and User(Student)

![image](https://user-images.githubusercontent.com/56788568/231942409-48843d21-7ffe-436b-91b2-350b8588f00b.png)

![image](https://user-images.githubusercontent.com/56788568/231942481-18024564-9c8a-4de5-81c1-3bf7f18d2cf3.png)

![image](https://user-images.githubusercontent.com/56788568/231942572-55d21117-059a-4aa0-b506-4cd6f67ce25d.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies Used

- Workflow and Architecture Design
  - Excalidraw • Draw.io
- Frontend
  - React.js and related packages
  - CSS and related packages
- Blockchain network: Ethereum
- Smart contracts are written in **Solidity** programming language
- Smart contracts compilation and deployment to test network was done using **Hardhat**
- Blockchain wallet used: **MetaMask** 
- Javascript library to communicate with blockchain: **Ethers.js**
- **IPFS Desktop** for interacting with IPFS without using terminal

<p align="right">(<a href="#readme-top">back to top</a>)</p>


**Developer**

- Anser Ahmed
    - [LinkedIn](https://www.linkedin.com/in/anser-ahmed-83bba023b/) • [Mail](mailto:anserahmed.777@gmail.com) 
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>
