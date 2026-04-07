pipeline {
    agent any

    stages {
        stage('Pull Base Images') {
            steps {
                sh 'docker pull node:16'
                sh 'docker pull nginx:alpine'
            }
        }

        stage('Build Node App') {
            steps {
                sh 'docker build -t node-app -f Dockerfile.node .'
            }
        }

        stage('Build HTML App') {
            steps {
                sh 'docker build -t html-app -f Dockerfile.html .'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker run -d -p 3003:3000 node-app'
                sh 'docker run -d -p 8080:80 html-app'
            }
        }
    }
}
