import React, { useState } from 'react';
import './App.css';
import { TextField, Typography, Box, Card, Button } from '@mui/material';

function App() {
  const [input, setInput] = useState([]);
  const [result, setResult] = useState([]);
  const [inputNumber, setInputNumber] = useState([]);
  const [count, setCount] = useState(0);
  const [smiles, setSmiles] = useState([]);
  const [countSmiles, setCountSmiles] = useState(0);
  //console.log("🚀 ~ file: App.js:7 ~ App ~ input:", input)
  function permute(permutation) {
    var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push(permutation.slice());
      } else {
        c[i] = 0;
        ++i;
      }
    }
    return joinResult(result);
  }

  function joinResult(arr) {
    let resultStr = [];
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        temp += arr[i][j].toString();

      }
      console.log(temp)
      resultStr.push(temp)
      temp = '';
    }
    return resultStr;
  }
  //console.log(joinResult(resultArr))
  function showResult() {
    let inputArr = input.split('');
    setResult(permute(inputArr));
  }

  function showOddInt() {
    let inputArr = inputNumber.toString().split('');
    let counts = {};
    for (const num of inputArr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.log('count', counts);
    for (const [key, value] of Object.entries(counts)) {
      if (value % 1 === 0) {
        setCount(key);
        return;
      }
    }
  }

  function countSmileys(arr) {
    let count = 0;
    for (let smile of arr) {
      if (smile === ':)' || smile === ';)' || smile === ':-)' || smile === ';-)' || smile === ':~)' || smile === ';~)' || smile === ':D' || smile === ';D' || smile === ':-D' || smile === ';-D' || smile === ':~D' || smile === ';~D') {
        count++;
      }
    }
    return count;
  }
  //console.log('smiles = ', countSmileys([':)', ';(', ';}', ':-D']));
  console.log('smiles =', countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
  console.log('smiles =', countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
  console.log('smiles =', countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;


function showSmiles() {
  let inputArr = smiles.toString().split(',');
  let count = countSmileys(inputArr);
  setCountSmiles(count);
}
  return (
    <Box className="App">
      <Typography variant="h3" component="h1" gutterBottom>Assessment from Neversitup</Typography>
      <Box className="section">
        <Box sx={{ border: 1, maxWidth: '80%', p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>1. Permutation</Typography>
          <TextField name="input-array" onChange={(e) => setInput(e.target.value)} label="Input anything here" variant="standard" />
          <Button variant="contained" onClick={showResult}>See The Result</Button>
          <Card sx={{ mt: 3, overflow: 'auto', p: 3 }}>{JSON.stringify(result)}</Card>
        </Box>
      </Box>
      <Box className="section">
        <Box sx={{ border: 1, maxWidth: '80%', p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>2. Find the odd int</Typography>
          <TextField name="input-array" onChange={(e) => setInputNumber(e.target.value)} label="Input numbers here" variant="standard" />
          <Button variant="contained" onClick={showOddInt}>See The Result</Button>
          <Card sx={{ mt: 3, overflow: 'auto', p: 3 }}>{JSON.stringify(count)}</Card>
        </Box>
      </Box>
      <Box className="section">
        <Box sx={{ border: 1, maxWidth: '80%', p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>3. Count the smiley faces!</Typography>
          <Typography variant="h6" component="h2" gutterBottom>It's code from line 69-78 in App.js file</Typography>
          <TextField name="input-array" onChange={(e) => setSmiles(e.target.value)} label="Input smiles here separate by ','" variant="standard" />
          <Button variant="contained" onClick={showSmiles}>See The Result</Button>
          <Card sx={{ mt: 3, overflow: 'auto', p: 3 }}>{JSON.stringify(countSmiles)}</Card>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
