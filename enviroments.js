const fs = require('fs');
const path = require('path');

const directory = 'src/enviroments';
const file = 'enviroment.ts';
const productionFile = 'enviroment.prod.ts';

const content = process.env.PRODUCTION_ENVIROMENT;

const fileRoute = directory + "/" + file;
const productionFileRoute = directory + "/" + productionFile;

fs.access(directory, fs.constants.F_OK, (error) => {

  if (error) {
    console.log('src dont exist , creating...', process.cwd());

    fs.mkdir(directory, {
      recursive: true
    }, (error) => {
      if (error) {
        throw error;
      }
    })
  }

  try {
    fs.writeFileSync(fileRoute, content);
    fs.writeFileSync(productionFileRoute, content);

    console.log('Created successfully in', process.cwd());

    if (fs.existsSync(fileRoute)) {
      console.log('File is created', path.resolve(fileRoute));
      const file = fs.readFileSync(fileRoute).toString();
      console.log(file);
    }

    if (fs.existsSync(productionFileRoute)) {
      console.log('File is created', path.resolve(productionFile));
      const file = fs.readFileSync(productionFileRoute).toString();
      console.log(file);
    }

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})
