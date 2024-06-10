pipeline{
    agent {
        label "agent0"
    }
    parameters {
        booleanParam (
            defaultValue: true,
            description: '',
            name: 'FETCH_REPO'
        )
    }
    stages{
        stage("Fetch Repo"){
            when {
                expression { params.FETCH_REPO}
            }
            steps{
                cleanWs()
                git branch: 'feature', credentialsId: 'jenkins-github', url: 'https://github.com/mehradi-github/the-quran-frontend-next.git'
                echo "Fetched Repo"
            }
        }
        stage("Prepare Postgres"){
            sh 'docker compose -f ./compose.database.yml up'
        }
        stage("Build"){
            sh 'docker compose -f ./compose.build.yml up'
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