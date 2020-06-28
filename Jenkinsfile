pipeline {
    agent any

    stages {
        stage('test') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 12.18.0') {
                    sh 'npm test'
                }
            }
        }
    }
}