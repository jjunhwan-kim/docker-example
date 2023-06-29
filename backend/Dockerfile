FROM gradle:7.6.1 as build

WORKDIR /src
COPY . .
RUN gradle bootJar

FROM amazoncorretto:17-alpine3.17

RUN apk update && apk add curl && apk add netcat-openbsd

WORKDIR /app
EXPOSE 8080
CMD nc -z db 3306 && java -jar app.jar
HEALTHCHECK CMD curl --fail http://localhost:8080/health

COPY --from=build /src/build/libs/*.jar app.jar
