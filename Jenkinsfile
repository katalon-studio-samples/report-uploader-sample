pipeline {
    agent any
    stages {
        stage ('Prepare') {
            agent any
            steps {
                sh 'mkdir -p $HOME/docker-cache-node && chmod 777 $HOME/docker-cache-node'
            }
        }
        stage ('Test') {
            agent {
                docker {
                    image 'node:10.15.3'
                     args '-v /$HOME/docker-cache-node:/tmp/docker-cache-node -e "HOME=/tmp/docker-cache-node"'
                }
            }
            steps {
                sh '''
                    set -ex
                    npm install
                    npm test
                '''
                stash includes: 'report/**/*', name: 'report'
            }
        }

        stage ('Upload report to TestOps 1') {
            agent {
                docker {
                    image 'katalonstudio/report-uploader:0.0.7.11'
                }
            }
            environment {
                PASSWORD = credentials("KATALON_API_KEY")
                PROJECT_ID = 50236
                TYPE = 'junit'
                REPORT_PATH = "${WORKSPACE}/report"
            }
            steps {
                unstash 'report'
                sh 'uploader.sh'
            }
        }
    }
}
