
pipeline {
  agent any

  tools {nodejs "nodejs"}

  stages {    
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
         sh 'npm run test'
      }
    }             
  }
}