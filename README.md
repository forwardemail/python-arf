# python-arf

[![build status](https://img.shields.io/travis/com/forwardemail/python-arf.svg)](https://travis-ci.com/forwardemail/python-arf)
[![code coverage](https://img.shields.io/codecov/c/github/forwardemail/python-arf.svg)](https://codecov.io/gh/forwardemail/python-arf)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/forwardemail/python-arf.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/python-arf.svg)](https://npm.im/python-arf)

> Node.js wrapper around the Python package arf, which is a processor for Abuse Reporting Format (ARF) messages.


## Table of Contents

* [Requirements](#requirements)
* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Requirements

1. Ensure that you have a Python version of >= 3.5 installed (we do not support older versions of Python anymore across the entire organization):

   ```sh
   python3 --version
   ```

2. Install the package [arf](https://github.com/danielsen/arf) ([not yet available in pip](https://github.com/danielsen/arf/issues/1)):

   ```sh
   #
   # NOTE: we cannot use `git clone https://github.com/danielsen/arf.git`
   #       until <https://github.com/danielsen/arf/pull/3> is merged
   git clone https://github.com/niftylettuce/arf.git
   cd arf
   git checkout patch-1
   python3 setup.py install
   ```


## Install

[npm][]:

```sh
npm install python-arf
```

[yarn][]:

```sh
yarn add python-arf
```


## Usage

Note that the `source` is an ARF message and can be a file path (String), String, or Buffer.

```js
const arf = require('python-arf');

// then/catch usage
arf(source)
  .then(console.log)
  .catch(console.error);

// async/await usage
(async () => {
  try {
    const result = await arf(source);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();
```

Note that `result` is an Object that looks like this:

```js
{
  MessageHeaders: {
    Received: [
      'from example.com (example.com [10.0.1.11])    by example.net with ESMTP id O63d4137594e46; Thu, 08 Mar 2005 16:00:00 -0400',
      'from mailserver.example.net (mailserver.example.net [192.0.2.1]) by example.com with ESMTP id M63d4137594e46; Thu, 08 Mar 2005 14:00:00 -0400'
    ],
    From: '<abusedesk@example.com>',
    Date: 'Thu, 8 Mar 2005 17:40:36 EDT',
    Subject: 'FW: Earn money',
    To: '<abuse@example.net>',
    MimeVersion: '1.0',
    ContentType: 'multipart/report; report-type=feedback-report; boundary="part1_13d.2e68ed54_boundary"'
  },
  OriginalMessageHeaders: {
    From: '<somespammer@example.net>',
    Received: 'from mailserver.example.net (mailserver.example.net [192.0.2.1]) by example.com with ESMTP id M63d4137594e46; Thu, 08 Mar 2005 14:00:00 -0400',
    To: '<Undisclosed Recipients>',
    Subject: 'Earn money',
    MimeVersion: '1.0',
    ContentType: 'text/plain',
    MessageId: '8787KJKJ3K4J3K4J3K4J3.mail@example.net',
    Date: 'Thu, 02 Sep 2004 12:31:03 -0500'
  },
  FeedbackReport: {
    FeedbackType: 'abuse',
    UserAgent: 'SomeGenerator/1.0',
    Version: '1',
    OriginalMailFrom: '<somespammer@example.net>',
    OriginalRcptTo: '<user@example.com>',
    ArrivalDate: 'Thu, 8 Mar 2005 14:00:00 EDT',
    ReportingMta: 'dns; mail.example.com',
    SourceIp: '192.0.2.1',
    AuthenticationResults: 'mail.example.com; spf=fail smtp.mail=somespammer@example.com',
    ReportedDomain: 'example.net',
    ReportedUri: [ 'http://example.net/earn_money.html', 'mailto:user@example.com' ],
    RemovalRecipient: 'user@example.com'
  },
  OriginalMessagePayload: 'From: <somespammer@example.net>\n' +
    'Received: from mailserver.example.net (mailserver.example.net\n' +
    '\t[192.0.2.1]) by example.com with ESMTP id M63d4137594e46;\n' +
    '\tThu, 08 Mar 2005 14:00:00 -0400\n' +
    'To: <Undisclosed Recipients>\n' +
    'Subject: Earn money\n' +
    'MIME-Version: 1.0\n' +
    'Content-type: text/plain\n' +
    'Message-ID: 8787KJKJ3K4J3K4J3K4J3.mail@example.net\n' +
    'Date: Thu, 02 Sep 2004 12:31:03 -0500\n' +
    '\n' +
    'Spam Spam Spam\n' +
    'Spam Spam Spam\n' +
    'Spam Spam Spam\n' +
    'Spam Spam Spam'
}
```

Therefore if you wanted to access the original message payload in the ARF report (which is what we needed to do in [Forward Email](https://forwardemail.net), then you'd retrieve it via `result.OriginalMessagePayload`.


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
