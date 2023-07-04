class HashTable {
  data;
  constructor(size: number) {
    this.data = new Array(size);
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  get(key: string) {
    const hashVal = this._hash(key);
    return this.data[hashVal];
  }
  set(key: string, value: string) {
    const hashVal = this._hash(key);
    this.data[hashVal] = value;
  }
}

const hash = new HashTable(50);
hash.set('abc', '1010');
hash.set('cde', '2000');
hash.set('efg', '3000');
hash.set('hij', '4000');
hash.set('klm', '5000');
hash.set('nop', '6000');

console.log(hash.get('abc'));
console.log(hash.get('cde'));
console.log(hash.get('efg'));
console.log(hash.get('nop'));


