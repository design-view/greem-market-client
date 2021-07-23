import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Header = () => {
    const history = useHistory();
    return (
        <header className="inner">
            <div>
                <h1><Link to={'/'}><img src="/images/icons/logo.png" alt="그랩마켓" /></Link></h1>
            </div>
            <Button size="large" onClick={() => {
                //다른경로로 이동
                history.push('/upload');
            }} icon={<DownloadOutlined />}>
                상품업로드
            </Button>
        </header>
    )
}
export default Header;
