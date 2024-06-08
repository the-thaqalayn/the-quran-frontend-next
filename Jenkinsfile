pipeline{
    agent{
        label "agent0"
    }
    stages{
        stage("Fetch Repo"){
            steps{
                git branch: 'feature', credentialsId: 'jenkins-github', url: 'https://github.com/mehradi-github/the-quran-frontend-next.git'
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}