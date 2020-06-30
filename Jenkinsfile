
pipeline {
    agent any
    stages {
        stage("Clonar") {
            steps {
                git url: 'https://github.com/ericMartAc/FindBookE'
            }
        }
        stage("instalar herramienta") {
            steps {
                sh "sudo apt-get install nodejs"
            }
        }
        stage("Compilar") {
            steps {
                sh "npm install"
            }
        }
        stage("Probar") {
            steps {
                sh "npm run test"
            }
        }
    }
}