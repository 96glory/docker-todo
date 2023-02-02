# https://inma.tistory.com/148
# https://imasoftwareengineer.tistory.com/40
# https://imasoftwareengineer.tistory.com/51

# Start with a base image containing Java runtime
FROM openjdk:17-jdk-slim AS builder
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew bootJar

FROM openjdk:17-jdk-slim
COPY --from=builder build/libs/*.jar docker-todo-spring.jar

# Run the jar file
ENTRYPOINT ["java", "-jar", "/docker-todo-spring.jar"]