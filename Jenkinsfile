pipeline {
    agent any

    stages {
        stage('test') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 6.x') {
                    sh 'npm test'
                }
            }
        }
    }
}