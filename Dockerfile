# This Dockerfile builds the React front end for nginx
FROM node:18-alpine as build-step
# Configure the main working directory inside the docker image.
# This is the base directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
# Copy the main application
COPY . ./
# # Arguments
# ARG VITE_DAISY_SERVICE_URL
# ENV VITE_DAISY_SERVICE_URL=${VITE_DAISY_SERVICE_URL}
# Build the application
RUN yarn build
# EXPOSE 80
CMD ["yarn", "preview"]

# FROM nginx:stable-alpine-perl
# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# RUN rm -rf ./*
# # Copy static assets from builder stage and configuration
# COPY --from=build-step /usr/src/app/dist .

# COPY ./nginx-config/nginx.conf /etc/nginx/nginx.conf
# COPY ./nginx-config/default.conf.template /default.conf.template
# COPY ./nginx-config/startup.sh /startup.sh

# # Startup to be executable
# RUN chmod +x /startup.sh
# ENTRYPOINT [ "/startup.sh" ]