const list1 = ['hello', 'hi', 'hi', 'greetings', 'hi', 'greetings', 'hey', 'hi']
const key1 = ['hi', 'hey', 'greetings']

const list2 = ['peter', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers', 'a', 'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked', 'if', 'peter', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers', 'wheres', 'the', 'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked']
const key2 = ['a', 'peter', 'picked', 'piper']

const list3 = ['i', 'saw', 'susie', 'sitting', 'in', 'a', 'shoe', 'shine', 'shop', 'where', 'she', 'sits', 'she', 'shines', 'and', 'where', 'she', 'shines', 'she', 'sits']
const key3 = ['she', 'sits', 'shines']

const equals = (a,b) => {
  return a.join('') === b.join('')
}

const indicyCheck = (list, keywords) => {
 const foo = keywords.sort()
 const options = list.length - keywords.length
 let indices = []

 for (i=0;i<=options;i++ ) {
  let bar = list.slice(i,i+keywords.length).sort()

  if (equals(foo,bar)) {
   indices.push(i)
  }
 }
 
 console.log(indices)
}

indicyCheck(list1, key1);
indicyCheck(list2, key2);
indicyCheck(list3, key3);