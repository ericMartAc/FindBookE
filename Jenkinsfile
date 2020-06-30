pipeline {
  agent any
 
  tools {nodejs "nodejs"}
 
  stages {
    stage('Tester') {
      steps {
        sh 'npm test'
      }
    }
  }
}