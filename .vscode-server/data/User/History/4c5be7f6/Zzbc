FROM ubuntu:22.04

# update package lists
RUN apt-get update

# install dependencies
RUN apt-get install -y <dependency>

# set working directory
WORKDIR /app

# copy project files
COPY . .

# run your application
CMD [ "python", "app.py" ]
