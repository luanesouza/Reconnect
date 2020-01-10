import axios from 'axios';

const URL = 'http://localhost:3000'

const allDiaries = async () => {
  try {
    const res = await axios.get(`${URL}/diaries`)
    console.log('this is the response', res.data);

    return res.data

  } catch(e) {
      console.error(e.message);
  }
}

export {allDiaries}
