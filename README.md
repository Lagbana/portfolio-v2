# google-cloud-test

IAM & Admin --> Service account --> create service account (use app name) --> set owner status --> done ---> click actions ---> create project (downloads JSON) ---> Download gpg --> Run "GpG encryption

Encrypt:
echo "secretKey" | gpg --batch --no-tty --yes --passphrase-fd 0 --symmetric -o file.txt.gpg file.txt
Decrypt:
echo "secretKey" | gpg --batch --no-tty --yes --passphrase-fd 0 --decrypt -o file.txt file.txt.gpg

(to encrypt the serviceAccout.json)"

## Docker set up

# build environment

FROM node:9.6.1 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:\$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.1 -g
COPY . /usr/src/app
RUN cd client \
 npm run build \
 cd ..
CMD ["npm", "start"]

## Run in terminal

docker build -t google-cloud-test .
// -t google-cloud-test (sets the docker image tag name)

docker run -d -p 8080:8080 google-cloud-test
// -d Default config
// -p 8080:8080 (port forwarding from docker to localhost)

## Create heroku.yml
