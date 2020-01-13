import axios from 'axios';

const URL = 'http://localhost:3000'

const allDiaries = async () => {
  try {
    const res = await axios.get(`${URL}/diaries`)

    return res.data
  } catch(e) {
      console.error(e.message);
  }
}

const oneDiary = async (id) => {
  try {
    const res = await axios.get(`${URL}/diaries/${id}`)
    return res.data
  } catch(e) {
    console.error(e.message);
  }
}

export { allDiaries, oneDiary }
