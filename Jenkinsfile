pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checked out repo successfully.'
            }
        }

        stage('Test Connection') {
            steps {
                echo 'Jenkins is successfully connected to GitHub!'
                sh 'date'
                sh 'whoami'
                sh 'pwd'
                sh 'ls -la'
            }
        }
    }

    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
