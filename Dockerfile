FROM --platform=$BUILDPLATFORM node:18.12-alpine3.16 AS client-builder
WORKDIR /ui
# cache packages in layer
COPY ui/package.json /ui/package.json
COPY ui/package-lock.json /ui/package-lock.json
RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci
# install
COPY ui /ui
RUN npm run build

FROM alpine
LABEL org.opencontainers.image.title="arqueria-desktop" \
    org.opencontainers.image.description="Software for managing archery tournaments" \
    org.opencontainers.image.vendor="Ernesto Celis" \
    com.docker.desktop.extension.api.version="0.3.4" \
    com.docker.extension.screenshots="[{\"alt\": \"arqueria desktop\",\"url\": \"https://ianseo.arqueria.pro/assets/images/arqueria-de_light_1.png\"}]" \
    com.docker.desktop.extension.icon="https://ianseo.arqueria.pro/assets/images/arqueria.svg" \
    com.docker.extension.detailed-description="Make supereasy to run I@nseo across platforms" \
    com.docker.extension.publisher-url="https://ianseo.arqueria.pro" \
    com.docker.extension.additional-urls="" \
    com.docker.extension.categories="cloud-deployment" \
    com.docker.extension.changelog="Run ianseo in docker desktop"

# COPY --from=builder /backend/bin/service /
COPY docker-compose.yaml .
COPY metadata.json .
COPY arqueria.svg .
COPY --from=client-builder /ui/build ui
# CMD /service -socket /run/guest-services/backend.sock
