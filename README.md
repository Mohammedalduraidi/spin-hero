# Project Name

> SpinHero

### Installation

Make sure you are in the root directory and run 
`npm install`

### ENV File Includes :
```env
REACT_APP_MARVEL_BASE_URL={{ADD_YOUR_BASE_URL}}
REACT_APP_MARVEL_PUBLIC_KEY={{ADD_YOUR_PUBLIC_KEY}}
REACT_APP_MARVEL_PRIVATE_KEY={{ADD_YOUR_PRIVATE_KEY}}
```
* Prepare the environment variables 
  * Create environment variables file `cp sample.env .env`.
  * Specify the appropriate configs by modifying `.env` file.

### Available Scripts

### `npm run start`
Runs the app in the development mode.

### Docker Usage
#### To be able to run a docker container, you need to build an image first.

#### Build Image
`docker build --build-arg REACT_APP_MARVEL_PUBLIC_KEY="<PUBLIC_KEY>" --build-arg REACT_APP_MARVEL_PRIVATE_KEY="<PRIVATE_KEY>" --build-arg REACT_APP_MARVEL_BASE_URL="<BASE_URL>" -t <image-name> <path/to/dockerFile>`

#### Run The Container
`docker run -p 3000:80 <image-name>`


### Cheers
