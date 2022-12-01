import { Subtitle } from "./Subtitle";
import { Text } from "./Text";

const contents = [
    {
        title: 'CSS',
        description: 'CSS é uma linguagem bonitinha que permite estilizar e formatar o HTML'
    },
    {
        title: 'HTML',
        description: 'HTML é a linguagem que define o conteúdo de uma página, é importante usar HTML semântico corretamente para manter a página acessivel'
    },
    {
        title: 'React',
        description: 'React é uma biblioteca de JavaScript que ajuda a criar componentes reutilizaveis e facilita interação com eles, isso ajuda a manter o código mais organizado'
    },
];

const Cards = () => (
    <div>
        {contents.map(({title, description}) => (
            <div className="card" key={title}>
                <Subtitle text={title}/>
                <Text text={description}/>
            </div>
        ))}
    </div>
);

export { Cards };

