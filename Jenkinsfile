pipeline {
  agent any

  tools {nodejs "node"}

  stages {    
    stage('Cloning Git') {
      steps {
        git 'https://github.com/ericMartAc/FindBookE.git'
      }
    }        
    stage('Install dependencies') {
      steps {
        sh 'npm i',
        sh 'npm i -save express'
      }
    }     
    stage('Test') {
      steps {
         sh 'node server.js'
      }
    }             
  }
}