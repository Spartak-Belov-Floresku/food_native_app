import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer xUF0Dd4mdFGvtl87j4m_dnxLdGXPTHscY6ZvrW501qzrT-5x-bEQbtfDLoy69W4IVVDtyPwdHP_3oc6XbbMGLIwtQfktdQWJopNX6mLrtkNXMttBahGr42S117TcZXYx'
    }
});
