const fs = require('fs');
const os = require('os');
const path = require('path');

const isBuffer = require('is-buffer');
const isValidPath = require('is-valid-path');
const revHash = require('rev-hash');
const semver = require('semver');
const { which, exec } = require('shelljs');

const filePath = path.join(__dirname, '_arf.py');

// ensure python installed
if (!which('python3')) throw new Error(`Python v3.5+ is required`);

const silent = process.env.NODE_ENV !== 'test';

// ensure python v3.5+
let version = exec('python3 --version', { silent });
version = semver.coerce(
  (version.stdout || version.stderr).split(' ')[1].trim()
);

if (!semver.satisfies(version, '>= 3.5'))
  throw new Error(
    `Python v3.5+ is required, you currently have v${version} installed`
  );

async function arf(str) {
  if (!isBuffer(str) && typeof str !== 'string')
    throw new Error('str must be a buffer or string/path');

  if (isBuffer(str) || (typeof str === 'string' && !isValidPath(str))) {
    const tmpPath = path.join(os.tmpdir(), revHash(str));
    await fs.promises.writeFile(tmpPath, str);
    str = tmpPath;
  }

  return new Promise((resolve, reject) => {
    exec(`python3 ${filePath} ${str}`, { silent }, (code, stdout, stderr) => {
      if (code !== 0) return reject(new Error(stderr));
      resolve(JSON.parse(stdout.trim()));
    });
  });
}

module.exports = arf;
