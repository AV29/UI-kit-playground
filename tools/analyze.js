import webpack from 'webpack';
import config from '../configs/wepback.config.analyze';
import * as chalk from './chalkConfig';

console.log(chalk.chalkProcessing('Generating production bundle for analyze...'));

const compiler = webpack(config);

compiler.run();
