# bowling-score
Give a list of throws returns the round score

Assumptions:
* number of throws are not validated
* computes score using standard 10-pin bowling rules for strike and spare
*

## Installation
* Requires Node `v10+`

```
$ npm i
$ npm test
```

## Usage
```
$ npm start 10 10 10 10 10 10 10 10 10 10 10 10

> bowling-score@1.0.0 start /home/nish/Documents/work/projects/bowling-score
> node index.js "10" "10" "10" "10" "10" "10" "10" "10" "10" "10" "10" "10"

300
```

or

```
$ node index.js 10 10 10 10 10 10 10 10 10 10 10 10
300
```
