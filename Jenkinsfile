
pipeline {
  agent any

  tools {nodejs "node"}

  stages {    
    stage('Review node and npm installations') {
      steps {
        nodejs(nodeJSInstallationName: 'node12') {
          sh 'npm -v'  //substitute with your code
          sh 'node -v'
        }
      }
    }
    stage('Cloning Git') {
      steps {
        git 'https://github.com/ericMartAc/FindBookE.git'
      }
    }        
    stage('Install dependencies') {
      steps {
        sh 'npm i -save express'
      }
    }     
    stage('Test') {
      steps {
         sh 'node test'
      }
    }             
  }
}