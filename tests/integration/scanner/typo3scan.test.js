// SPDX-FileCopyrightText: 2021 iteratec GmbH
//
// SPDX-License-Identifier: Apache-2.0

const { scan } = require("../helpers");

jest.retryTimes(3);

test(
  "typo3scan scans old-typo3",
  async () => {
    const { categories, severities, count } = await scan(
      "typo3scan-old-typo3",
      "typo3scan",
      ["-d", "http://old-typo3.demo-targets.svc", "--vuln"],
      90
    );

    expect(count).toBe(53);
    expect(categories).toMatchInlineSnapshot(`
      Object {
        "Vulnerability": 53,
      }
    `);
    expect(severities).toMatchInlineSnapshot(`
      Object {
        "high": 53,
      }
    `);
  },
  3 * 60 * 1000
);