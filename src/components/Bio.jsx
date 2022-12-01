import { Subtitle } from './Subtitle';
import { Text } from './Text';
import { Image } from './Image';
import { GiHollowCat } from "react-icons/gi";


const Bio = () => {
    return (
        <div className='card'>
            <Subtitle text={<>Sou Lisa Mascarenhas! <GiHollowCat /></>} />
            <Text text='Aluna reprograma, pessoa transfeminina musicista que estuda programação!' />
            <Image
                src='https://github.com/Lisa-Musi.png'
                alt='Foto de Lisa Mascarenhas'
            />
        </div>
    );
};

export { Bio };