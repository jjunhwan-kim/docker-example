FROM gradle:7.6.1 as build

WORKDIR /src
COPY . .
RUN gradle bootJar

FROM amazoncorretto:17

WORKDIR /app
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

COPY --from=build /src/build/libs/*.jar app.jar
