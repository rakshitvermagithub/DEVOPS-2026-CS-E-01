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
            emailext (
                subject: "SUCCESS: Build #${env.BUILD_NUMBER} - ${env.JOB_NAME}",
                body: """<p>Good news! The build succeeded.</p>
                         <p><b>Job:</b> ${env.JOB_NAME}</p>
                         <p><b>Build Number:</b> ${env.BUILD_NUMBER}</p>
                         <p><b>Build URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
                to: 'rakshitverma034@gmail.com',
                mimeType: 'text/html'
            )
        }
        failure {
            emailext (
                subject: "FAILED: Build #${env.BUILD_NUMBER} - ${env.JOB_NAME}",
                body: """<p>The build failed.</p>
                         <p><b>Job:</b> ${env.JOB_NAME}</p>
                         <p><b>Build Number:</b> ${env.BUILD_NUMBER}</p>
                         <p><b>Build URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
                         <p>Check the console output for details.</p>""",
                to: 'YOUR_EMAIL@gmail.com',
                mimeType: 'text/html'
            )
        }
    }
}
