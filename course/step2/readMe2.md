    docker run -it --rm -v ${PWD}/app:/app -w /app node:20-alpine sh

when there is problem in windows 

    docker run -it --rm -v ${PWD}/app.tar.gz:/app/app.tar.gz -w /app node:20-alpine sh

