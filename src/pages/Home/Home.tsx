import { useEffect } from 'react';
import { urlService } from '../../helpers/extends/extendsUrl';
import styles from './Home.module.scss';

const Home = () => {
  const { getCharacters } = urlService();

  useEffect(() => {
    const get = async () => {
      const tier = {
        pageNumber: 1,
        name:'morty',
        status: '',
        gender: '',
        species:''
      }
      try {
        const res = await getCharacters(tier); 
        const { results } = res.data;
        console.log(results);
      } catch (error) {
        console.error('Error Message: ',error);
      }
    }

    get();
  }, [getCharacters])
  

  return (
    <div className={styles.home}>
        Home
    </div>
  )
}

export default Home