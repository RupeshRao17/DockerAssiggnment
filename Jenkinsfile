pipeline {
    agent any

    stages {
        stage('Pull Base Images') {
            steps {
                bat 'docker pull node:16'
                bat 'docker pull nginx:alpine'
            }
        }

        stage('Build Node App') {
            steps {
                bat 'docker build -t node-app -f Dockerfile.node .'
            }
        }

        stage('Build HTML App') {
            steps {
                bat 'docker build -t html-app -f Dockerfile.html .'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker run -d -p 3003:3000 node-app'
                bat 'docker run -d -p 8082:80 html-app'
            }
        }
    }
}
