---
layout: post
tags: Python-Projects Development-Setup
date: 2015-08-19 15:10
title: Testing in Python Projects
published: true
---

All of our Python projects should include a comprehensive array of tests. For unit tests, we use the built-in Python [unittest](https://docs.python.org/2/library/unittest.html) framework.

To execute tests, we use a package called [nose](https://nose.readthedocs.org/en/latest/). To evaluate test coverage, we use the [coverage plugin](https://nose.readthedocs.org/en/latest/plugins/cover.html).

You should install both ``nose`` and ``coverage`` in your Python environment. For example, using ``pip``:

```bash
$ pip install nose coverage
```

**Prior to submitting a pull request, you should ensure test coverage of at least 95%**. For example, on the [tethne](http://github.com/diging/tethne) project, you would do:

```bash
$ nosetests --with-coverage --cover-package=tethne --cover-min-percentage=95
```

After all of the tests run, you should see something like this:

```
..................................................................................
Name                             Stmts   Miss  Cover   Missing
--------------------------------------------------------------
tethne                              10      0   100%
tethne.analyze                       0      0   100%
tethne.analyze.corpus               88      4    95%   82-84, 168, 171
tethne.analyze.features             40      0   100%
tethne.analyze.graph                17      0   100%
tethne.classes                       0      0   100%
tethne.classes.corpus              103     13    87%   12-14, 18-20, 135-136, 210-214
tethne.classes.feature              98      5    95%   29, 48, 81, 88, 117
tethne.classes.graphcollection     149     11    93%   78, 84, 104, 129, 234-236, 247-249, 259, 274, 335
tethne.classes.paper                30      3    90%   14, 33, 37
tethne.model                        34      9    74%   26-27, 32-33, 43-44, 53, 59-60
tethne.model.corpus                  0      0   100%
tethne.model.corpus.mallet         102     10    90%   148, 159-160, 173, 177, 210-211, 285, 302, 310
tethne.networks                      2      0   100%
tethne.networks.authors              5      0   100%
tethne.networks.base                71      2    97%   96-97
tethne.networks.features            28      0   100%
tethne.networks.papers              11      1    91%   64
tethne.readers                      36     32    11%   61, 63, 96-131
tethne.readers.base                139      0   100%
tethne.readers.dfr                 270    205    24%   98-110, 113, 116, 119, 122-127, 133, 140, 147, 154, 158, 164-180, 259-265, 297-311, 345-359, 395-401, 434-461, 485-536, 551-574, 593-599, 606, 625-651, 670-682, 695-701, 728-749
tethne.readers.wos                 135     17    87%   95-98, 154-155, 242-248, 252-254, 258-260, 291
tethne.utilities                   132     73    45%   9-16, 48-54, 63, 86, 92-95, 102-105, 112-118, 128-133, 144-153, 170-172, 175-176, 197-222, 229-230, 233-238, 241-244
tethne.writers                       0      0   100%
tethne.writers.corpus               57      2    96%   26-27
tethne.writers.graph               175     99    43%   73-184, 202-206, 232-235, 254-256, 262, 278-285, 296-323, 330, 334
--------------------------------------------------------------
TOTAL                             1732    486    72%
nose.plugins.cover: ERROR: TOTAL Coverage did not reach minimum required: 95%
```

Notice that there was only 72% coverage, so the test failed. The ``missing`` column tells you where to look for executable code that is not covered by any tests.
