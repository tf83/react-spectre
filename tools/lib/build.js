import 'colors';
import exec from '../exec';
import fsp from 'fs-promise';
import { srcRoot, libRoot } from '../constants';
import { buildFolder } from '../buildBabel';

export default function BuildCommonJs(options) {
  if (options.docsOnly) return;
  console.log('Building: '.cyan + 'npm module'.green);

  return exec.exec(`rimraf ${libRoot}`)
    .then(() => fsp.mkdirs(libRoot))
    .then(() => buildFolder(srcRoot, libRoot))
    .then(() => console.log('Built: '.cyan + 'npm module'.green));
}
