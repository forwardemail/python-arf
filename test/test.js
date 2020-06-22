const path = require('path');

const test = require('ava');

const arf = require('..');

test('throws error', async t => {
  await t.throwsAsync(arf());
  t.pass();
});

test('returns json', async t => {
  // <https://raw.githubusercontent.com/danielsen/arf/master/test/resources/sample_arf_message.txt>
  const result = await arf(path.join(__dirname, 'test.eml'));
  t.log(result);
  t.true(typeof result === 'object');
});
