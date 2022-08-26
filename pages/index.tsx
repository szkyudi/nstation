import { getStationsByName } from '@/lib/api/getStationsByName'
import type { NextPage } from 'next'
import { FormEventHandler, useState } from 'react';

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    try {
      const station = await getStationsByName(name)
      console.log(station);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} />
        <button>送信</button>
      </form>
    </div>
  )
}

export default Home
