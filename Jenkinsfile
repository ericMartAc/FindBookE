pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    tools {nodejs "node"}
    stages {

        stage('Depend') {
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
