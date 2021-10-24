const fs = require('fs');
const path = require('path');

const directory = 'src/enviroments';
const file = 'enviroment.ts';
const productionFile = 'enviroment.prod.ts';

const content = process.env.PRODUCTION_ENVIROMENT;


fs.access(directory, fs.constants.F_OK, (error) => {
  const fileRoute = directory + "/" + file;

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
    fs.writeFileSync(directory + "/" + productionFile, content);

    console.log('Created successfully in', process.cwd());

    if (fs.existsSync(fileRoute)) {
      console.log('File is created', path.resolve(fileRoute));
      const str = fs.readFileSync(fileRoute).toString();
      console.log(str);
    }

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})
