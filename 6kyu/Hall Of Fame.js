class HallOfFame {


    //Link: https://www.codewars.com/kata/59879e52704c4f96540000c1/train/javascript    
    constructor(display, arr) {
        this.display = display || 5;
        if (arr) arr = arr.sort((a, b) => b[1] - a[1]);

        if (arr) {
            this.arr = arr;
            let res = [];//new Array(arr.length);
            arr.forEach((elem) => {
                res.push(`${elem[0]}: ${elem[1]}`)
            })
            if (res.length < this.display) {
                res.push(...new Array(this.display - res.length).fill(''));
            }
            else
                res = res.slice(0, this.display);
            this.list = res;
        }
        else {
            this.arr = new Array(this.display).fill('');
            this.list = new Array(this.display).fill('');
        }
    }

    get list() { return this._list; }

    set list(res) {
        this._list = res;
    }
    add(player) {

        this.arr = this.list.reduce((acc, elem) => {
            if (elem.includes(':'))
                acc.push([elem.split(':')[0], +elem.split(':')[1]]);
            return acc;
        }, []) || [];
        this.arr.push(player);
        this.arr = this.arr.sort((a, b) => {
            if (a[1] === undefined)
                return -1;
            else if (b[1] === undefined) {
                return 1;
            } else if (b[1] === a[1]) {
                return a[0].localeCompare(b[0]);
            }
            return b[1] - a[1];

        });
        let res = [];
        this.arr.forEach((elem) => {
            res.push(`${elem[0]}: ${elem[1]}`)
        })
        if (res.length < this.display) {
            res.push(...new Array(this.display - res.length).fill(''));
        }
        else
            res = res.slice(0, this.display);
        this.list = res;
        return this;
    }

}