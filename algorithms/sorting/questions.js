//#1 - Sort 10 schools around your house by distance:
// insertion sort, good on small data size, space O(1), schools could be presorted

//#2 - eBay sorts listings by the current Bid amount:
// radix or counting
// $1-100
//#3 - Sport scores on ESPN
//lots of sports types, quick sort
//better space complexity

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// merge sort, worried about performance O(nlog n)

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// insert sort, most of prevs data already sorted

//#6 - Temperature Records for the past 50 years in Canada
// radix/counting if no decimal places

//#7 - Large user name database needs to be sorted. Data is very random.
// Merge sort if we have enough memory
// quicksort
//#8 - You want to teach sorting for the first time
// bubble sort