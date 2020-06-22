pipeline {
    agent any
    tools {nodejs "node"}
    stages {

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
            	sh 'npm test'
                sh '.config/jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') { 
            steps {
                sh '.config/jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh '.config/jenkins/scripts/kill.sh' 
            }
        }
    }
}
