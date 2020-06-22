pipeline {
    agent any

     environment { 
        CI = 'true'
    }

    stages {

        stage('Build') {
            steps {
                sh 'npm install'
            }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}