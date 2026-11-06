import * as api from '@lp-labs/multiset-counter';
import { countItems, subtractCounts } from '@lp-labs/multiset-counter';
console.log(subtractCounts(countItems(['a', 'a', 'b']), countItems(['a'])));
// @ts-expect-error invalid argument must be rejected by declarations
api.countItems('a,b');
